import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../firebase/config'
import { FaUser, FaHeart, FaEnvelope, FaSearch, FaCrown, FaUserEdit } from 'react-icons/fa'
import LoadingSpinner from '../components/ui/LoadingSpinner'

export default function Dashboard() {
  const { currentUser, userProfile } = useAuth()
  const [loading, setLoading] = useState(true)
  const [stats, setStats] = useState({
    profileViews: 0,
    interestsReceived: 0,
    interestsSent: 0,
    unreadMessages: 0
  })
  const [recentMatches, setRecentMatches] = useState([])
  const [profileComplete, setProfileComplete] = useState(false)
  
  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        setLoading(true)
        
        if (userProfile) {
          // Check if profile is complete
          setProfileComplete(userProfile.profileCompleted || false)
          
          // Get user stats
          setStats({
            profileViews: userProfile.profileViews || 0,
            interestsReceived: userProfile.interestsReceived?.length || 0,
            interestsSent: userProfile.interestsSent?.length || 0,
            unreadMessages: 0 // This would be calculated from messages collection in a real app
          })
          
          // In a real app, you would fetch recent matches from Firestore
          // This is simplified for demonstration
          setRecentMatches([])
        }
      } catch (error) {
        console.error('Error fetching dashboard data:', error)
      } finally {
        setLoading(false)
      }
    }
    
    fetchDashboardData()
  }, [currentUser, userProfile])
  
  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex justify-center items-center">
        <LoadingSpinner size="large" />
      </div>
    )
  }
  
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container-custom">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard</h1>
          <p className="text-gray-600">
            Welcome back, {userProfile?.displayName || 'User'}
          </p>
        </div>
        
        {/* Profile Completion Alert */}
        {!profileComplete && (
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-8">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm text-yellow-700">
                  Your profile is incomplete. Complete your profile to get better matches and increase your visibility.
                </p>
                <div className="mt-2">
                  <Link to="/edit-profile" className="text-sm font-medium text-yellow-700 hover:text-yellow-600">
                    Complete Profile &rarr;
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-blue-50 text-blue-500 mr-4">
                <FaUser className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600">Profile Views</p>
                <p className="text-2xl font-semibold text-gray-900">{stats.profileViews}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-green-50 text-green-500 mr-4">
                <FaHeart className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600">Interests Received</p>
                <p className="text-2xl font-semibold text-gray-900">{stats.interestsReceived}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-purple-50 text-purple-500 mr-4">
                <FaHeart className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600">Interests Sent</p>
                <p className="text-2xl font-semibold text-gray-900">{stats.interestsSent}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-red-50 text-red-500 mr-4">
                <FaEnvelope className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600">Unread Messages</p>
                <p className="text-2xl font-semibold text-gray-900">{stats.unreadMessages}</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Link to="/browse" className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-blue-50 text-blue-500 mr-4">
                <FaSearch className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Browse Profiles</h3>
                <p className="text-gray-600">Find your perfect match</p>
              </div>
            </div>
          </Link>
          
          <Link to="/edit-profile" className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-green-50 text-green-500 mr-4">
                <FaUserEdit className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Edit Profile</h3>
                <p className="text-gray-600">Update your information</p>
              </div>
            </div>
          </Link>
          
          <Link to="/membership" className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-yellow-50 text-yellow-500 mr-4">
                <FaCrown className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Upgrade Membership</h3>
                <p className="text-gray-600">Get premium features</p>
              </div>
            </div>
          </Link>
        </div>
        
        {/* Recent Matches */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
          <div className="px-6 py-4 border-b">
            <h2 className="text-xl font-semibold text-gray-900">Recent Matches</h2>
          </div>
          
          <div className="p-6">
            {recentMatches.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Match cards would go here */}
                <p className="text-gray-600 col-span-full">No recent matches to display.</p>
              </div>
            ) : (
              <div className="text-center py-8">
                <FaHeart className="mx-auto h-12 w-12 text-gray-300 mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">No matches yet</h3>
                <p className="text-gray-600 max-w-md mx-auto mb-6">
                  Start browsing profiles and express interest to find your perfect match.
                </p>
                <Link to="/browse" className="btn btn-primary">
                  Browse Profiles
                </Link>
              </div>
            )}
          </div>
        </div>
        
        {/* Membership Status */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="px-6 py-4 border-b">
            <h2 className="text-xl font-semibold text-gray-900">Membership Status</h2>
          </div>
          
          <div className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-medium text-gray-900 capitalize">
                  {userProfile?.subscription?.plan || 'Free'} Plan
                </h3>
                <p className="text-gray-600">
                  {userProfile?.subscription?.plan === 'free' 
                    ? 'Upgrade to unlock premium features' 
                    : `Your subscription is active until ${userProfile?.subscription?.endDate 
                        ? new Date(userProfile.subscription.endDate).toLocaleDateString() 
                        : 'N/A'}`
                  }
                </p>
              </div>
              
              {userProfile?.subscription?.plan === 'free' && (
                <Link to="/membership" className="btn btn-primary">
                  Upgrade Now
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
