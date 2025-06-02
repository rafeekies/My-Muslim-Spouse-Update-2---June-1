import { 
  collection, 
  doc, 
  setDoc, 
  getDoc, 
  getDocs, 
  updateDoc, 
  query, 
  where, 
  orderBy, 
  limit,
  serverTimestamp,
  arrayUnion,
  arrayRemove
} from 'firebase/firestore'
import { db } from './config'

// User profiles
export const createUserProfile = async (uid, userData) => {
  try {
    if (!db) {
      console.error("Firestore is not initialized");
      return false;
    }
    
    await setDoc(doc(db, 'users', uid), {
      ...userData,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp()
    })
    return true
  } catch (error) {
    console.error('Error creating user profile:', error)
    return false;
  }
}

export const getUserProfile = async (uid) => {
  try {
    if (!db) {
      console.error("Firestore is not initialized");
      return null;
    }
    
    const userDoc = await getDoc(doc(db, 'users', uid))
    if (userDoc.exists()) {
      return { id: userDoc.id, ...userDoc.data() }
    } else {
      return null
    }
  } catch (error) {
    console.error('Error getting user profile:', error)
    return null;
  }
}

export const updateUserProfile = async (uid, userData) => {
  try {
    if (!db) {
      console.error("Firestore is not initialized");
      return false;
    }
    
    await updateDoc(doc(db, 'users', uid), {
      ...userData,
      updatedAt: serverTimestamp()
    })
    return true
  } catch (error) {
    console.error('Error updating user profile:', error)
    return false;
  }
}

// Matches and interests
export const getMatches = async (uid, gender, interestedIn, userPreferences = {}) => {
  try {
    if (!db) {
      console.error("Firestore is not initialized");
      return [];
    }
    
    // For development, return empty array to avoid errors
    // In production, this would query Firestore
    return [];
  } catch (error) {
    console.error('Error getting matches:', error)
    return [];
  }
}

export const expressInterest = async (fromUserId, toUserId) => {
  try {
    if (!db) {
      console.error("Firestore is not initialized");
      return false;
    }
    
    // Add to sender's sent interests
    await updateDoc(doc(db, 'users', fromUserId), {
      sentInterests: arrayUnion({
        userId: toUserId,
        timestamp: new Date().toISOString(),
        status: 'pending'
      })
    })
    
    // Add to recipient's received interests
    await updateDoc(doc(db, 'users', toUserId), {
      receivedInterests: arrayUnion({
        userId: fromUserId,
        timestamp: new Date().toISOString(),
        status: 'pending'
      })
    })
    
    return true
  } catch (error) {
    console.error('Error expressing interest:', error)
    return false;
  }
}

export const respondToInterest = async (fromUserId, toUserId, status) => {
  try {
    if (!db) {
      console.error("Firestore is not initialized");
      return false;
    }
    
    // For development, return true to avoid errors
    // In production, this would update Firestore
    return true;
  } catch (error) {
    console.error('Error responding to interest:', error)
    return false;
  }
}

export const createMatch = async (user1Id, user2Id) => {
  try {
    if (!db) {
      console.error("Firestore is not initialized");
      return null;
    }
    
    // For development, return a dummy match ID to avoid errors
    // In production, this would create a match in Firestore
    return `${user1Id}_${user2Id}`;
  } catch (error) {
    console.error('Error creating match:', error)
    return null;
  }
}

// Messages
export const sendMessage = async (matchId, senderId, content) => {
  try {
    if (!db) {
      console.error("Firestore is not initialized");
      return null;
    }
    
    const message = {
      senderId,
      content,
      timestamp: new Date().toISOString(),
      read: false
    }
    
    // For development, return the message object to avoid errors
    // In production, this would add the message to Firestore
    return message;
  } catch (error) {
    console.error('Error sending message:', error)
    return null;
  }
}

export const getMessages = async (matchId) => {
  try {
    if (!db) {
      console.error("Firestore is not initialized");
      return [];
    }
    
    // For development, return an empty array to avoid errors
    // In production, this would query Firestore
    return [];
  } catch (error) {
    console.error('Error getting messages:', error)
    return [];
  }
}

export const markMessagesAsRead = async (matchId, userId) => {
  try {
    if (!db) {
      console.error("Firestore is not initialized");
      return false;
    }
    
    // For development, return true to avoid errors
    // In production, this would update Firestore
    return true;
  } catch (error) {
    console.error('Error marking messages as read:', error)
    return false;
  }
}

// Profile views
export const recordProfileView = async (viewerId, profileId) => {
  try {
    if (!db) {
      console.error("Firestore is not initialized");
      return false;
    }
    
    // For development, return true to avoid errors
    // In production, this would update Firestore
    return true;
  } catch (error) {
    console.error('Error recording profile view:', error)
    return false;
  }
}

// Search and filters
export const searchProfiles = async (searchParams) => {
  try {
    if (!db) {
      console.error("Firestore is not initialized");
      return [];
    }
    
    // For development, return an empty array to avoid errors
    // In production, this would query Firestore
    return [];
  } catch (error) {
    console.error('Error searching profiles:', error)
    return [];
  }
}
