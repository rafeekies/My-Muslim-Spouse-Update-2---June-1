import React, { createContext, useState, useEffect, useContext } from 'react'
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut, 
  sendPasswordResetEmail,
  updateProfile as firebaseUpdateProfile,
  onAuthStateChanged
} from 'firebase/auth'
import { doc, getDoc, setDoc, updateDoc, serverTimestamp } from 'firebase/firestore'
import { auth, db } from '../firebase/config'

const AuthContext = createContext()

export const useAuth = () => {
  return useContext(AuthContext)
}

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null)
  const [userProfile, setUserProfile] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [authStateReady, setAuthStateReady] = useState(false)

  // Sign up function
  const signup = async (email, password, displayName) => {
    try {
      setError(null)
      const userCredential = await createUserWithEmailAndPassword(auth, email, password)
      
      // Update profile with display name
      if (displayName && userCredential.user) {
        await firebaseUpdateProfile(userCredential.user, { displayName })
      }
      
      // Create user document in Firestore
      await setDoc(doc(db, 'users', userCredential.user.uid), {
        uid: userCredential.user.uid,
        email: userCredential.user.email,
        displayName: displayName || '',
        photoURL: '',
        createdAt: serverTimestamp(),
        lastLogin: serverTimestamp(),
        isActive: true,
        isApproved: false,
        profileCompleted: false,
        role: 'user',
        subscription: {
          plan: 'free',
          startDate: null,
          endDate: null,
          active: false
        }
      })
      
      return { user: userCredential.user }
    } catch (err) {
      setError(err.message)
      throw err
    }
  }

  // Login function
  const login = async (email, password) => {
    try {
      setError(null)
      const userCredential = await signInWithEmailAndPassword(auth, email, password)
      
      // Update last login timestamp
      await updateDoc(doc(db, 'users', userCredential.user.uid), {
        lastLogin: serverTimestamp()
      })
      
      return { user: userCredential.user }
    } catch (err) {
      setError(err.message)
      throw err
    }
  }

  // Logout function
  const logout = async () => {
    try {
      setError(null)
      await signOut(auth)
      setUserProfile(null)
    } catch (err) {
      setError(err.message)
      throw err
    }
  }

  // Reset password function
  const resetPassword = async (email) => {
    try {
      setError(null)
      await sendPasswordResetEmail(auth, email)
    } catch (err) {
      setError(err.message)
      throw err
    }
  }

  // Update user profile
  const updateUserProfile = async (profileData) => {
    try {
      setError(null)
      if (currentUser) {
        // Update the Firebase auth profile if we have displayName or photoURL
        if (profileData.displayName || profileData.photoURL) {
          const authUpdate = {}
          if (profileData.displayName) authUpdate.displayName = profileData.displayName
          if (profileData.photoURL) authUpdate.photoURL = profileData.photoURL
          
          await firebaseUpdateProfile(currentUser, authUpdate)
        }
        
        // Update the Firestore document
        await updateDoc(doc(db, 'users', currentUser.uid), {
          ...profileData,
          updatedAt: serverTimestamp()
        })
        
        // Update the local state
        setUserProfile(prev => ({
          ...prev,
          ...profileData
        }))
        
        return true
      } else {
        console.warn('Cannot update profile: No current user')
        return false
      }
    } catch (err) {
      setError(err.message)
      console.error('Error updating profile:', err)
      return false
    }
  }

  // Fetch user profile from Firestore
  const fetchUserProfile = async (userId) => {
    try {
      setError(null)
      const userDocRef = doc(db, 'users', userId)
      const userDoc = await getDoc(userDocRef)
      
      if (userDoc.exists()) {
        const userData = userDoc.data()
        setUserProfile(userData)
        return userData
      } else {
        console.warn('No user document found in Firestore')
        return null
      }
    } catch (err) {
      setError(err.message)
      console.error('Error fetching user profile:', err)
      return null
    }
  }

  // Listen for auth state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setCurrentUser(user)
      
      if (user) {
        // Fetch the user's profile from Firestore
        try {
          const profile = await fetchUserProfile(user.uid)
          if (!profile) {
            // If no profile exists, create a basic one
            const basicProfile = {
              uid: user.uid,
              email: user.email,
              displayName: user.displayName || '',
              photoURL: user.photoURL || '',
              createdAt: serverTimestamp(),
              lastLogin: serverTimestamp(),
              isActive: true,
              isApproved: false,
              profileCompleted: false,
              role: 'user',
              subscription: {
                plan: 'free',
                startDate: null,
                endDate: null,
                active: false
              }
            }
            
            await setDoc(doc(db, 'users', user.uid), basicProfile)
            setUserProfile(basicProfile)
          }
        } catch (error) {
          console.error('Error fetching/creating user profile:', error)
        }
      } else {
        setUserProfile(null)
      }
      
      setLoading(false)
      setAuthStateReady(true)
    })

    // Cleanup subscription
    return unsubscribe
  }, [])

  const value = {
    currentUser,
    userProfile,
    loading,
    error,
    authStateReady,
    signup,
    login,
    logout,
    resetPassword,
    updateUserProfile,
    fetchUserProfile
  }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}
