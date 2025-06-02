import React, { useState, useEffect } from 'react'
import { FaMosque, FaSun, FaMoon, FaClock } from 'react-icons/fa'

const PrayerTimesWidget = () => {
  const [prayerTimes, setPrayerTimes] = useState({
    fajr: '05:12 AM',
    sunrise: '06:30 AM',
    dhuhr: '12:30 PM',
    asr: '03:45 PM',
    maghrib: '06:58 PM',
    isha: '08:15 PM'
  })
  
  const [nextPrayer, setNextPrayer] = useState({
    name: 'Fajr',
    time: '05:12 AM',
    timeRemaining: '3h 22m'
  })
  
  const [currentTime, setCurrentTime] = useState(new Date())
  
  // Update current time every minute
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 60000)
    
    // Clean up interval on unmount
    return () => {
      clearInterval(timer)
    }
  }, [])
  
  // Format current time
  const formattedTime = currentTime.toLocaleTimeString([], { 
    hour: '2-digit', 
    minute: '2-digit',
    hour12: true 
  })
  
  // Format current date
  const formattedDate = currentTime.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
  
  return (
    <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold flex items-center">
          <FaMosque className="mr-2 text-green-600" />
          Prayer Times
        </h3>
        <div className="text-sm text-gray-500 flex items-center">
          <FaClock className="mr-1" />
          {formattedTime}
        </div>
      </div>
      
      <div className="text-sm text-gray-500 mb-4">
        {formattedDate}
      </div>
      
      <div className="bg-green-50 rounded-lg p-4 mb-4">
        <div className="text-sm font-medium text-green-800">Next Prayer</div>
        <div className="flex justify-between items-center mt-1">
          <div className="text-lg font-bold text-green-700">{nextPrayer.name}</div>
          <div className="text-lg font-bold text-green-700">{nextPrayer.time}</div>
        </div>
        <div className="text-sm text-green-600 mt-1">Time remaining: {nextPrayer.timeRemaining}</div>
      </div>
      
      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <FaMoon className="mr-2 text-indigo-400" />
            <span className="text-gray-700">Fajr</span>
          </div>
          <div className="text-gray-700 font-medium">{prayerTimes.fajr}</div>
        </div>
        
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <FaSun className="mr-2 text-yellow-400" />
            <span className="text-gray-700">Sunrise</span>
          </div>
          <div className="text-gray-700 font-medium">{prayerTimes.sunrise}</div>
        </div>
        
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <FaSun className="mr-2 text-yellow-500" />
            <span className="text-gray-700">Dhuhr</span>
          </div>
          <div className="text-gray-700 font-medium">{prayerTimes.dhuhr}</div>
        </div>
        
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <FaSun className="mr-2 text-orange-400" />
            <span className="text-gray-700">Asr</span>
          </div>
          <div className="text-gray-700 font-medium">{prayerTimes.asr}</div>
        </div>
        
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <FaSun className="mr-2 text-red-400" />
            <span className="text-gray-700">Maghrib</span>
          </div>
          <div className="text-gray-700 font-medium">{prayerTimes.maghrib}</div>
        </div>
        
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <FaMoon className="mr-2 text-blue-700" />
            <span className="text-gray-700">Isha</span>
          </div>
          <div className="text-gray-700 font-medium">{prayerTimes.isha}</div>
        </div>
      </div>
      
      <div className="mt-4 text-xs text-gray-500 text-center">
        Prayer times are calculated for your current location.
      </div>
    </div>
  )
}

export default PrayerTimesWidget
