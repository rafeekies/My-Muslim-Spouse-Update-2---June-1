import React, { useState, useEffect } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { FaUser, FaSignOutAlt, FaEnvelope, FaBell, FaHeart, FaCog, FaSearch, FaMosque } from 'react-icons/fa'
import { useAuth } from '../../contexts/AuthContext'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isProfileOpen, setIsProfileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()
  
  // Get auth context with fallback
  const authContext = useAuth() || { currentUser: null, loading: false, logout: null }
  const { currentUser, loading, logout } = authContext

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Handle logout
  const handleLogout = async () => {
    if (!logout) {
      console.error('Logout function is not available')
      return
    }
    
    try {
      await logout()
      navigate('/')
    } catch (error) {
      console.error('Failed to log out', error)
    }
  }

  // Navigation links
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Articles', path: '/articles' },
    { name: 'Guidelines', path: '/guidelines' },
    { name: 'FAQs', path: '/faqs' },
    { name: 'Contact', path: '/contact' }
  ]

  // Authenticated user links
  const userNavLinks = [
    { name: 'Dashboard', path: '/dashboard', icon: <FaUser className="mr-2" /> },
    { name: 'Messages', path: '/messages', icon: <FaEnvelope className="mr-2" /> },
    { name: 'Notifications', path: '/notifications', icon: <FaBell className="mr-2" /> },
    { name: 'Favorites', path: '/favorites', icon: <FaHeart className="mr-2" /> },
    { name: 'Settings', path: '/settings', icon: <FaCog className="mr-2" /> },
    { name: 'Sign out', action: handleLogout, icon: <FaSignOutAlt className="mr-2" /> }
  ]

  return (
    <nav className={`bg-white ${scrolled ? 'shadow-md' : ''} transition-shadow duration-300`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="flex items-center">
                <FaMosque className="h-8 w-8 text-primary-600" />
                <span className="ml-2 text-xl font-bold text-primary-600">My Muslim Spouse</span>
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`${
                    location.pathname === link.path
                      ? 'border-primary-500 text-gray-900'
                      : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                  } inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            {!loading && (
              <>
                {currentUser ? (
                  <>
                    <Link
                      to="/browse"
                      className="px-3 py-2 rounded-md text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 flex items-center"
                    >
                      <FaSearch className="mr-2" />
                      Browse Profiles
                    </Link>
                    
                    {/* Profile dropdown */}
                    <div className="ml-3 relative">
                      <div>
                        <button
                          type="button"
                          className="bg-white rounded-full flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                          id="user-menu"
                          aria-expanded="false"
                          aria-haspopup="true"
                          onClick={() => setIsProfileOpen(!isProfileOpen)}
                        >
                          <span className="sr-only">Open user menu</span>
                          {currentUser.photoURL ? (
                            <img
                              className="h-8 w-8 rounded-full"
                              src={currentUser.photoURL}
                              alt={currentUser.displayName || "User profile"}
                            />
                          ) : (
                            <div className="h-8 w-8 rounded-full bg-primary-100 flex items-center justify-center">
                              <span className="text-primary-800 font-medium text-sm">
                                {currentUser.displayName ? currentUser.displayName.charAt(0).toUpperCase() : 'U'}
                              </span>
                            </div>
                          )}
                        </button>
                      </div>

                      {/* Dropdown menu */}
                      {isProfileOpen && (
                        <div
                          className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10"
                          role="menu"
                          aria-orientation="vertical"
                          aria-labelledby="user-menu"
                        >
                          {userNavLinks.map((item) => (
                            item.action ? (
                              <button
                                key={item.name}
                                onClick={item.action}
                                className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
                                role="menuitem"
                              >
                                {item.icon}
                                {item.name}
                              </button>
                            ) : (
                              <Link
                                key={item.name}
                                to={item.path}
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
                                role="menuitem"
                                onClick={() => setIsProfileOpen(false)}
                              >
                                {item.icon}
                                {item.name}
                              </Link>
                            )
                          ))}
                        </div>
                      )}
                    </div>
                  </>
                ) : (
                  <div className="flex space-x-4">
                    <Link
                      to="/login"
                      className="px-3 py-2 rounded-md text-sm font-medium text-primary-600 hover:text-primary-900 border border-primary-600 hover:border-primary-900"
                    >
                      Sign in
                    </Link>
                    <Link
                      to="/register"
                      className="px-3 py-2 rounded-md text-sm font-medium text-white bg-primary-600 hover:bg-primary-700"
                    >
                      Register
                    </Link>
                  </div>
                )}
              </>
            )}
          </div>
          
          {/* Mobile menu button */}
          <div className="flex items-center sm:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
              aria-expanded="false"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {/* Icon when menu is closed */}
              {!isMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                /* Icon when menu is open */
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="sm:hidden">
          <div className="pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`${
                  location.pathname === link.path
                    ? 'bg-primary-50 border-primary-500 text-primary-700'
                    : 'border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700'
                } block pl-3 pr-4 py-2 border-l-4 text-base font-medium`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
          
          {!loading && (
            <div className="pt-4 pb-3 border-t border-gray-200">
              {currentUser ? (
                <>
                  <div className="flex items-center px-4">
                    <div className="flex-shrink-0">
                      {currentUser.photoURL ? (
                        <img
                          className="h-10 w-10 rounded-full"
                          src={currentUser.photoURL}
                          alt={currentUser.displayName || "User profile"}
                        />
                      ) : (
                        <div className="h-10 w-10 rounded-full bg-primary-100 flex items-center justify-center">
                          <span className="text-primary-800 font-medium">
                            {currentUser.displayName ? currentUser.displayName.charAt(0).toUpperCase() : 'U'}
                          </span>
                        </div>
                      )}
                    </div>
                    <div className="ml-3">
                      <div className="text-base font-medium text-gray-800">
                        {currentUser.displayName || 'User'}
                      </div>
                      <div className="text-sm font-medium text-gray-500">
                        {currentUser.email}
                      </div>
                    </div>
                  </div>
                  <div className="mt-3 space-y-1">
                    {userNavLinks.map((item) => (
                      item.action ? (
                        <button
                          key={item.name}
                          onClick={() => {
                            item.action();
                            setIsMenuOpen(false);
                          }}
                          className="w-full text-left block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100 flex items-center"
                        >
                          {item.icon}
                          {item.name}
                        </button>
                      ) : (
                        <Link
                          key={item.name}
                          to={item.path}
                          className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100 flex items-center"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {item.icon}
                          {item.name}
                        </Link>
                      )
                    ))}
                  </div>
                </>
              ) : (
                <div className="mt-3 space-y-1 px-4">
                  <Link
                    to="/login"
                    className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Sign in
                  </Link>
                  <Link
                    to="/register"
                    className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Register
                  </Link>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </nav>
  )
}

export default Navbar
