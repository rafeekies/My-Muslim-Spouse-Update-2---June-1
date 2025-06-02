import { useState, useEffect } from 'react'
import { FaFilter, FaSearch } from 'react-icons/fa'

export default function SearchFilters({ onFilterChange }) {
  const [showFilters, setShowFilters] = useState(false)
  const [filters, setFilters] = useState({
    ageMin: '',
    ageMax: '',
    location: '',
    ethnicity: '',
    religiousLevel: '',
    maritalStatus: '',
    education: '',
    hasChildren: ''
  })
  
  const handleFilterChange = (e) => {
    const { name, value } = e.target
    setFilters(prev => ({
      ...prev,
      [name]: value
    }))
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    onFilterChange(filters)
  }
  
  const handleReset = () => {
    setFilters({
      ageMin: '',
      ageMax: '',
      location: '',
      ethnicity: '',
      religiousLevel: '',
      maritalStatus: '',
      education: '',
      hasChildren: ''
    })
    onFilterChange({})
  }
  
  useEffect(() => {
    // Optional: Apply filters automatically when they change
    // onFilterChange(filters)
  }, [filters])
  
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
      <div className="px-6 py-4 border-b flex justify-between items-center">
        <h2 className="text-xl font-semibold text-gray-900 flex items-center">
          <FaFilter className="mr-2 text-primary-600" />
          Search Filters
        </h2>
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="text-primary-600 hover:text-primary-700 text-sm font-medium"
        >
          {showFilters ? 'Hide Filters' : 'Show Filters'}
        </button>
      </div>
      
      {showFilters && (
        <form onSubmit={handleSubmit} className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            <div>
              <label htmlFor="ageRange" className="block text-sm font-medium text-gray-700 mb-1">
                Age Range
              </label>
              <div className="flex items-center space-x-2">
                <input
                  type="number"
                  id="ageMin"
                  name="ageMin"
                  min="18"
                  placeholder="Min"
                  className="input w-full"
                  value={filters.ageMin}
                  onChange={handleFilterChange}
                />
                <span>to</span>
                <input
                  type="number"
                  id="ageMax"
                  name="ageMax"
                  min="18"
                  placeholder="Max"
                  className="input w-full"
                  value={filters.ageMax}
                  onChange={handleFilterChange}
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
                Location
              </label>
              <input
                type="text"
                id="location"
                name="location"
                placeholder="City, Country"
                className="input"
                value={filters.location}
                onChange={handleFilterChange}
              />
            </div>
            
            <div>
              <label htmlFor="ethnicity" className="block text-sm font-medium text-gray-700 mb-1">
                Ethnicity
              </label>
              <select
                id="ethnicity"
                name="ethnicity"
                className="input"
                value={filters.ethnicity}
                onChange={handleFilterChange}
              >
                <option value="">Any Ethnicity</option>
                <option value="arab">Arab</option>
                <option value="south asian">South Asian</option>
                <option value="african">African</option>
                <option value="european">European</option>
                <option value="southeast asian">Southeast Asian</option>
                <option value="turkish">Turkish</option>
                <option value="persian">Persian</option>
                <option value="other">Other</option>
              </select>
            </div>
            
            <div>
              <label htmlFor="religiousLevel" className="block text-sm font-medium text-gray-700 mb-1">
                Religious Level
              </label>
              <select
                id="religiousLevel"
                name="religiousLevel"
                className="input"
                value={filters.religiousLevel}
                onChange={handleFilterChange}
              >
                <option value="">Any Level</option>
                <option value="very practicing">Very Practicing</option>
                <option value="practicing">Practicing</option>
                <option value="moderately practicing">Moderately Practicing</option>
                <option value="cultural">Cultural</option>
              </select>
            </div>
            
            <div>
              <label htmlFor="maritalStatus" className="block text-sm font-medium text-gray-700 mb-1">
                Marital Status
              </label>
              <select
                id="maritalStatus"
                name="maritalStatus"
                className="input"
                value={filters.maritalStatus}
                onChange={handleFilterChange}
              >
                <option value="">Any Status</option>
                <option value="never married">Never Married</option>
                <option value="divorced">Divorced</option>
                <option value="widowed">Widowed</option>
              </select>
            </div>
            
            <div>
              <label htmlFor="education" className="block text-sm font-medium text-gray-700 mb-1">
                Education
              </label>
              <select
                id="education"
                name="education"
                className="input"
                value={filters.education}
                onChange={handleFilterChange}
              >
                <option value="">Any Education</option>
                <option value="high school">High School</option>
                <option value="bachelor">Bachelor's Degree</option>
                <option value="master">Master's Degree</option>
                <option value="doctorate">Doctorate</option>
                <option value="islamic education">Islamic Education</option>
              </select>
            </div>
            
            <div>
              <label htmlFor="hasChildren" className="block text-sm font-medium text-gray-700 mb-1">
                Has Children
              </label>
              <select
                id="hasChildren"
                name="hasChildren"
                className="input"
                value={filters.hasChildren}
                onChange={handleFilterChange}
              >
                <option value="">Any</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
          </div>
          
          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={handleReset}
              className="btn btn-secondary"
            >
              Reset Filters
            </button>
            
            <button
              type="submit"
              className="btn btn-primary flex items-center"
            >
              <FaSearch className="mr-2" />
              Apply Filters
            </button>
          </div>
        </form>
      )}
    </div>
  )
}
