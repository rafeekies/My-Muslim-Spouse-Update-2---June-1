import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaHeart, FaRegHeart, FaUser, FaMapMarkerAlt, FaGraduationCap, FaBriefcase, FaTrash, FaEllipsisH } from 'react-icons/fa'

const Favorites = () => {
  const [favorites, setFavorites] = useState([
    {
      id: 101,
      name: 'Ahmed Hassan',
      age: 28,
      location: 'London, UK',
      education: 'Master\'s in Computer Science',
      occupation: 'Software Engineer',
      about: 'Practicing Muslim seeking a partner who values Islamic principles and family life.',
      interests: ['Reading Quran', 'Technology', 'Hiking', 'Islamic history'],
      photo: null,
      lastActive: '2 hours ago'
    },
    {
      id: 102,
      name: 'Fatima Ali',
      age: 26,
      location: 'Birmingham, UK',
      education: 'Bachelor\'s in Psychology',
      occupation: 'School Counselor',
      about: 'Dedicated to my faith and looking for someone who shares my values and commitment to Islam.',
      interests: ['Teaching', 'Charity work', 'Cooking', 'Islamic art'],
      photo: null,
      lastActive: 'Just now'
    },
    {
      id: 103,
      name: 'Omar Khan',
      age: 30,
      location: 'Manchester, UK',
      education: 'PhD in Islamic Studies',
      occupation: 'University Lecturer',
      about: 'Seeking a life partner who is committed to their deen and interested in building a family based on Islamic values.',
      interests: ['Islamic scholarship', 'Writing', 'Travel', 'Community service'],
      photo: null,
      lastActive: '1 day ago'
    }
  ])
  
  const [showOptions, setShowOptions] = useState(null)
  const [view, setView] = useState('grid') // 'grid' or 'list'
  
  // Remove from favorites
  const removeFromFavorites = (id) => {
    setFavorites(favorites.filter(favorite => favorite.id !== id))
  }
  
  // Handle options menu
  const handleOptionsClick = (id, e) => {
    e.stopPropagation()
    setShowOptions(showOptions === id ? null : id)
  }
  
  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Your Favorites</h1>
          <p className="text-gray-600 mt-2">
            Profiles you've marked as favorites
          </p>
        </div>
        
        {/* Controls */}
        <div className="flex justify-between items-center mb-6">
          <p className="text-sm text-gray-600">
            {favorites.length} {favorites.length === 1 ? 'profile' : 'profiles'} saved
          </p>
          <div className="flex space-x-2">
            <button
              onClick={() => setView('grid')}
              className={`p-2 rounded-md ${
                view === 'grid' ? 'bg-primary-100 text-primary-600' : 'text-gray-500 hover:bg-gray-100'
              }`}
              title="Grid view"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
              </svg>
            </button>
            <button
              onClick={() => setView('list')}
              className={`p-2 rounded-md ${
                view === 'list' ? 'bg-primary-100 text-primary-600' : 'text-gray-500 hover:bg-gray-100'
              }`}
              title="List view"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
        
        {favorites.length > 0 ? (
          view === 'grid' ? (
            // Grid View
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {favorites.map((profile) => (
                <div key={profile.id} className="bg-white rounded-lg shadow-sm overflow-hidden relative">
                  {/* Profile Photo */}
                  <div className="h-48 bg-primary-100 flex items-center justify-center relative">
                    {profile.photo ? (
                      <img 
                        src={profile.photo} 
                        alt={profile.name} 
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="h-24 w-24 rounded-full bg-white flex items-center justify-center">
                        <FaUser className="text-primary-600" size={48} />
                      </div>
                    )}
                    <button 
                      className="absolute top-2 right-2 p-2 bg-white rounded-full text-red-500 hover:bg-red-50"
                      onClick={() => removeFromFavorites(profile.id)}
                      title="Remove from favorites"
                    >
                      <FaHeart />
                    </button>
                  </div>
                  
                  {/* Profile Info */}
                  <div className="p-4">
                    <div className="flex justify-between items-start">
                      <h3 className="text-lg font-semibold text-gray-900">
                        {profile.name}, {profile.age}
                      </h3>
                      <div className="relative">
                        <button 
                          className="text-gray-400 hover:text-gray-600"
                          onClick={(e) => handleOptionsClick(profile.id, e)}
                        >
                          <FaEllipsisH />
                        </button>
                        
                        {showOptions === profile.id && (
                          <div className="absolute right-0 z-10 w-48 bg-white rounded-md shadow-lg py-1">
                            <button 
                              className="flex w-full items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                              onClick={() => removeFromFavorites(profile.id)}
                            >
                              <FaTrash className="mr-2 text-gray-400" />
                              Remove from favorites
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                    
                    <div className="mt-2 text-sm text-gray-500 flex items-center">
                      <FaMapMarkerAlt className="mr-1" />
                      <span>{profile.location}</span>
                    </div>
                    
                    <div className="mt-1 text-sm text-gray-500 flex items-center">
                      <FaBriefcase className="mr-1" />
                      <span>{profile.occupation}</span>
                    </div>
                    
                    <div className="mt-1 text-sm text-gray-500 flex items-center">
                      <FaGraduationCap className="mr-1" />
                      <span>{profile.education}</span>
                    </div>
                    
                    <p className="mt-3 text-sm text-gray-600 line-clamp-2">
                      {profile.about}
                    </p>
                    
                    <div className="mt-4 flex flex-wrap gap-2">
                      {profile.interests.slice(0, 3).map((interest, index) => (
                        <span 
                          key={index} 
                          className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-100 text-primary-800"
                        >
                          {interest}
                        </span>
                      ))}
                      {profile.interests.length > 3 && (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                          +{profile.interests.length - 3} more
                        </span>
                      )}
                    </div>
                    
                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-xs text-gray-500">
                        Active {profile.lastActive}
                      </span>
                      <Link
                        to={`/profile/${profile.id}`}
                        className="inline-flex items-center px-3 py-1 border border-transparent text-sm font-medium rounded-md text-primary-700 bg-primary-100 hover:bg-primary-200"
                      >
                        View Profile
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            // List View
            <div className="bg-white rounded-lg shadow-sm overflow-hidden divide-y divide-gray-100">
              {favorites.map((profile) => (
                <div key={profile.id} className="p-4 hover:bg-gray-50">
                  <div className="flex items-start">
                    {/* Profile Photo */}
                    <div className="flex-shrink-0">
                      {profile.photo ? (
                        <img 
                          src={profile.photo} 
                          alt={profile.name} 
                          className="h-16 w-16 rounded-full object-cover"
                        />
                      ) : (
                        <div className="h-16 w-16 rounded-full bg-primary-100 flex items-center justify-center">
                          <FaUser className="text-primary-600" size={24} />
                        </div>
                      )}
                    </div>
                    
                    {/* Profile Info */}
                    <div className="ml-4 flex-1">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900">
                            {profile.name}, {profile.age}
                          </h3>
                          <div className="mt-1 text-sm text-gray-500 flex items-center">
                            <FaMapMarkerAlt className="mr-1" />
                            <span>{profile.location}</span>
                            <span className="mx-2">•</span>
                            <FaBriefcase className="mr-1" />
                            <span>{profile.occupation}</span>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <button 
                            className="text-red-500 hover:text-red-600"
                            onClick={() => removeFromFavorites(profile.id)}
                            title="Remove from favorites"
                          >
                            <FaHeart />
                          </button>
                          <div className="relative">
                            <button 
                              className="text-gray-400 hover:text-gray-600"
                              onClick={(e) => handleOptionsClick(profile.id, e)}
                            >
                              <FaEllipsisH />
                            </button>
                            
                            {showOptions === profile.id && (
                              <div className="absolute right-0 z-10 w-48 bg-white rounded-md shadow-lg py-1">
                                <button 
                                  className="flex w-full items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                  onClick={() => removeFromFavorites(profile.id)}
                                >
                                  <FaTrash className="mr-2 text-gray-400" />
                                  Remove from favorites
                                </button>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                      
                      <p className="mt-2 text-sm text-gray-600">
                        {profile.about}
                      </p>
                      
                      <div className="mt-3 flex flex-wrap gap-2">
                        {profile.interests.map((interest, index) => (
                          <span 
                            key={index} 
                            className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-100 text-primary-800"
                          >
                            {interest}
                          </span>
                        ))}
                      </div>
                      
                      <div className="mt-3 flex items-center justify-between">
                        <span className="text-xs text-gray-500">
                          Active {profile.lastActive}
                        </span>
                        <Link
                          to={`/profile/${profile.id}`}
                          className="inline-flex items-center px-3 py-1 border border-transparent text-sm font-medium rounded-md text-primary-700 bg-primary-100 hover:bg-primary-200"
                        >
                          View Profile
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )
        ) : (
          <div className="bg-white rounded-lg shadow-sm p-8 text-center">
            <div className="mx-auto h-16 w-16 rounded-full bg-primary-100 flex items-center justify-center mb-4">
              <FaRegHeart className="h-8 w-8 text-primary-600" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No favorites yet</h3>
            <p className="text-gray-600 max-w-md mx-auto">
              When you find profiles that interest you, mark them as favorites to easily find them later.
            </p>
            <Link
              to="/browse"
              className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700"
            >
              Browse Profiles
            </Link>
          </div>
        )}
        
        <div className="mt-8 bg-primary-50 rounded-lg p-6 border-l-4 border-primary-500">
          <h3 className="font-medium text-primary-800 mb-2">Finding Your Match</h3>
          <p className="text-sm text-gray-600">
            Remember to consider Islamic compatibility factors beyond appearance. Look for shared values, religious commitment, and life goals when selecting potential matches.
          </p>
          <Link 
            to="/guidelines" 
            className="mt-2 inline-block text-sm font-medium text-primary-600 hover:text-primary-500"
          >
            Read Islamic Guidelines for Spouse Selection →
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Favorites
