import React, { useState } from 'react'
import { FaShieldAlt, FaBell, FaLock, FaUserAlt, FaSignOutAlt, FaTrash } from 'react-icons/fa'
import { useAuth } from '../contexts/AuthContext'
import { useNavigate } from 'react-router-dom'

const Settings = () => {
  const { currentUser, logout } = useAuth()
  const navigate = useNavigate()
  
  const [activeTab, setActiveTab] = useState('account')
  
  // Form states
  const [emailNotifications, setEmailNotifications] = useState({
    messages: true,
    matches: true,
    profileViews: false,
    announcements: true
  })
  
  const [pushNotifications, setPushNotifications] = useState({
    messages: true,
    matches: true,
    profileViews: true,
    announcements: false
  })
  
  const [privacySettings, setPrivacySettings] = useState({
    showOnlineStatus: true,
    showLastActive: true,
    showProfileTo: 'all', // 'all', 'matches', 'none'
    allowMessagesFrom: 'all' // 'all', 'matches', 'none'
  })
  
  const handleLogout = async () => {
    try {
      await logout()
      navigate('/login')
    } catch (error) {
      console.error('Failed to log out', error)
    }
  }
  
  const handleEmailNotificationChange = (setting) => {
    setEmailNotifications({
      ...emailNotifications,
      [setting]: !emailNotifications[setting]
    })
  }
  
  const handlePushNotificationChange = (setting) => {
    setPushNotifications({
      ...pushNotifications,
      [setting]: !pushNotifications[setting]
    })
  }
  
  const handlePrivacyChange = (setting, value) => {
    setPrivacySettings({
      ...privacySettings,
      [setting]: value
    })
  }
  
  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="container-custom">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <h1 className="text-2xl font-bold text-gray-800">Account Settings</h1>
            <p className="text-gray-600">Manage your account preferences and settings</p>
          </div>
          
          <div className="flex flex-col md:flex-row">
            {/* Sidebar */}
            <div className="w-full md:w-64 bg-gray-50 p-6 border-r border-gray-200">
              <nav className="space-y-1">
                <button
                  onClick={() => setActiveTab('account')}
                  className={`w-full flex items-center px-4 py-3 rounded-md text-left ${
                    activeTab === 'account' 
                      ? 'bg-primary-50 text-primary-700' 
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <FaUserAlt className="mr-3" />
                  <span>Account</span>
                </button>
                
                <button
                  onClick={() => setActiveTab('security')}
                  className={`w-full flex items-center px-4 py-3 rounded-md text-left ${
                    activeTab === 'security' 
                      ? 'bg-primary-50 text-primary-700' 
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <FaLock className="mr-3" />
                  <span>Security</span>
                </button>
                
                <button
                  onClick={() => setActiveTab('notifications')}
                  className={`w-full flex items-center px-4 py-3 rounded-md text-left ${
                    activeTab === 'notifications' 
                      ? 'bg-primary-50 text-primary-700' 
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <FaBell className="mr-3" />
                  <span>Notifications</span>
                </button>
                
                <button
                  onClick={() => setActiveTab('privacy')}
                  className={`w-full flex items-center px-4 py-3 rounded-md text-left ${
                    activeTab === 'privacy' 
                      ? 'bg-primary-50 text-primary-700' 
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <FaShieldAlt className="mr-3" />
                  <span>Privacy</span>
                </button>
                
                <div className="pt-6 mt-6 border-t border-gray-200">
                  <button
                    onClick={handleLogout}
                    className="w-full flex items-center px-4 py-3 rounded-md text-left text-red-600 hover:bg-red-50"
                  >
                    <FaSignOutAlt className="mr-3" />
                    <span>Logout</span>
                  </button>
                </div>
              </nav>
            </div>
            
            {/* Content */}
            <div className="flex-1 p-6">
              {activeTab === 'account' && (
                <div>
                  <h2 className="text-xl font-semibold mb-6">Account Information</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address
                      </label>
                      <div className="flex items-center">
                        <input
                          type="email"
                          value={currentUser?.email || 'user@example.com'}
                          disabled
                          className="bg-gray-100 border border-gray-300 rounded-md px-4 py-2 w-full max-w-md"
                        />
                        <button className="ml-4 text-primary-600 hover:text-primary-700 text-sm font-medium">
                          Change
                        </button>
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Account Type
                      </label>
                      <div className="flex items-center">
                        <input
                          type="text"
                          value="Standard Member"
                          disabled
                          className="bg-gray-100 border border-gray-300 rounded-md px-4 py-2 w-full max-w-md"
                        />
                        <button className="ml-4 text-primary-600 hover:text-primary-700 text-sm font-medium">
                          Upgrade
                        </button>
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Member Since
                      </label>
                      <input
                        type="text"
                        value="January 15, 2023"
                        disabled
                        className="bg-gray-100 border border-gray-300 rounded-md px-4 py-2 w-full max-w-md"
                      />
                    </div>
                    
                    <div className="pt-6 mt-6 border-t border-gray-200">
                      <h3 className="text-lg font-medium text-gray-900 mb-4">Danger Zone</h3>
                      <div className="bg-red-50 border border-red-200 rounded-md p-4">
                        <div className="flex">
                          <div className="flex-shrink-0">
                            <FaTrash className="text-red-500" />
                          </div>
                          <div className="ml-3">
                            <h3 className="text-sm font-medium text-red-800">Delete Account</h3>
                            <div className="mt-2 text-sm text-red-700">
                              <p>
                                Once you delete your account, there is no going back. Please be certain.
                              </p>
                            </div>
                            <div className="mt-4">
                              <button
                                type="button"
                                className="inline-flex items-center justify-center px-4 py-2 border border-transparent font-medium rounded-md text-red-700 bg-red-100 hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:text-sm"
                              >
                                Delete Account
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              {activeTab === 'security' && (
                <div>
                  <h2 className="text-xl font-semibold mb-6">Security Settings</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-medium text-gray-900 mb-4">Change Password</h3>
                      <form className="space-y-4 max-w-md">
                        <div>
                          <label htmlFor="current-password" className="block text-sm font-medium text-gray-700 mb-1">
                            Current Password
                          </label>
                          <input
                            type="password"
                            id="current-password"
                            className="border border-gray-300 rounded-md px-4 py-2 w-full focus:ring-primary-500 focus:border-primary-500"
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="new-password" className="block text-sm font-medium text-gray-700 mb-1">
                            New Password
                          </label>
                          <input
                            type="password"
                            id="new-password"
                            className="border border-gray-300 rounded-md px-4 py-2 w-full focus:ring-primary-500 focus:border-primary-500"
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700 mb-1">
                            Confirm New Password
                          </label>
                          <input
                            type="password"
                            id="confirm-password"
                            className="border border-gray-300 rounded-md px-4 py-2 w-full focus:ring-primary-500 focus:border-primary-500"
                          />
                        </div>
                        
                        <div>
                          <button
                            type="submit"
                            className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-md transition"
                          >
                            Update Password
                          </button>
                        </div>
                      </form>
                    </div>
                    
                    <div className="pt-6 mt-6 border-t border-gray-200">
                      <h3 className="text-lg font-medium text-gray-900 mb-4">Two-Factor Authentication</h3>
                      <div className="bg-yellow-50 border border-yellow-200 rounded-md p-4 mb-4">
                        <div className="flex">
                          <div className="ml-3">
                            <h3 className="text-sm font-medium text-yellow-800">Not Enabled</h3>
                            <div className="mt-2 text-sm text-yellow-700">
                              <p>
                                Add an extra layer of security to your account by enabling two-factor authentication.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <button
                        type="button"
                        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                      >
                        Enable Two-Factor Authentication
                      </button>
                    </div>
                    
                    <div className="pt-6 mt-6 border-t border-gray-200">
                      <h3 className="text-lg font-medium text-gray-900 mb-4">Login Sessions</h3>
                      <div className="bg-white border border-gray-200 rounded-md overflow-hidden">
                        <div className="px-4 py-5 sm:p-6">
                          <div className="flex items-center justify-between">
                            <div>
                              <h4 className="text-sm font-medium text-gray-900">Current Session</h4>
                              <p className="text-sm text-gray-500 mt-1">
                                Chrome on Windows • Birmingham, UK • Active now
                              </p>
                            </div>
                            <span className="px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">
                              Current
                            </span>
                          </div>
                        </div>
                        <div className="border-t border-gray-200 px-4 py-5 sm:p-6">
                          <div className="flex items-center justify-between">
                            <div>
                              <h4 className="text-sm font-medium text-gray-900">Safari on iPhone</h4>
                              <p className="text-sm text-gray-500 mt-1">
                                London, UK • Last active 2 days ago
                              </p>
                            </div>
                            <button className="text-sm text-red-600 hover:text-red-800">
                              Logout
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              {activeTab === 'notifications' && (
                <div>
                  <h2 className="text-xl font-semibold mb-6">Notification Preferences</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-medium text-gray-900 mb-4">Email Notifications</h3>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-sm font-medium text-gray-700">New Messages</p>
                            <p className="text-xs text-gray-500">Get notified when you receive a new message</p>
                          </div>
                          <div className="flex items-center">
                            <button
                              type="button"
                              onClick={() => handleEmailNotificationChange('messages')}
                              className={`${
                                emailNotifications.messages
                                  ? 'bg-primary-600'
                                  : 'bg-gray-200'
                              } relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500`}
                            >
                              <span
                                className={`${
                                  emailNotifications.messages
                                    ? 'translate-x-5'
                                    : 'translate-x-0'
                                } pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200`}
                              />
                            </button>
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-sm font-medium text-gray-700">New Matches</p>
                            <p className="text-xs text-gray-500">Get notified when you have a new match</p>
                          </div>
                          <div className="flex items-center">
                            <button
                              type="button"
                              onClick={() => handleEmailNotificationChange('matches')}
                              className={`${
                                emailNotifications.matches
                                  ? 'bg-primary-600'
                                  : 'bg-gray-200'
                              } relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500`}
                            >
                              <span
                                className={`${
                                  emailNotifications.matches
                                    ? 'translate-x-5'
                                    : 'translate-x-0'
                                } pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200`}
                              />
                            </button>
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-sm font-medium text-gray-700">Profile Views</p>
                            <p className="text-xs text-gray-500">Get notified when someone views your profile</p>
                          </div>
                          <div className="flex items-center">
                            <button
                              type="button"
                              onClick={() => handleEmailNotificationChange('profileViews')}
                              className={`${
                                emailNotifications.profileViews
                                  ? 'bg-primary-600'
                                  : 'bg-gray-200'
                              } relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500`}
                            >
                              <span
                                className={`${
                                  emailNotifications.profileViews
                                    ? 'translate-x-5'
                                    : 'translate-x-0'
                                } pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200`}
                              />
                            </button>
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-sm font-medium text-gray-700">Announcements</p>
                            <p className="text-xs text-gray-500">Receive updates about new features and announcements</p>
                          </div>
                          <div className="flex items-center">
                            <button
                              type="button"
                              onClick={() => handleEmailNotificationChange('announcements')}
                              className={`${
                                emailNotifications.announcements
                                  ? 'bg-primary-600'
                                  : 'bg-gray-200'
                              } relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500`}
                            >
                              <span
                                className={`${
                                  emailNotifications.announcements
                                    ? 'translate-x-5'
                                    : 'translate-x-0'
                                } pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200`}
                              />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="pt-6 mt-6 border-t border-gray-200">
                      <h3 className="text-lg font-medium text-gray-900 mb-4">Push Notifications</h3>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-sm font-medium text-gray-700">New Messages</p>
                            <p className="text-xs text-gray-500">Get notified when you receive a new message</p>
                          </div>
                          <div className="flex items-center">
                            <button
                              type="button"
                              onClick={() => handlePushNotificationChange('messages')}
                              className={`${
                                pushNotifications.messages
                                  ? 'bg-primary-600'
                                  : 'bg-gray-200'
                              } relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500`}
                            >
                              <span
                                className={`${
                                  pushNotifications.messages
                                    ? 'translate-x-5'
                                    : 'translate-x-0'
                                } pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200`}
                              />
                            </button>
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-sm font-medium text-gray-700">New Matches</p>
                            <p className="text-xs text-gray-500">Get notified when you have a new match</p>
                          </div>
                          <div className="flex items-center">
                            <button
                              type="button"
                              onClick={() => handlePushNotificationChange('matches')}
                              className={`${
                                pushNotifications.matches
                                  ? 'bg-primary-600'
                                  : 'bg-gray-200'
                              } relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500`}
                            >
                              <span
                                className={`${
                                  pushNotifications.matches
                                    ? 'translate-x-5'
                                    : 'translate-x-0'
                                } pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200`}
                              />
                            </button>
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-sm font-medium text-gray-700">Profile Views</p>
                            <p className="text-xs text-gray-500">Get notified when someone views your profile</p>
                          </div>
                          <div className="flex items-center">
                            <button
                              type="button"
                              onClick={() => handlePushNotificationChange('profileViews')}
                              className={`${
                                pushNotifications.profileViews
                                  ? 'bg-primary-600'
                                  : 'bg-gray-200'
                              } relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500`}
                            >
                              <span
                                className={`${
                                  pushNotifications.profileViews
                                    ? 'translate-x-5'
                                    : 'translate-x-0'
                                } pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200`}
                              />
                            </button>
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-sm font-medium text-gray-700">Announcements</p>
                            <p className="text-xs text-gray-500">Receive updates about new features and announcements</p>
                          </div>
                          <div className="flex items-center">
                            <button
                              type="button"
                              onClick={() => handlePushNotificationChange('announcements')}
                              className={`${
                                pushNotifications.announcements
                                  ? 'bg-primary-600'
                                  : 'bg-gray-200'
                              } relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500`}
                            >
                              <span
                                className={`${
                                  pushNotifications.announcements
                                    ? 'translate-x-5'
                                    : 'translate-x-0'
                                } pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200`}
                              />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              {activeTab === 'privacy' && (
                <div>
                  <h2 className="text-xl font-semibold mb-6">Privacy Settings</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-medium text-gray-900 mb-4">Profile Visibility</h3>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-sm font-medium text-gray-700">Show Online Status</p>
                            <p className="text-xs text-gray-500">Allow others to see when you're online</p>
                          </div>
                          <div className="flex items-center">
                            <button
                              type="button"
                              onClick={() => handlePrivacyChange('showOnlineStatus', !privacySettings.showOnlineStatus)}
                              className={`${
                                privacySettings.showOnlineStatus
                                  ? 'bg-primary-600'
                                  : 'bg-gray-200'
                              } relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500`}
                            >
                              <span
                                className={`${
                                  privacySettings.showOnlineStatus
                                    ? 'translate-x-5'
                                    : 'translate-x-0'
                                } pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200`}
                              />
                            </button>
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-sm font-medium text-gray-700">Show Last Active</p>
                            <p className="text-xs text-gray-500">Allow others to see when you were last active</p>
                          </div>
                          <div className="flex items-center">
                            <button
                              type="button"
                              onClick={() => handlePrivacyChange('showLastActive', !privacySettings.showLastActive)}
                              className={`${
                                privacySettings.showLastActive
                                  ? 'bg-primary-600'
                                  : 'bg-gray-200'
                              } relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500`}
                            >
                              <span
                                className={`${
                                  privacySettings.showLastActive
                                    ? 'translate-x-5'
                                    : 'translate-x-0'
                                } pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200`}
                              />
                            </button>
                          </div>
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Show My Profile To
                          </label>
                          <select
                            value={privacySettings.showProfileTo}
                            onChange={(e) => handlePrivacyChange('showProfileTo', e.target.value)}
                            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm rounded-md"
                          >
                            <option value="all">All Members</option>
                            <option value="matches">Only My Matches</option>
                            <option value="none">No One (Hidden Profile)</option>
                          </select>
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Allow Messages From
                          </label>
                          <select
                            value={privacySettings.allowMessagesFrom}
                            onChange={(e) => handlePrivacyChange('allowMessagesFrom', e.target.value)}
                            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm rounded-md"
                          >
                            <option value="all">All Members</option>
                            <option value="matches">Only My Matches</option>
                            <option value="none">No One</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    
                    <div className="pt-6 mt-6 border-t border-gray-200">
                      <h3 className="text-lg font-medium text-gray-900 mb-4">Blocked Users</h3>
                      <div className="bg-white border border-gray-200 rounded-md overflow-hidden">
                        <div className="px-4 py-5 sm:p-6">
                          <p className="text-sm text-gray-500">
                            You haven't blocked any users yet. Blocked users won't be able to view your profile or send you messages.
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="pt-6 mt-6 border-t border-gray-200">
                      <h3 className="text-lg font-medium text-gray-900 mb-4">Data & Privacy</h3>
                      <div className="space-y-4">
                        <button
                          type="button"
                          className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                        >
                          Download My Data
                        </button>
                        
                        <div>
                          <p className="text-sm text-gray-500 mb-2">
                            You can request a copy of your personal data, including your profile information and activity.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Settings
