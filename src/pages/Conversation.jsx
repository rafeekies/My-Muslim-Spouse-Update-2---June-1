import { useState, useEffect, useRef } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../firebase/config'
import { FaUser, FaPaperPlane, FaArrowLeft, FaEllipsisV } from 'react-icons/fa'
import LoadingSpinner from '../components/ui/LoadingSpinner'

export default function Conversation() {
  const { id } = useParams()
  const { currentUser } = useAuth()
  const [otherUser, setOtherUser] = useState(null)
  const [messages, setMessages] = useState([])
  const [newMessage, setNewMessage] = useState('')
  const [loading, setLoading] = useState(true)
  const messagesEndRef = useRef(null)
  
  useEffect(() => {
    const fetchUserAndMessages = async () => {
      try {
        setLoading(true)
        
        // In a real app, you would fetch the actual user from Firestore
        // This is mock data for demonstration
        
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 1000))
        
        // Mock user data
        let mockUser
        
        if (id === 'user1') {
          mockUser = {
            id: 'user1',
            displayName: 'Ahmed Khan',
            photoURL: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            age: 32,
            location: 'London, UK'
          }
        } else if (id === 'user2') {
          mockUser = {
            id: 'user2',
            displayName: 'Fatima Ali',
            photoURL: 'https://images.pexels.com/photos/1820919/pexels-photo-1820919.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            age: 28,
            location: 'Toronto, Canada'
          }
        } else if (id === 'user3') {
          mockUser = {
            id: 'user3',
            displayName: 'Omar Rahman',
            photoURL: 'https://images.pexels.com/photos/2269872/pexels-photo-2269872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            age: 30,
            location: 'New York, USA'
          }
        } else {
          // Default mock user for any other ID
          mockUser = {
            id,
            displayName: 'User',
            photoURL: null,
            age: 29,
            location: 'Unknown'
          }
        }
        
        setOtherUser(mockUser)
        
        // Mock messages
        const now = new Date()
        const mockMessages = [
          {
            id: '1',
            senderId: id,
            text: 'As-salamu alaykum, I came across your profile and was interested in learning more about you.',
            timestamp: new Date(now.getTime() - 1000 * 60 * 60 * 24).toISOString() // 1 day ago
          },
          {
            id: '2',
            senderId: currentUser.uid,
            text: 'Wa alaykumu s-salam. Thank you for reaching out. I would be happy to share more about myself.',
            timestamp: new Date(now.getTime() - 1000 * 60 * 60 * 23).toISOString() // 23 hours ago
          },
          {
            id: '3',
            senderId: id,
            text: 'I noticed from your profile that you value family highly. Could you tell me more about your family values and what you are looking for in a spouse?',
            timestamp: new Date(now.getTime() - 1000 * 60 * 60 * 22).toISOString() // 22 hours ago
          },
          {
            id: '4',
            senderId: currentUser.uid,
            text: 'Family is indeed very important to me. I believe in maintaining strong family ties and raising children with Islamic values. I am looking for a spouse who shares these values and is committed to building a household based on mutual respect and Islamic principles.',
            timestamp: new Date(now.getTime() - 1000 * 60 * 60 * 21).toISOString() // 21 hours ago
          },
          {
            id: '5',
            senderId: id,
            text: 'That aligns well with what I am looking for as well. I believe a strong marriage is built on shared faith and values. May I ask about your educational background and career?',
            timestamp: new Date(now.getTime() - 1000 * 60 * 60 * 20).toISOString() // 20 hours ago
          }
        ]
        
        setMessages(mockMessages)
      } catch (error) {
        console.error('Error fetching user and messages:', error)
      } finally {
        setLoading(false)
      }
    }
    
    fetchUserAndMessages()
  }, [id, currentUser])
  
  useEffect(() => {
    // Scroll to bottom when messages change
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])
  
  const handleSendMessage = (e) => {
    e.preventDefault()
    
    if (!newMessage.trim()) return
    
    // In a real app, you would save the message to Firestore
    const newMsg = {
      id: Date.now().toString(),
      senderId: currentUser.uid,
      text: newMessage.trim(),
      timestamp: new Date().toISOString()
    }
    
    setMessages(prev => [...prev, newMsg])
    setNewMessage('')
  }
  
  const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp)
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) + 
           ' | ' + 
           date.toLocaleDateString([], { month: 'short', day: 'numeric' })
  }
  
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <LoadingSpinner size="large" />
      </div>
    )
  }
  
  return (
    <div className="min-h-screen bg-gray-50 py-6">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
          {/* Header */}
          <div className="bg-white border-b px-4 py-3 flex items-center justify-between">
            <div className="flex items-center">
              <Link to="/messages" className="mr-4 text-gray-500 hover:text-gray-700">
                <FaArrowLeft />
              </Link>
              <div className="flex items-center">
                {otherUser?.photoURL ? (
                  <img 
                    src={otherUser.photoURL} 
                    alt={otherUser.displayName} 
                    className="w-10 h-10 rounded-full object-cover mr-3"
                  />
                ) : (
                  <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center mr-3">
                    <FaUser className="text-gray-400" />
                  </div>
                )}
                <div>
                  <h2 className="text-lg font-medium text-gray-900">{otherUser?.displayName}</h2>
                  <p className="text-sm text-gray-500">{otherUser?.location}</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <button className="text-gray-500 hover:text-gray-700">
                <FaEllipsisV />
              </button>
            </div>
          </div>
          
          {/* Messages */}
          <div className="h-[calc(100vh-16rem)] overflow-y-auto p-4 bg-gray-50">
            <div className="space-y-4">
              {messages.map(message => (
                <div 
                  key={message.id}
                  className={`flex ${message.senderId === currentUser.uid ? 'justify-end' : 'justify-start'}`}
                >
                  <div 
                    className={`max-w-xs md:max-w-md rounded-lg px-4 py-2 ${
                      message.senderId === currentUser.uid 
                        ? 'bg-primary-600 text-white rounded-br-none' 
                        : 'bg-gray-200 text-gray-800 rounded-bl-none'
                    }`}
                  >
                    <p className="text-sm">{message.text}</p>
                    <p 
                      className={`text-xs mt-1 ${
                        message.senderId === currentUser.uid 
                          ? 'text-primary-100' 
                          : 'text-gray-500'
                      }`}
                    >
                      {formatTimestamp(message.timestamp)}
                    </p>
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>
          </div>
          
          {/* Message Input */}
          <div className="bg-white border-t p-4">
            <form onSubmit={handleSendMessage} className="flex items-center">
              <input
                type="text"
                placeholder="Type a message..."
                className="input flex-grow"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
              />
              <button 
                type="submit"
                className="ml-2 p-2 rounded-full bg-primary-600 text-white hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                disabled={!newMessage.trim()}
              >
                <FaPaperPlane />
              </button>
            </form>
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto mt-6 bg-primary-50 rounded-lg p-4 border border-primary-100">
          <h3 className="text-lg font-medium text-primary-800 mb-2">Communication Guidelines</h3>
          <ul className="text-primary-700 space-y-2">
            <li>Keep conversations respectful and purposeful</li>
            <li>Focus on important matters like religious values, life goals, and compatibility</li>
            <li>Involve family members in the process when appropriate</li>
            <li>Avoid sharing personal contact information until ready to involve families</li>
            <li>Report any inappropriate behavior to our support team</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
