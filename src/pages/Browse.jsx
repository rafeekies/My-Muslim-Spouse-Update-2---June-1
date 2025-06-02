import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import LoadingSpinner from '../components/ui/LoadingSpinner'

const Browse = () => {
  const { currentUser, userProfile, loading } = useAuth()
  const [filters, setFilters] = useState({
    ageMin: 18,
    ageMax: 50,
    gender: userProfile?.gender === 'male' ? 'female' : 'male',
    location: '',
    religiousPractice: '',
    educationLevel: ''
  })
  const [isFiltersOpen, setIsFiltersOpen] = useState(false)
  
  // Mock profiles for demonstration
  const mockProfiles = [
    {
      id: '1',
      displayName: 'Sarah Ahmed',
      age: 28,
      location: 'New York, USA',
      religiousPractice: 'Practicing',
      profession: 'Doctor',
      educationLevel: 'Doctorate',
      aboutMe: 'I am a practicing Muslimah looking for a spouse who shares my values and commitment to Islam.',
      gender: 'female'
    },
    {
      id: '2',
      displayName: 'Mohammed Ali',
      age: 32,
      location: 'Chicago, USA',
      religiousPractice: 'Very Practicing',
      profession: 'Engineer',
      educationLevel: 'Master\'s Degree',
      aboutMe: 'I am a practicing Muslim looking for a spouse who shares my values and commitment to Islam.',
      gender: 'male'
    },
    {
      id: '3',
      displayName: 'Fatima Khan',
      age: 26,
      location: 'London, UK',
      religiousPractice: 'Practicing',
      profession: 'Teacher',
      educationLevel: 'Bachelor\'s Degree',
      aboutMe: 'I am a practicing Muslimah looking for a spouse who shares my values and commitment to Islam.',
      gender: 'female'
    },
    {
      id: '4',
      displayName: 'Yusuf Ibrahim',
      age: 30,
      location: 'Toronto, Canada',
      religiousPractice: 'Practicing',
      profession: 'Accountant',
      educationLevel: 'Master\'s Degree',
      aboutMe: 'I am a practicing Muslim looking for a spouse who shares my values and commitment to Islam.',
      gender: 'male'
    },
    {
      id: '5',
      displayName: 'Aisha Rahman',
      age: 27,
      location: 'Sydney, Australia',
      religiousPractice: 'Very Practicing',
      profession: 'Lawyer',
      educationLevel: 'Doctorate',
      aboutMe: 'I am a practicing Muslimah looking for a spouse who shares my values and commitment to Islam.',
      gender: 'female'
    },
    {
      id: '6',
      displayName: 'Omar Hassan',
      age: 33,
      location: 'Dubai, UAE',
      religiousPractice: 'Practicing',
      profession: 'Business Owner',
      educationLevel: 'Bachelor\'s Degree',
      aboutMe: 'I am a practicing Muslim looking for a spouse who shares my values and commitment to Islam.',
      gender: 'male'
    }
  ]
  
  // Filter profiles based on user preferences
  const filteredProfiles = mockProfiles.filter(profile => {
    // Filter by gender (show opposite gender)
    if (userProfile?.gender && profile.gender === userProfile.gender) {
      return false
    }
    
    // Filter by age range
    if (profile.age < filters.ageMin || profile.age > filters.ageMax) {
      return false
    }
    
    // Filter by location if specified
    if (filters.location && !profile.location.toLowerCase().includes(filters.location.toLowerCase())) {
      return false
    }
    
    // Filter by religious practice if specified
    if (filters.religiousPractice && profile.religiousPractice !== filters.religiousPractice) {
      return false
    }
    
    // Filter by education level if specified
    if (filters.educationLevel && profile.educationLevel !== filters.educationLevel) {
      return false
    }
    
    return true
  })
  
  const handleFilterChange = (e) => {
    const { name, value } = e.target
    setFilters(prev => ({
      ...prev,
      [name]: value
    }))
  }
  
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <LoadingSpinner size="large" />
      </div>
    )
  }
  
  // Check if profile is incomplete
  const isProfileIncomplete = !userProfile || !userProfile.profileCompleted
  
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Browse Profiles</h1>
          <button
            onClick={() => setIsFiltersOpen(!isFiltersOpen)}
            className="flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
            </svg>
            Filters
          </button>
        </div>
        
        {isProfileIncomplete && (
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-8">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm text-yellow-700">
                  Your profile is incomplete. Complete your profile to get better matches and allow others to find you.
                  <Link to="/edit-profile" className="font-medium underline text-yellow-700 hover:text-yellow-600 ml-2">
                    Complete Profile
                  </Link>
                </p>
              </div>
            </div>
          </div>
        )}
        
        {/* Filters Panel */}
        {isFiltersOpen && (
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Filter Profiles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label htmlFor="ageRange" className="block text-sm font-medium text-gray-700 mb-1">
                  Age Range
                </label>
                <div className="flex items-center space-x-2">
                  <input
                    type="number"
                    name="ageMin"
                    value={filters.ageMin}
                    onChange={handleFilterChange}
                    min="18"
                    max="80"
                    className="w-20 rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                  />
                  <span>to</span>
                  <input
                    type="number"
                    name="ageMax"
                    value={filters.ageMax}
                    onChange={handleFilterChange}
                    min="18"
                    max="80"
                    className="w-20 rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
                  Location
                </label>
                <input
                  type="text"
                  name="location"
                  value={filters.location}
                  onChange={handleFilterChange}
                  placeholder="City, Country"
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                />
              </div>
              
              <div>
                <label htmlFor="religiousPractice" className="block text-sm font-medium text-gray-700 mb-1">
                  Religious Practice
                </label>
                <select
                  name="religiousPractice"
                  value={filters.religiousPractice}
                  onChange={handleFilterChange}
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                >
                  <option value="">Any</option>
                  <option value="Very Practicing">Very Practicing</option>
                  <option value="Practicing">Practicing</option>
                  <option value="Moderately Practicing">Moderately Practicing</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="educationLevel" className="block text-sm font-medium text-gray-700 mb-1">
                  Education Level
                </label>
                <select
                  name="educationLevel"
                  value={filters.educationLevel}
                  onChange={handleFilterChange}
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                >
                  <option value="">Any</option>
                  <option value="High School">High School</option>
                  <option value="Bachelor's Degree">Bachelor's Degree</option>
                  <option value="Master's Degree">Master's Degree</option>
                  <option value="Doctorate">Doctorate</option>
                </select>
              </div>
            </div>
            
            <div className="mt-6 flex justify-end">
              <button
                onClick={() => setFilters({
                  ageMin: 18,
                  ageMax: 50,
                  gender: userProfile?.gender === 'male' ? 'female' : 'male',
                  location: '',
                  religiousPractice: '',
                  educationLevel: ''
                })}
                className="mr-4 px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
              >
                Reset Filters
              </button>
              <button
                onClick={() => setIsFiltersOpen(false)}
                className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700"
              >
                Apply Filters
              </button>
            </div>
          </div>
        )}
        
        {/* Profiles Grid */}
        {filteredProfiles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProfiles.map(profile => (
              <div key={profile.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-48 bg-gray-200 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold text-gray-900">{profile.displayName}</h3>
                    <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">
                      {profile.age} yrs
                    </span>
                  </div>
                  <p className="text-gray-500 text-sm mb-2">{profile.location}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded">
                      {profile.religiousPractice}
                    </span>
                    <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded">
                      {profile.profession}
                    </span>
                    <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded">
                      {profile.educationLevel}
                    </span>
                  </div>
                  <p className="text-gray-700 text-sm mb-4 line-clamp-3">
                    {profile.aboutMe}
                  </p>
                  <div className="flex justify-between">
                    <Link
                      to={`/profile/${profile.id}`}
                      className="text-green-600 hover:text-green-500 text-sm font-medium"
                    >
                      View Profile
                    </Link>
                    <button className="text-gray-600 hover:text-gray-500 text-sm font-medium">
                      Express Interest
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No Profiles Found</h3>
            <p className="text-gray-600 mb-4">
              Try adjusting your filters to see more results.
            </p>
            <button
              onClick={() => setFilters({
                ageMin: 18,
                ageMax: 50,
                gender: userProfile?.gender === 'male' ? 'female' : 'male',
                location: '',
                religiousPractice: '',
                educationLevel: ''
              })}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Browse
