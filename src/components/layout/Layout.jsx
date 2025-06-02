import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import DailyPrayerBanner from './DailyPrayerBanner'
import Navbar from './Navbar'

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Prayer Times Banner */}
      <DailyPrayerBanner />
      
      {/* Use the Navbar component */}
      <Navbar />
      
      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  )
}

export default Layout
