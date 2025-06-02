import { Navigate } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'
import LoadingSpinner from '../ui/LoadingSpinner'

export default function PrivateRoute({ children }) {
  const { currentUser, loading } = useAuth()
  
  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <LoadingSpinner size="large" />
      </div>
    )
  }
  
  return currentUser ? children : <Navigate to="/login" />
}
