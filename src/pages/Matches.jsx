import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import { collection, query, where, getDocs, doc, updateDoc, arrayUnion, arrayRemove } from 'firebase/firestore'
import { db } from '../firebase/config'
import { FaHeart, FaComment, FaTimes, FaUserCircle } from 'react-icons/fa'
import LoadingSpinner from '../components/ui/LoadingSpinner'

export default function Matches() {
  const { currentUser, userProfile } = useAuth()
  const [loading, setLoading] = useState(true)
  const [matches, setMatches] = useState([])
  const [pendingInterests, setPendingInterests] = useState([])
  const [interestsSent, setInterestsSent] = useState([])
  const [activeTab, setActiveTab] = useState('matches')
  
  useEffect(() => {
    const fetchMatchesData = async () => {
      if (!currentUser) return
      
      try {
        setLoading(true)
        
        // In a real app, you would fetch actual matches from Firestore
        // This is simplified for demonstration
        
        // Fetch users who have mutual interest
        const mutualMatches = []
        
        // Fetch pending interests (users who expressed interest in current user)
        const pendingUsers = []
        
        // Fetch interests sent by current user
        const sentInterests = []
        
        setMatches(mutualMatches)
        setPendingInterests(pendingUsers)
        setInterestsSent(sentInterests)
      } catch (error) {
        console.error('Error fetching matches data:', error)
      } finally {
        setLoading(false)
      }
    }
    
    fetchMatchesData()
  }, [currentUser])
  
  const handleAcceptInterest = async (userId) => {
    try {
      if (!currentUser) return
      
      // Update current user's document to add the user to matches
      await updateDoc(doc(db, 'users', currentUser.uid), {
        matches: arrayUnion(userId),
        interestsReceived: arrayRemove(userId)
      })
      
      // Update the other user's document
      await updateDoc(doc(db, 'users', userId), {
        matches: arrayUnion(currentUser.uid),
        interestsSent: arrayRemove(currentUser.uid)
      })
      
      // Update local state
      const acceptedUser = pendingInterests.find(user => user.id === userId)
      setPendingInterests(pendingInterests.filter(user => user.id !== userId))
      setMatches([...matches, acceptedUser])
    } catch (error) {
      console.error('Error accepting interest:', error)
    }
  }
  
  const handleDeclineInterest = async (userId) => {
    try {
      if (!currentUser) return
      
      // Update current user's document to remove the interest
      await updateDoc(doc(db, 'users', currentUser.uid), {
        interestsReceived: arrayRemove(userId)
      })
      
      // Update the other user's document
      await updateDoc(doc(db, 'users', userId), {
        interestsSent: arrayRemove(currentUser.uid)
      })
      
      // Update local state
      setPendingInterests(pendingInterests.filter(user => user.id !== userId))
    } catch (error) {
      console.error('Error declining interest:', error)
    }
  }
  
  const handleCancelInterest = async (userId) => {
    try {
      if (!currentUser) return
      
      // Update current user's document to remove the interest
      await updateDoc(doc(db, 'users', currentUser.uid), {
        interestsSent: arrayRemove(userId)
      })
      
      // Update the other user's document
      await updateDoc(doc(db, 'users', userId), {
        interestsReceived: arrayRemove(currentUser.uid)
      })
      
      // Update local state
      setInterestsSent(interestsSent.filter(user => user.id !== userId))
    } catch (error) {
      console.error('Error canceling interest:', error)
    }
  }
  
  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex justify-center items-center">
        <LoadingSpinner size="large" />
      </div>
    )
  }
  
  // Sample data for demonstration
  const sampleMatches = [
    {
      id: '1',
      displayName: 'Aisha Ahmed',
      age: 28,
      location: 'London, UK',
      profession: 'Doctor',
      photoURL: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      lastActive: '2 hours ago'
    },
    {
      id: '2',
      displayName: 'Fatima Khan',
      age: 26,
      location: 'Birmingham, UK',
      profession: 'Software Engineer',
      photoURL: 'https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      lastActive: '1 day ago'
    },
    {
      id: '3',
      displayName: 'Zainab Malik',
      age: 30,
      location: 'Manchester, UK',
      profession: 'Teacher',
      photoURL: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      lastActive: '3 days ago'
    }
  ]
  
  const samplePendingInterests = [
    {
      id: '4',
      displayName: 'Maryam Hassan',
      age: 27,
      location: 'Leeds, UK',
      profession: 'Accountant',
      photoURL: 'https://images.pexels.com/photos/1820919/pexels-photo-1820919.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      lastActive: '5 hours ago'
    },
    {
      id: '5',
      displayName: 'Amina Patel',
      age: 29,
      location: 'Bristol, UK',
      profession: 'Marketing Manager',
      photoURL: 'https://images.pexels.com/photos/1382731/pexels-photo-1382731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      lastActive: '2 days ago'
    }
  ]
  
  const sampleInterestsSent = [
    {
      id: '6',
      displayName: 'Layla Rahman',
      age: 25,
      location: 'Nottingham, UK',
      profession: 'Graphic Designer',
      photoURL: 'https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      lastActive: '1 day ago'
    },
    {
      id: '7',
      displayName: 'Nadia Ali',
      age: 31,
      location: 'Sheffield, UK',
      profession: 'Pharmacist',
      photoURL: 'https://images.pexels.com/photos/1181579/pexels-photo-1181579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      lastActive: '4 days ago'
    }
  ]
  
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container-custom">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Your Matches</h1>
          <p className="text-gray-600">
            Manage your connections and interests
          </p>
        </div>
        
        {/* Tabs */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
          <div className="border-b">
            <nav className="flex">
              <button
                onClick={() => setActiveTab('matches')}
                className={`px-6 py-4 text-sm font-medium ${
                  activeTab === 'matches'
                    ? 'border-b-2 border-primary-500 text-primary-600'
                    : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Matches ({sampleMatches.length})
              </button>
              
              <button
                onClick={() => setActiveTab('pending')}
                className={`px-6 py-4 text-sm font-medium ${
                  activeTab === 'pending'
                    ? 'border-b-2 border-primary-500 text-primary-600'
                    : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Interests Received ({samplePendingInterests.length})
              </button>
              
              <button
                onClick={() => setActiveTab('sent')}
                className={`px-6 py-4 text-sm font-medium ${
                  activeTab === 'sent'
                    ? 'border-b-2 border-primary-500 text-primary-600'
                    : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Interests Sent ({sampleInterestsSent.length})
              </button>
            </nav>
          </div>
          
          <div className="p-6">
            {/* Matches Tab */}
            {activeTab === 'matches' && (
              <div>
                {sampleMatches.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {sampleMatches.map(match => (
                      <div key={match.id} className="bg-white border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                        <div className="relative h-64">
                          {match.photoURL ? (
                            <img 
                              src={match.photoURL} 
                              alt={match.displayName} 
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                              <FaUserCircle className="text-gray-400 text-6xl" />
                            </div>
                          )}
                        </div>
                        
                        <div className="p-4">
                          <h3 className="text-lg font-semibold text-gray-900 mb-1">
                            {match.displayName}, {match.age}
                          </h3>
                          <p className="text-gray-600 text-sm mb-2">
                            {match.profession} • {match.location}
                          </p>
                          <p className="text-gray-500 text-xs mb-4">
                            Last active: {match.lastActive}
                          </p>
                          
                          <div className="flex space-x-2">
                            <Link 
                              to={`/messages?userId=${match.id}`}
                              className="flex-1 btn btn-primary flex items-center justify-center"
                            >
                              <FaComment className="mr-2" /> Message
                            </Link>
                            
                            <button className="btn btn-secondary">
                              View Profile
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <FaHeart className="mx-auto h-12 w-12 text-gray-300 mb-4" />
                    <h3 className="text-lg font-medium text-gray-900 mb-2">No matches yet</h3>
                    <p className="text-gray-600 max-w-md mx-auto mb-6">
                      When you and another member both express interest in each other, you'll be matched.
                    </p>
                    <Link to="/browse" className="btn btn-primary">
                      Browse Profiles
                    </Link>
                  </div>
                )}
              </div>
            )}
            
            {/* Pending Interests Tab */}
            {activeTab === 'pending' && (
              <div>
                {samplePendingInterests.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {samplePendingInterests.map(user => (
                      <div key={user.id} className="bg-white border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                        <div className="relative h-64">
                          {user.photoURL ? (
                            <img 
                              src={user.photoURL} 
                              alt={user.displayName} 
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                              <FaUserCircle className="text-gray-400 text-6xl" />
                            </div>
                          )}
                        </div>
                        
                        <div className="p-4">
                          <h3 className="text-lg font-semibold text-gray-900 mb-1">
                            {user.displayName}, {user.age}
                          </h3>
                          <p className="text-gray-600 text-sm mb-2">
                            {user.profession} • {user.location}
                          </p>
                          <p className="text-gray-500 text-xs mb-4">
                            Last active: {user.lastActive}
                          </p>
                          
                          <div className="flex space-x-2">
                            <button 
                              onClick={() => handleAcceptInterest(user.id)}
                              className="flex-1 btn btn-success flex items-center justify-center"
                            >
                              <FaHeart className="mr-2" /> Accept
                            </button>
                            
                            <button 
                              onClick={() => handleDeclineInterest(user.id)}
                              className="flex-1 btn btn-danger flex items-center justify-center"
                            >
                              <FaTimes className="mr-2" /> Decline
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <FaHeart className="mx-auto h-12 w-12 text-gray-300 mb-4" />
                    <h3 className="text-lg font-medium text-gray-900 mb-2">No pending interests</h3>
                    <p className="text-gray-600 max-w-md mx-auto mb-6">
                      When someone expresses interest in your profile, they'll appear here.
                    </p>
                    <Link to="/browse" className="btn btn-primary">
                      Browse Profiles
                    </Link>
                  </div>
                )}
              </div>
            )}
            
            {/* Interests Sent Tab */}
            {activeTab === 'sent' && (
              <div>
                {sampleInterestsSent.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {sampleInterestsSent.map(user => (
                      <div key={user.id} className="bg-white border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                        <div className="relative h-64">
                          {user.photoURL ? (
                            <img 
                              src={user.photoURL} 
                              alt={user.displayName} 
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                              <FaUserCircle className="text-gray-400 text-6xl" />
                            </div>
                          )}
                        </div>
                        
                        <div className="p-4">
                          <h3 className="text-lg font-semibold text-gray-900 mb-1">
                            {user.displayName}, {user.age}
                          </h3>
                          <p className="text-gray-600 text-sm mb-2">
                            {user.profession} • {user.location}
                          </p>
                          <p className="text-gray-500 text-xs mb-4">
                            Last active: {user.lastActive}
                          </p>
                          
                          <div className="flex space-x-2">
                            <button 
                              onClick={() => handleCancelInterest(user.id)}
                              className="flex-1 btn btn-danger flex items-center justify-center"
                            >
                              <FaTimes className="mr-2" /> Cancel Interest
                            </button>
                            
                            <button className="btn btn-secondary">
                              View Profile
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <FaHeart className="mx-auto h-12 w-12 text-gray-300 mb-4" />
                    <h3 className="text-lg font-medium text-gray-900 mb-2">No interests sent</h3>
                    <p className="text-gray-600 max-w-md mx-auto mb-6">
                      When you express interest in someone, they'll appear here.
                    </p>
                    <Link to="/browse" className="btn btn-primary">
                      Browse Profiles
                    </Link>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
        
        {/* Membership Upgrade Prompt */}
        {userProfile?.subscription?.plan === 'free' && (
          <div className="bg-gradient-to-r from-primary-500 to-primary-600 rounded-lg shadow-md p-6 text-white">
            <h2 className="text-xl font-semibold mb-2">Upgrade to Premium</h2>
            <p className="mb-4">
              Get unlimited matches, see who's interested in you, and unlock advanced messaging features.
            </p>
            <Link to="/membership" className="btn bg-white text-primary-600 hover:bg-gray-100">
              Upgrade Now
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}
