import React, { useState, useEffect } from 'react'
import { FaMosque, FaSun, FaCloudSun, FaCloudMoon, FaMoon, FaTimesCircle } from 'react-icons/fa'

const DailyPrayerBanner = () => {
  const [prayerTimes, setPrayerTimes] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [showBanner, setShowBanner] = useState(true)
  const [currentTime, setCurrentTime] = useState(new Date())
  
  // Mock prayer times - in a real app, these would come from an API
  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      try {
        const today = new Date()
        
        // Mock prayer times (would be replaced with actual API data)
        const mockPrayerTimes = {
          fajr: new Date(today.setHours(5, 30, 0, 0)),
          sunrise: new Date(today.setHours(6, 45, 0, 0)),
          dhuhr: new Date(today.setHours(12, 15, 0, 0)),
          asr: new Date(today.setHours(15, 30, 0, 0)),
          maghrib: new Date(today.setHours(18, 0, 0, 0)),
          isha: new Date(today.setHours(19, 30, 0, 0)),
        }
        
        setPrayerTimes(mockPrayerTimes)
        setLoading(false)
      } catch (err) {
        setError('Unable to load prayer times')
        setLoading(false)
      }
    }, 1000)
  }, [])
  
  // Update current time every minute
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 60000)
    
    return () => clearInterval(timer)
  }, [])
  
  // Format time to 12-hour format
  const formatTime = (date) => {
    if (!date) return ''
    return date.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: true 
    })
  }
  
  // Get next prayer
  const getNextPrayer = () => {
    if (!prayerTimes) return null
    
    const prayers = [
      { name: 'Fajr', time: prayerTimes.fajr, icon: <FaCloudMoon /> },
      { name: 'Sunrise', time: prayerTimes.sunrise, icon: <FaSun /> },
      { name: 'Dhuhr', time: prayerTimes.dhuhr, icon: <FaSun /> },
      { name: 'Asr', time: prayerTimes.asr, icon: <FaCloudSun /> },
      { name: 'Maghrib', time: prayerTimes.maghrib, icon: <FaCloudMoon /> },
      { name: 'Isha', time: prayerTimes.isha, icon: <FaMoon /> }
    ]
    
    const now = currentTime
    
    // Find the next prayer
    for (const prayer of prayers) {
      if (prayer.time > now) {
        return prayer
      }
    }
    
    // If all prayers for today have passed, return Fajr for tomorrow
    return { name: 'Fajr (Tomorrow)', time: prayerTimes.fajr, icon: <FaCloudMoon /> }
  }
  
  const nextPrayer = getNextPrayer()
  
  if (!showBanner) return null
  
  return (
    <div className="bg-primary-600 text-white py-2 px-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <FaMosque className="mr-2" />
          {loading ? (
            <span>Loading prayer times...</span>
          ) : error ? (
            <span>{error}</span>
          ) : (
            <div className="flex items-center space-x-6">
              <span className="hidden sm:inline-flex items-center">
                <span className="font-semibold mr-1">Fajr:</span> {formatTime(prayerTimes?.fajr)}
              </span>
              <span className="hidden md:inline-flex items-center">
                <span className="font-semibold mr-1">Dhuhr:</span> {formatTime(prayerTimes?.dhuhr)}
              </span>
              <span className="hidden md:inline-flex items-center">
                <span className="font-semibold mr-1">Asr:</span> {formatTime(prayerTimes?.asr)}
              </span>
              <span className="hidden sm:inline-flex items-center">
                <span className="font-semibold mr-1">Maghrib:</span> {formatTime(prayerTimes?.maghrib)}
              </span>
              <span className="hidden md:inline-flex items-center">
                <span className="font-semibold mr-1">Isha:</span> {formatTime(prayerTimes?.isha)}
              </span>
              
              {nextPrayer && (
                <span className="inline-flex items-center bg-primary-700 px-2 py-1 rounded">
                  <span className="mr-1">Next:</span> 
                  <span className="font-semibold flex items-center">
                    {nextPrayer.icon} 
                    <span className="ml-1">{nextPrayer.name} {formatTime(nextPrayer.time)}</span>
                  </span>
                </span>
              )}
            </div>
          )}
        </div>
        <button 
          onClick={() => setShowBanner(false)}
          className="text-white hover:text-primary-200"
          aria-label="Close prayer times banner"
        >
          <FaTimesCircle />
        </button>
      </div>
    </div>
  )
}

export default DailyPrayerBanner
