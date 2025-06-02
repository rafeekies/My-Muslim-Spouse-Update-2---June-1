import { useState, useEffect, useRef } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import { collection, query, where, orderBy, getDocs, addDoc, serverTimestamp, onSnapshot } from 'firebase/firestore'
import { db } from '../firebase/config'
import { FaUserCircle, FaPaperPlane, FaEllipsisV, FaSearch } from 'react-icons/fa'
import LoadingSpinner from '../components/ui/LoadingSpinner'

export default function Messages() {
  const { currentUser, userProfile } = useAuth()
  const [loading, setLoading] = useState(true)
  const [conversations, setConversations] = useState([])
  const [activeConversation, setActiveConversation] = useState(null)
  const [messages, setMessages] = useState([])
  const [newMessage, setNewMessage] = useState('')
  const [searchTerm, setSearchTerm] = useState('')
  const messagesEndRef = useRef(null)
  const navigate = useNavigate()
  const location = useLocation()
  
  // Extract userId from URL query params if present
  useEffect(() => {
    const params = new URLSearchParams(location.search)
    const userId = params.get('userId')
    
    if (userId) {
      // Find or create conversation with this user
      const conversation = conversations.find(conv => 
        conv.participants.includes(userId)
      )
      
      if (conversation) {
        setActiveConversation(conversation)
      } else {
        // In a real app, you would create a new conversation here
        console.log('Would create new conversation with user:', userId)
      }
    }
  }, [location.search, conversations])
  
  useEffect(() => {
    const fetchConversations = async () => {
      if (!currentUser) return
      
      try {
        setLoading(true)
        
        // In a real app, you would fetch actual conversations from Firestore
        // This is simplified for demonstration
        
        // Sample data for demonstration
        const sampleConversations = [
          {
            id: '1',
            participants: [currentUser.uid, 'user1'],
            lastMessage: {
              text: 'Assalamu alaikum, how are you doing?',
              timestamp: new Date(Date.now() - 1000 * 60 * 5).toISOString(), // 5 minutes ago
              senderId: 'user1'
            },
            unreadCount: 1,
            otherUser: {
              id: 'user1',
              displayName: 'Ahmed Ali',
              photoURL: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
              lastActive: 'Online'
            }
          },
          {
            id: '2',
            participants: [currentUser.uid, 'user2'],
            lastMessage: {
              text: 'I would like to know more about your interests.',
              timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2).toISOString(), // 2 hours ago
              senderId: currentUser.uid
            },
            unreadCount: 0,
            otherUser: {
              id: 'user2',
              displayName: 'Fatima Khan',
              photoURL: 'https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
              lastActive: '1 hour ago'
            }
          },
          {
            id: '3',
            participants: [currentUser.uid, 'user3'],
            lastMessage: {
              text: 'Thank you for your message. I appreciate your interest.',
              timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24).toISOString(), // 1 day ago
              senderId: 'user3'
            },
            unreadCount: 0,
            otherUser: {
              id: 'user3',
              displayName: 'Omar Hassan',
              photoURL: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
              lastActive: '3 hours ago'
            }
          }
        ]
        
        setConversations(sampleConversations)
        
        // Set first conversation as active if none is selected
        if (!activeConversation && sampleConversations.length > 0) {
          setActiveConversation(sampleConversations[0])
        }
      } catch (error) {
        console.error('Error fetching conversations:', error)
      } finally {
        setLoading(false)
      }
    }
    
    fetchConversations()
  }, [currentUser])
  
  useEffect(() => {
    const fetchMessages = async () => {
      if (!activeConversation) return
      
      try {
        // In a real app, you would fetch actual messages from Firestore
        // This is simplified for demonstration
        
        // Sample data for demonstration
        const sampleMessages = [
          {
            id: '1',
            text: 'Assalamu alaikum, how are you doing?',
            timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24).toISOString(), // 1 day ago
            senderId: activeConversation.otherUser.id
          },
          {
            id: '2',
            text: 'Walaikum assalam, I am doing well, alhamdulillah. How about you?',
            timestamp: new Date(Date.now() - 1000 * 60 * 60 * 23).toISOString(), // 23 hours ago
            senderId: currentUser.uid
          },
          {
            id: '3',
            text: 'Alhamdulillah, I am also doing well. I saw your profile and was interested in getting to know you better.',
            timestamp: new Date(Date.now() - 1000 * 60 * 60 * 22).toISOString(), // 22 hours ago
            senderId: activeConversation.otherUser.id
          },
          {
            id: '4',
            text: 'That sounds great. I would like to know more about your background and interests as well.',
            timestamp: new Date(Date.now() - 1000 * 60 * 60 * 21).toISOString(), // 21 hours ago
            senderId: currentUser.uid
          },
          {
            id: '5',
            text: 'I am a software engineer and I enjoy reading, hiking, and spending time with family. What about you?',
            timestamp: new Date(Date.now() - 1000 * 60 * 60 * 5).toISOString(), // 5 hours ago
            senderId: activeConversation.otherUser.id
          },
          {
            id: '6',
            text: 'I work as a teacher and I love cooking, traveling, and volunteering at the local masjid.',
            timestamp: new Date(Date.now() - 1000 * 60 * 60 * 4).toISOString(), // 4 hours ago
            senderId: currentUser.uid
          },
          {
            id: '7',
            text: 'That\'s wonderful! Education is such an important field. What age group do you teach?',
            timestamp: new Date(Date.now() - 1000 * 60 * 60 * 3).toISOString(), // 3 hours ago
            senderId: activeConversation.otherUser.id
          },
          {
            id: '8',
            text: 'I teach high school mathematics. It\'s challenging but very rewarding.',
            timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2).toISOString(), // 2 hours ago
            senderId: currentUser.uid
          },
          {
            id: '9',
            text: 'That\'s amazing. Education is one of the most noble professions. I have great respect for teachers.',
            timestamp: new Date(Date.now() - 1000 * 60 * 5).toISOString(), // 5 minutes ago
            senderId: activeConversation.otherUser.id
          }
        ]
        
        setMessages(sampleMessages)
        
        // Scroll to bottom of messages
        scrollToBottom()
      } catch (error) {
        console.error('Error fetching messages:', error)
      }
    }
    
    fetchMessages()
  }, [activeConversation, currentUser])
  
  const scrollToBottom = () => {
    setTimeout(() => {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
    }, 100)
  }
  
  const handleSendMessage = async (e) => {
    e.preventDefault()
    
    if (!newMessage.trim() || !activeConversation) return
    
    try {
      // In a real app, you would add the message to Firestore
      // This is simplified for demonstration
      
      const newMessageObj = {
        id: Date.now().toString(),
        text: newMessage,
        timestamp: new Date().toISOString(),
        senderId: currentUser.uid
      }
      
      // Add to local state
      setMessages([...messages, newMessageObj])
      
      // Update last message in conversation
      setConversations(conversations.map(conv => 
        conv.id === activeConversation.id
          ? {
              ...conv,
              lastMessage: {
                text: newMessage,
                timestamp: new Date().toISOString(),
                senderId: currentUser.uid
              }
            }
          : conv
      ))
      
      // Clear input
      setNewMessage('')
      
      // Scroll to bottom
      scrollToBottom()
    } catch (error) {
      console.error('Error sending message:', error)
    }
  }
  
  const filteredConversations = conversations.filter(conv => 
    conv.otherUser.displayName.toLowerCase().includes(searchTerm.toLowerCase())
  )
  
  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex justify-center items-center">
        <LoadingSpinner size="large" />
      </div>
    )
  }
  
  return (
    <div className="min-h-screen bg-gray-50 py-6">
      <div className="container-custom">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="flex h-[calc(100vh-12rem)]">
            {/* Conversations List */}
            <div className="w-full md:w-1/3 border-r">
              <div className="p-4 border-b">
                <h2 className="text-xl font-semibold text-gray-900">Messages</h2>
                <div className="mt-2 relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaSearch className="text-gray-400" />
                  </div>
                  <input
                    type="text"
                    className="input pl-10"
                    placeholder="Search conversations..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>
              
              <div className="overflow-y-auto h-[calc(100%-5rem)]">
                {filteredConversations.length > 0 ? (
                  filteredConversations.map(conversation => (
                    <div
                      key={conversation.id}
                      onClick={() => setActiveConversation(conversation)}
                      className={`p-4 border-b cursor-pointer hover:bg-gray-50 ${
                        activeConversation?.id === conversation.id ? 'bg-gray-50' : ''
                      }`}
                    >
                      <div className="flex items-start">
                        <div className="flex-shrink-0 mr-3">
                          {conversation.otherUser.photoURL ? (
                            <img 
                              src={conversation.otherUser.photoURL} 
                              alt={conversation.otherUser.displayName} 
                              className="h-12 w-12 rounded-full object-cover"
                            />
                          ) : (
                            <div className="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center">
                              <FaUserCircle className="text-gray-400 text-2xl" />
                            </div>
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex justify-between">
                            <h3 className="text-sm font-medium text-gray-900 truncate">
                              {conversation.otherUser.displayName}
                            </h3>
                            <span className="text-xs text-gray-500">
                              {new Date(conversation.lastMessage.timestamp).toLocaleDateString()}
                            </span>
                          </div>
                          <p className={`text-sm truncate ${
                            conversation.unreadCount > 0 && conversation.lastMessage.senderId !== currentUser.uid
                              ? 'font-semibold text-gray-900'
                              : 'text-gray-500'
                          }`}>
                            {conversation.lastMessage.senderId === currentUser.uid ? 'You: ' : ''}
                            {conversation.lastMessage.text}
                          </p>
                          <p className="text-xs text-gray-500 mt-1">
                            {conversation.otherUser.lastActive}
                          </p>
                        </div>
                        {conversation.unreadCount > 0 && conversation.lastMessage.senderId !== currentUser.uid && (
                          <div className="ml-2 bg-primary-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                            {conversation.unreadCount}
                          </div>
                        )}
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="p-4 text-center text-gray-500">
                    No conversations found
                  </div>
                )}
              </div>
            </div>
            
            {/* Messages */}
            <div className="hidden md:flex md:flex-col md:w-2/3">
              {activeConversation ? (
                <>
                  {/* Conversation Header */}
                  <div className="p-4 border-b flex items-center justify-between">
                    <div className="flex items-center">
                      {activeConversation.otherUser.photoURL ? (
                        <img 
                          src={activeConversation.otherUser.photoURL} 
                          alt={activeConversation.otherUser.displayName} 
                          className="h-10 w-10 rounded-full object-cover mr-3"
                        />
                      ) : (
                        <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center mr-3">
                          <FaUserCircle className="text-gray-400 text-xl" />
                        </div>
                      )}
                      <div>
                        <h3 className="text-sm font-medium text-gray-900">
                          {activeConversation.otherUser.displayName}
                        </h3>
                        <p className="text-xs text-gray-500">
                          {activeConversation.otherUser.lastActive}
                        </p>
                      </div>
                    </div>
                    <button className="text-gray-400 hover:text-gray-600">
                      <FaEllipsisV />
                    </button>
                  </div>
                  
                  {/* Messages List */}
                  <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
                    <div className="space-y-4">
                      {messages.map(message => (
                        <div
                          key={message.id}
                          className={`flex ${
                            message.senderId === currentUser.uid ? 'justify-end' : 'justify-start'
                          }`}
                        >
                          <div
                            className={`max-w-xs md:max-w-md lg:max-w-lg px-4 py-2 rounded-lg ${
                              message.senderId === currentUser.uid
                                ? 'bg-primary-500 text-white'
                                : 'bg-white border text-gray-800'
                            }`}
                          >
                            <p className="text-sm">{message.text}</p>
                            <p className={`text-xs mt-1 ${
                              message.senderId === currentUser.uid ? 'text-primary-100' : 'text-gray-500'
                            }`}>
                              {new Date(message.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                            </p>
                          </div>
                        </div>
                      ))}
                      <div ref={messagesEndRef} />
                    </div>
                  </div>
                  
                  {/* Message Input */}
                  <div className="p-4 border-t">
                    <form onSubmit={handleSendMessage} className="flex">
                      <input
                        type="text"
                        className="input flex-1 mr-2"
                        placeholder="Type a message..."
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                      />
                      <button
                        type="submit"
                        className="btn btn-primary"
                        disabled={!newMessage.trim()}
                      >
                        <FaPaperPlane className="mr-2" /> Send
                      </button>
                    </form>
                  </div>
                </>
              ) : (
                <div className="flex-1 flex items-center justify-center bg-gray-50">
                  <div className="text-center p-6">
                    <div className="mx-auto h-16 w-16 text-gray-300 mb-4">
                      <FaEnvelope className="h-full w-full" />
                    </div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">No conversation selected</h3>
                    <p className="text-gray-600 max-w-md">
                      Select a conversation from the list or start a new one by browsing profiles.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        
        {/* Mobile View - Show only when a conversation is selected */}
        {activeConversation && (
          <div className="md:hidden fixed inset-0 bg-white z-50 flex flex-col">
            {/* Mobile Conversation Header */}
            <div className="p-4 border-b flex items-center">
              <button
                onClick={() => setActiveConversation(null)}
                className="mr-3 text-gray-600"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <div className="flex items-center flex-1">
                {activeConversation.otherUser.photoURL ? (
                  <img 
                    src={activeConversation.otherUser.photoURL} 
                    alt={activeConversation.otherUser.displayName} 
                    className="h-10 w-10 rounded-full object-cover mr-3"
                  />
                ) : (
                  <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center mr-3">
                    <FaUserCircle className="text-gray-400 text-xl" />
                  </div>
                )}
                <div>
                  <h3 className="text-sm font-medium text-gray-900">
                    {activeConversation.otherUser.displayName}
                  </h3>
                  <p className="text-xs text-gray-500">
                    {activeConversation.otherUser.lastActive}
                  </p>
                </div>
              </div>
              
              <button className="text-gray-400 hover:text-gray-600">
                <FaEllipsisV />
              </button>
            </div>
            
            {/* Mobile Messages List */}
            <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
              <div className="space-y-4">
                {messages.map(message => (
                  <div
                    key={message.id}
                    className={`flex ${
                      message.senderId === currentUser.uid ? 'justify-end' : 'justify-start'
                    }`}
                  >
                    <div
                      className={`max-w-xs px-4 py-2 rounded-lg ${
                        message.senderId === currentUser.uid
                          ? 'bg-primary-500 text-white'
                          : 'bg-white border text-gray-800'
                      }`}
                    >
                      <p className="text-sm">{message.text}</p>
                      <p className={`text-xs mt-1 ${
                        message.senderId === currentUser.uid ? 'text-primary-100' : 'text-gray-500'
                      }`}>
                        {new Date(message.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </p>
                    </div>
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>
            </div>
            
            {/* Mobile Message Input */}
            <div className="p-4 border-t">
              <form onSubmit={handleSendMessage} className="flex">
                <input
                  type="text"
                  className="input flex-1 mr-2"
                  placeholder="Type a message..."
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                />
                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={!newMessage.trim()}
                >
                  <FaPaperPlane />
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
