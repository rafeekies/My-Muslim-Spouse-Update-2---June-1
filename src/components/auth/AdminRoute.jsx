import { Navigate } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'
import LoadingSpinner from '../ui/LoadingSpinner'

export default function AdminRoute({ children }) {
  const { currentUser, userProfile, loading } = useAuth()
  
  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <LoadingSpinner size="large" />
      </div>
    )
  }
  
  // Check if user is logged in and has admin role
  if (!currentUser || userProfile?.role !== 'admin') {
    return <Navigate to="/dashboard" />
  }
  
  return children
}
