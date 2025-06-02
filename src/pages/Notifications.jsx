import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBell, FaUser, FaEnvelope, FaHeart, FaEye, FaCheck, FaTimes, FaTrash } from 'react-icons/fa'

const Notifications = () => {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: 'message',
      content: 'Ahmed Hassan sent you a new message',
      time: '10 minutes ago',
      isRead: false,
      link: '/messages/1',
      user: {
        id: 101,
        name: 'Ahmed Hassan'
      }
    },
    {
      id: 2,
      type: 'profile_view',
      content: 'Fatima Ali viewed your profile',
      time: '2 hours ago',
      isRead: false,
      link: '/profile/102',
      user: {
        id: 102,
        name: 'Fatima Ali'
      }
    },
    {
      id: 3,
      type: 'interest',
      content: 'Omar Khan expressed interest in your profile',
      time: '1 day ago',
      isRead: true,
      link: '/profile/103',
      user: {
        id: 103,
        name: 'Omar Khan'
      }
    },
    {
      id: 4,
      type: 'match',
      content: 'You have a new match with Aisha Rahman',
      time: '2 days ago',
      isRead: true,
      link: '/profile/104',
      user: {
        id: 104,
        name: 'Aisha Rahman'
      }
    },
    {
      id: 5,
      type: 'system',
      content: 'Your profile has been approved and is now visible to others',
      time: '3 days ago',
      isRead: true,
      link: '/profile',
      user: null
    }
  ])
  
  const [filter, setFilter] = useState('all')
  
  // Mark notification as read
  const markAsRead = (id) => {
    setNotifications(notifications.map(notification => 
      notification.id === id ? { ...notification, isRead: true } : notification
    ))
  }
  
  // Mark all notifications as read
  const markAllAsRead = () => {
    setNotifications(notifications.map(notification => ({ ...notification, isRead: true })))
  }
  
  // Delete notification
  const deleteNotification = (id) => {
    setNotifications(notifications.filter(notification => notification.id !== id))
  }
  
  // Clear all notifications
  const clearAllNotifications = () => {
    setNotifications([])
  }
  
  // Filter notifications
  const filteredNotifications = filter === 'all' 
    ? notifications 
    : filter === 'unread' 
      ? notifications.filter(notification => !notification.isRead)
      : notifications.filter(notification => notification.type === filter)
  
  // Get notification icon based on type
  const getNotificationIcon = (type) => {
    switch (type) {
      case 'message':
        return <FaEnvelope className="text-blue-500" />
      case 'profile_view':
        return <FaEye className="text-purple-500" />
      case 'interest':
        return <FaHeart className="text-red-500" />
      case 'match':
        return <FaCheck className="text-green-500" />
      case 'system':
        return <FaBell className="text-yellow-500" />
      default:
        return <FaBell className="text-gray-500" />
    }
  }
  
  // Count unread notifications
  const unreadCount = notifications.filter(notification => !notification.isRead).length
  
  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Notifications</h1>
          <p className="text-gray-600 mt-2">
            Stay updated on your connections and activities
          </p>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          {/* Notification Header */}
          <div className="p-4 border-b flex items-center justify-between">
            <div className="flex items-center">
              <FaBell className="text-primary-600 mr-2" />
              <h2 className="text-lg font-medium text-gray-900">Your Notifications</h2>
              {unreadCount > 0 && (
                <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-100 text-primary-800">
                  {unreadCount} new
                </span>
              )}
            </div>
            <div className="flex space-x-2">
              <button
                onClick={markAllAsRead}
                className="text-sm text-primary-600 hover:text-primary-500"
                disabled={unreadCount === 0}
              >
                Mark all as read
              </button>
              <button
                onClick={clearAllNotifications}
                className="text-sm text-gray-600 hover:text-gray-500"
                disabled={notifications.length === 0}
              >
                Clear all
              </button>
            </div>
          </div>
          
          {/* Filter Tabs */}
          <div className="border-b">
            <div className="flex overflow-x-auto">
              <button
                className={`px-4 py-2 text-sm font-medium whitespace-nowrap ${
                  filter === 'all' 
                    ? 'text-primary-600 border-b-2 border-primary-600' 
                    : 'text-gray-500 hover:text-gray-700'
                }`}
                onClick={() => setFilter('all')}
              >
                All
              </button>
              <button
                className={`px-4 py-2 text-sm font-medium whitespace-nowrap ${
                  filter === 'unread' 
                    ? 'text-primary-600 border-b-2 border-primary-600' 
                    : 'text-gray-500 hover:text-gray-700'
                }`}
                onClick={() => setFilter('unread')}
              >
                Unread
              </button>
              <button
                className={`px-4 py-2 text-sm font-medium whitespace-nowrap ${
                  filter === 'message' 
                    ? 'text-primary-600 border-b-2 border-primary-600' 
                    : 'text-gray-500 hover:text-gray-700'
                }`}
                onClick={() => setFilter('message')}
              >
                Messages
              </button>
              <button
                className={`px-4 py-2 text-sm font-medium whitespace-nowrap ${
                  filter === 'interest' 
                    ? 'text-primary-600 border-b-2 border-primary-600' 
                    : 'text-gray-500 hover:text-gray-700'
                }`}
                onClick={() => setFilter('interest')}
              >
                Interests
              </button>
              <button
                className={`px-4 py-2 text-sm font-medium whitespace-nowrap ${
                  filter === 'profile_view' 
                    ? 'text-primary-600 border-b-2 border-primary-600' 
                    : 'text-gray-500 hover:text-gray-700'
                }`}
                onClick={() => setFilter('profile_view')}
              >
                Profile Views
              </button>
              <button
                className={`px-4 py-2 text-sm font-medium whitespace-nowrap ${
                  filter === 'match' 
                    ? 'text-primary-600 border-b-2 border-primary-600' 
                    : 'text-gray-500 hover:text-gray-700'
                }`}
                onClick={() => setFilter('match')}
              >
                Matches
              </button>
            </div>
          </div>
          
          {/* Notification List */}
          <div className="divide-y divide-gray-100">
            {filteredNotifications.length > 0 ? (
              filteredNotifications.map((notification) => (
                <div 
                  key={notification.id} 
                  className={`p-4 hover:bg-gray-50 ${!notification.isRead ? 'bg-primary-50' : ''}`}
                >
                  <div className="flex items-start">
                    <div className="flex-shrink-0 pt-0.5">
                      <div className="h-10 w-10 rounded-full bg-primary-100 flex items-center justify-center">
                        {getNotificationIcon(notification.type)}
                      </div>
                    </div>
                    <div className="ml-3 flex-1">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium text-gray-900">
                          {notification.content}
                        </p>
                        <div className="flex items-center">
                          <p className="text-xs text-gray-500">{notification.time}</p>
                          <div className="ml-2 flex space-x-1">
                            {!notification.isRead && (
                              <button
                                onClick={() => markAsRead(notification.id)}
                                className="text-gray-400 hover:text-gray-500"
                                title="Mark as read"
                              >
                                <FaCheck size={14} />
                              </button>
                            )}
                            <button
                              onClick={() => deleteNotification(notification.id)}
                              className="text-gray-400 hover:text-gray-500"
                              title="Delete notification"
                            >
                              <FaTrash size={14} />
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="mt-1 flex items-center">
                        {notification.user && (
                          <Link 
                            to={`/profile/${notification.user.id}`}
                            className="flex items-center text-xs text-gray-500 hover:text-primary-600"
                          >
                            <FaUser className="mr-1" size={10} />
                            <span>View {notification.user.name}'s profile</span>
                          </Link>
                        )}
                        <Link 
                          to={notification.link}
                          className="ml-auto text-xs font-medium text-primary-600 hover:text-primary-500"
                          onClick={() => markAsRead(notification.id)}
                        >
                          {notification.type === 'message' ? 'Reply' : 'View'}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="p-8 text-center">
                <FaBell className="mx-auto text-gray-400 mb-4" size={32} />
                <h3 className="text-lg font-medium text-gray-900 mb-1">No notifications</h3>
                <p className="text-sm text-gray-500">
                  {filter === 'all' 
                    ? 'You don\'t have any notifications at the moment.' 
                    : `You don't have any ${filter} notifications.`}
                </p>
                {filter !== 'all' && (
                  <button
                    onClick={() => setFilter('all')}
                    className="mt-3 text-sm font-medium text-primary-600 hover:text-primary-500"
                  >
                    View all notifications
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
        
        <div className="mt-8 bg-primary-50 rounded-lg p-6 border-l-4 border-primary-500">
          <h3 className="font-medium text-primary-800 mb-2">Notification Settings</h3>
          <p className="text-sm text-gray-600">
            You can customize which notifications you receive and how you receive them in your account settings.
          </p>
          <Link 
            to="/settings" 
            className="mt-2 inline-block text-sm font-medium text-primary-600 hover:text-primary-500"
          >
            Manage Notification Settings →
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Notifications
