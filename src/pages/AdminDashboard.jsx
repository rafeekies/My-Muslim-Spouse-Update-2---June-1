import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import { collection, query, where, getDocs, doc, updateDoc, deleteDoc, orderBy, limit } from 'firebase/firestore'
import { db } from '../firebase/config'
import { toast } from 'react-toastify'
import { FaUsers, FaUserCheck, FaUserTimes, FaMoneyBillWave, FaSearch, FaTrash, FaCheck, FaTimes, FaEdit, FaUser } from 'react-icons/fa'
import LoadingSpinner from '../components/ui/LoadingSpinner'

export default function AdminDashboard() {
  const { currentUser, userProfile } = useAuth()
  const [loading, setLoading] = useState(true)
  const [users, setUsers] = useState([])
  const [stats, setStats] = useState({
    totalUsers: 0,
    activeUsers: 0,
    pendingApprovals: 0,
    totalRevenue: 0
  })
  const [searchTerm, setSearchTerm] = useState('')
  const [filterStatus, setFilterStatus] = useState('all')
  const [selectedUser, setSelectedUser] = useState(null)
  const [showUserModal, setShowUserModal] = useState(false)
  const navigate = useNavigate()
  
  useEffect(() => {
    // Check if user is admin
    if (userProfile && userProfile.role !== 'admin') {
      navigate('/dashboard')
      return
    }
    
    fetchAdminData()
  }, [userProfile, navigate])
  
  const fetchAdminData = async () => {
    try {
      setLoading(true)
      
      // Fetch users
      const usersQuery = query(
        collection(db, 'users'),
        orderBy('createdAt', 'desc'),
        limit(50)
      )
      
      const usersSnapshot = await getDocs(usersQuery)
      const usersData = usersSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }))
      
      setUsers(usersData)
      
      // Calculate stats
      const totalUsers = usersData.length
      const activeUsers = usersData.filter(user => user.isActive).length
      const pendingApprovals = usersData.filter(user => user.profileCompleted && !user.isApproved).length
      
      // In a real app, you would calculate actual revenue from your payment processor
      // This is simplified for demonstration
      const totalRevenue = usersData.reduce((sum, user) => {
        if (user.subscription) {
          if (user.subscription.plan === 'basic') return sum + 9.99
          if (user.subscription.plan === 'premium') return sum + 19.99
        }
        return sum
      }, 0)
      
      setStats({
        totalUsers,
        activeUsers,
        pendingApprovals,
        totalRevenue
      })
    } catch (error) {
      console.error('Error fetching admin data:', error)
      toast.error('Failed to load admin data')
    } finally {
      setLoading(false)
    }
  }
  
  const handleApproveUser = async (userId) => {
    try {
      await updateDoc(doc(db, 'users', userId), {
        isApproved: true,
        approvedAt: new Date().toISOString()
      })
      
      // Update local state
      setUsers(users.map(user => 
        user.id === userId ? { ...user, isApproved: true, approvedAt: new Date().toISOString() } : user
      ))
      
      toast.success('User approved successfully')
    } catch (error) {
      console.error('Error approving user:', error)
      toast.error('Failed to approve user')
    }
  }
  
  const handleDeactivateUser = async (userId) => {
    try {
      await updateDoc(doc(db, 'users', userId), {
        isActive: false
      })
      
      // Update local state
      setUsers(users.map(user => 
        user.id === userId ? { ...user, isActive: false } : user
      ))
      
      toast.success('User deactivated successfully')
    } catch (error) {
      console.error('Error deactivating user:', error)
      toast.error('Failed to deactivate user')
    }
  }
  
  const handleActivateUser = async (userId) => {
    try {
      await updateDoc(doc(db, 'users', userId), {
        isActive: true
      })
      
      // Update local state
      setUsers(users.map(user => 
        user.id === userId ? { ...user, isActive: true } : user
      ))
      
      toast.success('User activated successfully')
    } catch (error) {
      console.error('Error activating user:', error)
      toast.error('Failed to activate user')
    }
  }
  
  const handleDeleteUser = async (userId) => {
    if (!window.confirm('Are you sure you want to delete this user? This action cannot be undone.')) {
      return false
    }
    
    try {
      await deleteDoc(doc(db, 'users', userId))
      
      // Update local state
      setUsers(users.filter(user => user.id !== userId))
      
      toast.success('User deleted successfully')
      return true
    } catch (error) {
      console.error('Error deleting user:', error)
      toast.error('Failed to delete user')
      return false
    }
  }
  
  const handleViewUser = (user) => {
    setSelectedUser(user)
    setShowUserModal(true)
  }
  
  const filteredUsers = users.filter(user => {
    const matchesSearch = 
      user.displayName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.location?.toLowerCase().includes(searchTerm.toLowerCase())
    
    if (filterStatus === 'all') return matchesSearch
    if (filterStatus === 'active') return matchesSearch && user.isActive
    if (filterStatus === 'inactive') return matchesSearch && !user.isActive
    if (filterStatus === 'pending') return matchesSearch && user.profileCompleted && !user.isApproved
    if (filterStatus === 'premium') return matchesSearch && user.subscription?.plan === 'premium'
    
    return matchesSearch
  })
  
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
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Admin Dashboard</h1>
          <p className="text-gray-600">
            Manage users, review profiles, and monitor platform activity
          </p>
        </div>
        
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-blue-50 text-blue-500 mr-4">
                <FaUsers className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600">Total Users</p>
                <p className="text-2xl font-semibold text-gray-900">{stats.totalUsers}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-green-50 text-green-500 mr-4">
                <FaUserCheck className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600">Active Users</p>
                <p className="text-2xl font-semibold text-gray-900">{stats.activeUsers}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-yellow-50 text-yellow-500 mr-4">
                <FaUserTimes className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600">Pending Approvals</p>
                <p className="text-2xl font-semibold text-gray-900">{stats.pendingApprovals}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-purple-50 text-purple-500 mr-4">
                <FaMoneyBillWave className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600">Total Revenue</p>
                <p className="text-2xl font-semibold text-gray-900">${stats.totalRevenue.toFixed(2)}</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* User Management */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
          <div className="px-6 py-4 border-b">
            <h2 className="text-xl font-semibold text-gray-900">User Management</h2>
          </div>
          
          <div className="p-6">
            {/* Search and Filter */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 space-y-4 md:space-y-0">
              <div className="relative w-full md:w-64">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaSearch className="text-gray-400" />
                </div>
                <input
                  type="text"
                  className="input pl-10 w-full"
                  placeholder="Search users..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              
              <div className="flex space-x-4">
                <select
                  className="input"
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value)}
                >
                  <option value="all">All Users</option>
                  <option value="active">Active Users</option>
                  <option value="inactive">Inactive Users</option>
                  <option value="pending">Pending Approval</option>
                  <option value="premium">Premium Users</option>
                </select>
                
                <button
                  onClick={fetchAdminData}
                  className="btn btn-secondary"
                >
                  Refresh
                </button>
              </div>
            </div>
            
            {/* Users Table */}
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      User
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Membership
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Joined
                    </th>
                    <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredUsers.length > 0 ? (
                    filteredUsers.map(user => (
                      <tr key={user.id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 h-10 w-10">
                              {user.photoURL ? (
                                <img 
                                  className="h-10 w-10 rounded-full object-cover" 
                                  src={user.photoURL} 
                                  alt={user.displayName} 
                                />
                              ) : (
                                <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
                                  <FaUser className="text-gray-400" />
                                </div>
                              )}
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">
                                {user.displayName}
                              </div>
                              <div className="text-sm text-gray-500">
                                {user.email}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                            user.isActive 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-red-100 text-red-800'
                          }`}>
                            {user.isActive ? 'Active' : 'Inactive'}
                          </span>
                          {user.profileCompleted && !user.isApproved && (
                            <span className="ml-2 px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                              Pending Approval
                            </span>
                          )}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {user.subscription?.plan ? (
                            <span className="capitalize">{user.subscription.plan}</span>
                          ) : (
                            'Free'
                          )}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {user.createdAt ? new Date(user.createdAt).toLocaleDateString() : 'N/A'}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <button
                            onClick={() => handleViewUser(user)}
                            className="text-primary-600 hover:text-primary-900 mr-3"
                          >
                            View
                          </button>
                          
                          {user.profileCompleted && !user.isApproved && (
                            <button
                              onClick={() => handleApproveUser(user.id)}
                              className="text-green-600 hover:text-green-900 mr-3"
                            >
                              Approve
                            </button>
                          )}
                          
                          {user.isActive ? (
                            <button
                              onClick={() => handleDeactivateUser(user.id)}
                              className="text-yellow-600 hover:text-yellow-900 mr-3"
                            >
                              Deactivate
                            </button>
                          ) : (
                            <button
                              onClick={() => handleActivateUser(user.id)}
                              className="text-green-600 hover:text-green-900 mr-3"
                            >
                              Activate
                            </button>
                          )}
                          
                          <button
                            onClick={() => handleDeleteUser(user.id)}
                            className="text-red-600 hover:text-red-900"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="5" className="px-6 py-4 text-center text-sm text-gray-500">
                        No users found matching your search criteria
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        
        {/* User Detail Modal */}
        {showUserModal && selectedUser && (
          <div className="fixed inset-0 bg-gray-600 bg-opacity-75 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="px-6 py-4 border-b flex justify-between items-center">
                <h3 className="text-xl font-semibold text-gray-900">User Details</h3>
                <button
                  onClick={() => setShowUserModal(false)}
                  className="text-gray-400 hover:text-gray-500"
                >
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <div className="p-6">
                <div className="flex flex-col md:flex-row md:items-start">
                  <div className="md:w-1/3 mb-6 md:mb-0 md:pr-6">
                    <div className="flex flex-col items-center">
                      {selectedUser.photoURL ? (
                        <img 
                          className="h-32 w-32 rounded-full object-cover mb-4" 
                          src={selectedUser.photoURL} 
                          alt={selectedUser.displayName} 
                        />
                      ) : (
                        <div className="h-32 w-32 rounded-full bg-gray-200 flex items-center justify-center mb-4">
                          <FaUser className="text-gray-400 text-4xl" />
                        </div>
                      )}
                      <h4 className="text-lg font-semibold text-gray-900">{selectedUser.displayName}</h4>
                      <p className="text-gray-500">{selectedUser.email}</p>
                      
                      <div className="mt-4 flex flex-wrap justify-center gap-2">
                        <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                          selectedUser.isActive 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-red-100 text-red-800'
                        }`}>
                          {selectedUser.isActive ? 'Active' : 'Inactive'}
                        </span>
                        
                        {selectedUser.isApproved ? (
                          <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                            Approved
                          </span>
                        ) : selectedUser.profileCompleted ? (
                          <span className="px-2 py-1 text-xs font-semibold rounded-full bg-yellow-100 text-yellow-800">
                            Pending Approval
                          </span>
                        ) : (
                          <span className="px-2 py-1 text-xs font-semibold rounded-full bg-gray-100 text-gray-800">
                            Incomplete Profile
                          </span>
                        )}
                        
                        <span className="px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800 capitalize">
                          {selectedUser.subscription?.plan || 'Free'}
                        </span>
                      </div>
                    </div>
                    
                    <div className="mt-6 space-y-4">
                      <div>
                        <h5 className="text-sm font-medium text-gray-500">Member Since</h5>
                        <p className="text-gray-900">
                          {selectedUser.createdAt ? new Date(selectedUser.createdAt).toLocaleDateString() : 'N/A'}
                        </p>
                      </div>
                      
                      <div>
                        <h5 className="text-sm font-medium text-gray-500">Last Login</h5>
                        <p className="text-gray-900">
                          {selectedUser.lastLogin ? new Date(selectedUser.lastLogin).toLocaleDateString() : 'N/A'}
                        </p>
                      </div>
                      
                      <div>
                        <h5 className="text-sm font-medium text-gray-500">Role</h5>
                        <p className="text-gray-900 capitalize">
                          {selectedUser.role || 'Member'}
                        </p>
                      </div>
                    </div>
                    
                    <div className="mt-6 space-y-2">
                      {selectedUser.profileCompleted && !selectedUser.isApproved && (
                        <button
                          onClick={() => {
                            handleApproveUser(selectedUser.id)
                            setSelectedUser({...selectedUser, isApproved: true})
                          }}
                          className="w-full btn btn-success flex items-center justify-center"
                        >
                          <FaCheck className="mr-2" /> Approve Profile
                        </button>
                      )}
                      
                      {selectedUser.isActive ? (
                        <button
                          onClick={() => {
                            handleDeactivateUser(selectedUser.id)
                            setSelectedUser({...selectedUser, isActive: false})
                          }}
                          className="w-full btn btn-warning flex items-center justify-center"
                        >
                          <FaTimes className="mr-2" /> Deactivate User
                        </button>
                      ) : (
                        <button
                          onClick={() => {
                            handleActivateUser(selectedUser.id)
                            setSelectedUser({...selectedUser, isActive: true})
                          }}
                          className="w-full btn btn-success flex items-center justify-center"
                        >
                          <FaCheck className="mr-2" /> Activate User
                        </button>
                      )}
                      
                      <button
                        onClick={() => {
                          if (handleDeleteUser(selectedUser.id)) {
                            setShowUserModal(false)
                          }
                        }}
                        className="w-full btn btn-danger flex items-center justify-center"
                      >
                        <FaTrash className="mr-2" /> Delete User
                      </button>
                    </div>
                  </div>
                  
                  <div className="md:w-2/3">
                    <div className="bg-gray-50 p-4 rounded-lg mb-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">Profile Information</h4>
                      
                      {selectedUser.profileCompleted ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <h5 className="text-sm font-medium text-gray-500">Age</h5>
                            <p className="text-gray-900">{selectedUser.age || 'Not specified'}</p>
                          </div>
                          
                          <div>
                            <h5 className="text-sm font-medium text-gray-500">Gender</h5>
                            <p className="text-gray-900 capitalize">{selectedUser.gender || 'Not specified'}</p>
                          </div>
                          
                          <div>
                            <h5 className="text-sm font-medium text-gray-500">Location</h5>
                            <p className="text-gray-900">{selectedUser.location || 'Not specified'}</p>
                          </div>
                          
                          <div>
                            <h5 className="text-sm font-medium text-gray-500">Marital Status</h5>
                            <p className="text-gray-900 capitalize">{selectedUser.maritalStatus || 'Not specified'}</p>
                          </div>
                          
                          <div>
                            <h5 className="text-sm font-medium text-gray-500">Ethnicity</h5>
                            <p className="text-gray-900 capitalize">{selectedUser.ethnicity || 'Not specified'}</p>
                          </div>
                          
                          <div>
                            <h5 className="text-sm font-medium text-gray-500">Religious Level</h5>
                            <p className="text-gray-900 capitalize">{selectedUser.religiousLevel || 'Not specified'}</p>
                          </div>
                          
                          <div>
                            <h5 className="text-sm font-medium text-gray-500">Profession</h5>
                            <p className="text-gray-900">{selectedUser.profession || 'Not specified'}</p>
                          </div>
                          
                          <div>
                            <h5 className="text-sm font-medium text-gray-500">Education</h5>
                            <p className="text-gray-900 capitalize">{selectedUser.education || 'Not specified'}</p>
                          </div>
                        </div>
                      ) : (
                        <p className="text-gray-500">User has not completed their profile yet.</p>
                      )}
                    </div>
                    
                    {selectedUser.profileCompleted && (
                      <>
                        <div className="bg-gray-50 p-4 rounded-lg mb-6">
                          <h4 className="text-lg font-semibold text-gray-900 mb-2">Bio</h4>
                          <p className="text-gray-700">{selectedUser.bio || 'No bio provided.'}</p>
                        </div>
                        
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h4 className="text-lg font-semibold text-gray-900 mb-4">Activity</h4>
                          
                          <div className="space-y-4">
                            <div>
                              <h5 className="text-sm font-medium text-gray-500">Profile Views</h5>
                              <p className="text-gray-900">{selectedUser.profileViews || 0}</p>
                            </div>
                            
                            <div>
                              <h5 className="text-sm font-medium text-gray-500">Interests Sent</h5>
                              <p className="text-gray-900">{selectedUser.interestsSent?.length || 0}</p>
                            </div>
                            
                            <div>
                              <h5 className="text-sm font-medium text-gray-500">Interests Received</h5>
                              <p className="text-gray-900">{selectedUser.interestsReceived?.length || 0}</p>
                            </div>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
