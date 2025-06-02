import { useState } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'
import { FaUser, FaBars, FaTimes, FaSignOutAlt, FaCog, FaUserCircle, FaEnvelope, FaHeart, FaSearch, FaCrown, FaShieldAlt } from 'react-icons/fa'

export default function Header() {
  const { currentUser, userProfile, logout } = useAuth()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()
  
  const handleLogout = async () => {
    try {
      await logout()
      navigate('/login')
    } catch (error) {
      console.error('Failed to log out', error)
    }
  }
  
  const isAdmin = userProfile?.role === 'admin'
  
  const closeMenus = () => {
    setIsMenuOpen(false)
    setIsProfileMenuOpen(false)
  }
  
  return (
    <header className="bg-white shadow-md">
      <div className="container-custom py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center" onClick={closeMenus}>
            <span className="text-2xl font-bold text-primary-600">IslamicMatch</span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link 
              to="/" 
              className={`nav-link ${location.pathname === '/' ? 'text-primary-600' : 'text-gray-600 hover:text-primary-600'}`}
              onClick={closeMenus}
            >
              Home
            </Link>
            
            {currentUser ? (
              <>
                <Link 
                  to="/dashboard" 
                  className={`nav-link ${location.pathname === '/dashboard' ? 'text-primary-600' : 'text-gray-600 hover:text-primary-600'}`}
                  onClick={closeMenus}
                >
                  Dashboard
                </Link>
                
                <Link 
                  to="/browse" 
                  className={`nav-link ${location.pathname === '/browse' ? 'text-primary-600' : 'text-gray-600 hover:text-primary-600'}`}
                  onClick={closeMenus}
                >
                  Browse
                </Link>
                
                <Link 
                  to="/matches" 
                  className={`nav-link ${location.pathname === '/matches' ? 'text-primary-600' : 'text-gray-600 hover:text-primary-600'}`}
                  onClick={closeMenus}
                >
                  Matches
                </Link>
                
                <Link 
                  to="/messages" 
                  className={`nav-link ${location.pathname === '/messages' ? 'text-primary-600' : 'text-gray-600 hover:text-primary-600'}`}
                  onClick={closeMenus}
                >
                  Messages
                </Link>
                
                <Link 
                  to="/membership" 
                  className={`nav-link ${location.pathname === '/membership' ? 'text-primary-600' : 'text-gray-600 hover:text-primary-600'}`}
                  onClick={closeMenus}
                >
                  Membership
                </Link>
                
                {isAdmin && (
                  <Link 
                    to="/admin" 
                    className={`nav-link ${location.pathname === '/admin' ? 'text-primary-600' : 'text-gray-600 hover:text-primary-600'}`}
                    onClick={closeMenus}
                  >
                    Admin
                  </Link>
                )}
              </>
            ) : (
              <>
                <Link 
                  to="/login" 
                  className={`nav-link ${location.pathname === '/login' ? 'text-primary-600' : 'text-gray-600 hover:text-primary-600'}`}
                  onClick={closeMenus}
                >
                  Login
                </Link>
                
                <Link 
                  to="/register" 
                  className="btn btn-primary"
                  onClick={closeMenus}
                >
                  Register
                </Link>
              </>
            )}
          </nav>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-primary-600 focus:outline-none"
            >
              {isMenuOpen ? (
                <FaTimes className="h-6 w-6" />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </button>
          </div>
          
          {/* User Profile Menu (Desktop) */}
          {currentUser && (
            <div className="hidden md:block relative">
              <button
                onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
                className="flex items-center space-x-2 text-gray-600 hover:text-primary-600 focus:outline-none"
              >
                {userProfile?.photoURL ? (
                  <img 
                    src={userProfile.photoURL} 
                    alt={userProfile.displayName || 'User'} 
                    className="h-8 w-8 rounded-full object-cover"
                  />
                ) : (
                  <FaUser className="h-5 w-5" />
                )}
                <span>{userProfile?.displayName || currentUser.email}</span>
              </button>
              
              {isProfileMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                  <Link
                    to="/profile"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
                    onClick={closeMenus}
                  >
                    <FaUserCircle className="mr-2" /> My Profile
                  </Link>
                  <Link
                    to="/settings"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
                    onClick={closeMenus}
                  >
                    <FaCog className="mr-2" /> Settings
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
                  >
                    <FaSignOutAlt className="mr-2" /> Logout
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
        
        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <nav className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className={`nav-link ${location.pathname === '/' ? 'text-primary-600' : 'text-gray-600'}`}
                onClick={closeMenus}
              >
                Home
              </Link>
              
              {currentUser ? (
                <>
                  <Link 
                    to="/dashboard" 
                    className={`nav-link ${location.pathname === '/dashboard' ? 'text-primary-600' : 'text-gray-600'}`}
                    onClick={closeMenus}
                  >
                    Dashboard
                  </Link>
                  
                  <Link 
                    to="/browse" 
                    className={`nav-link flex items-center ${location.pathname === '/browse' ? 'text-primary-600' : 'text-gray-600'}`}
                    onClick={closeMenus}
                  >
                    <FaSearch className="mr-2" /> Browse
                  </Link>
                  
                  <Link 
                    to="/matches" 
                    className={`nav-link flex items-center ${location.pathname === '/matches' ? 'text-primary-600' : 'text-gray-600'}`}
                    onClick={closeMenus}
                  >
                    <FaHeart className="mr-2" /> Matches
                  </Link>
                  
                  <Link 
                    to="/messages" 
                    className={`nav-link flex items-center ${location.pathname === '/messages' ? 'text-primary-600' : 'text-gray-600'}`}
                    onClick={closeMenus}
                  >
                    <FaEnvelope className="mr-2" /> Messages
                  </Link>
                  
                  <Link 
                    to="/membership" 
                    className={`nav-link flex items-center ${location.pathname === '/membership' ? 'text-primary-600' : 'text-gray-600'}`}
                    onClick={closeMenus}
                  >
                    <FaCrown className="mr-2" /> Membership
                  </Link>
                  
                  {isAdmin && (
                    <Link 
                      to="/admin" 
                      className={`nav-link flex items-center ${location.pathname === '/admin' ? 'text-primary-600' : 'text-gray-600'}`}
                      onClick={closeMenus}
                    >
                      <FaShieldAlt className="mr-2" /> Admin
                    </Link>
                  )}
                  
                  <Link 
                    to="/profile" 
                    className={`nav-link flex items-center ${location.pathname === '/profile' ? 'text-primary-600' : 'text-gray-600'}`}
                    onClick={closeMenus}
                  >
                    <FaUserCircle className="mr-2" /> My Profile
                  </Link>
                  
                  <Link 
                    to="/settings" 
                    className={`nav-link flex items-center ${location.pathname === '/settings' ? 'text-primary-600' : 'text-gray-600'}`}
                    onClick={closeMenus}
                  >
                    <FaCog className="mr-2" /> Settings
                  </Link>
                  
                  <button
                    onClick={handleLogout}
                    className="nav-link flex items-center text-gray-600 hover:text-primary-600 text-left"
                  >
                    <FaSignOutAlt className="mr-2" /> Logout
                  </button>
                </>
              ) : (
                <>
                  <Link 
                    to="/login" 
                    className={`nav-link ${location.pathname === '/login' ? 'text-primary-600' : 'text-gray-600'}`}
                    onClick={closeMenus}
                  >
                    Login
                  </Link>
                  
                  <Link 
                    to="/register" 
                    className="btn btn-primary w-full text-center"
                    onClick={closeMenus}
                  >
                    Register
                  </Link>
                </>
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
