import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import { doc, updateDoc } from 'firebase/firestore'
import { db } from '../firebase/config'
import { FaCheck, FaTimes, FaCrown, FaHeart, FaEnvelope, FaSearch, FaUserShield } from 'react-icons/fa'
import LoadingSpinner from '../components/ui/LoadingSpinner'
import { toast } from 'react-toastify'

export default function Membership() {
  const { currentUser, userProfile, updateUserProfile } = useAuth()
  const [loading, setLoading] = useState(true)
  const [processingPayment, setProcessingPayment] = useState(false)
  const [selectedPlan, setSelectedPlan] = useState(null)
  const navigate = useNavigate()
  
  useEffect(() => {
    // Check if user is logged in and profile is loaded
    if (userProfile) {
      setLoading(false)
    }
  }, [userProfile])
  
  const plans = [
    {
      id: 'free',
      name: 'Free',
      price: 0,
      billingPeriod: 'forever',
      features: [
        { text: 'Create a profile', included: true },
        { text: 'Browse profiles', included: true },
        { text: 'Limited matches per day', included: true },
        { text: 'Send up to 5 interests per month', included: true },
        { text: 'Basic search filters', included: true },
        { text: 'Unlimited messaging with matches', included: false },
        { text: 'See who\'s interested in you', included: false },
        { text: 'Advanced search filters', included: false },
        { text: 'Profile highlighting', included: false },
        { text: 'Priority customer support', included: false }
      ]
    },
    {
      id: 'basic',
      name: 'Basic',
      price: 9.99,
      billingPeriod: 'monthly',
      features: [
        { text: 'Create a profile', included: true },
        { text: 'Browse profiles', included: true },
        { text: 'Unlimited matches', included: true },
        { text: 'Send up to 30 interests per month', included: true },
        { text: 'Basic search filters', included: true },
        { text: 'Unlimited messaging with matches', included: true },
        { text: 'See who\'s interested in you', included: true },
        { text: 'Advanced search filters', included: false },
        { text: 'Profile highlighting', included: false },
        { text: 'Priority customer support', included: false }
      ]
    },
    {
      id: 'premium',
      name: 'Premium',
      price: 19.99,
      billingPeriod: 'monthly',
      features: [
        { text: 'Create a profile', included: true },
        { text: 'Browse profiles', included: true },
        { text: 'Unlimited matches', included: true },
        { text: 'Unlimited interests', included: true },
        { text: 'Basic search filters', included: true },
        { text: 'Unlimited messaging with matches', included: true },
        { text: 'See who\'s interested in you', included: true },
        { text: 'Advanced search filters', included: true },
        { text: 'Profile highlighting', included: true },
        { text: 'Priority customer support', included: true }
      ]
    }
  ]
  
  const handleSelectPlan = (planId) => {
    setSelectedPlan(planId)
  }
  
  const handleSubscribe = async () => {
    if (!selectedPlan || selectedPlan === 'free') return
    
    try {
      setProcessingPayment(true)
      
      // In a real app, you would integrate with a payment processor here
      // This is simplified for demonstration
      
      // Simulate payment processing
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // Update user's subscription in Firestore
      const now = new Date()
      const endDate = new Date()
      endDate.setMonth(endDate.getMonth() + 1) // 1 month subscription
      
      const subscriptionData = {
        plan: selectedPlan,
        startDate: now.toISOString(),
        endDate: endDate.toISOString(),
        active: true
      }
      
      // Update in Firestore
      await updateDoc(doc(db, 'users', currentUser.uid), {
        subscription: subscriptionData
      })
      
      // Update local state
      await updateUserProfile({
        subscription: subscriptionData
      })
      
      toast.success(`Successfully subscribed to ${selectedPlan} plan!`)
      navigate('/dashboard')
    } catch (error) {
      console.error('Error processing subscription:', error)
      toast.error('Failed to process subscription. Please try again.')
    } finally {
      setProcessingPayment(false)
    }
  }
  
  const handleCancelSubscription = async () => {
    if (!userProfile?.subscription?.active) return
    
    if (!window.confirm('Are you sure you want to cancel your subscription? You will still have access until the end of your billing period.')) {
      return
    }
    
    try {
      setLoading(true)
      
      // Update subscription status in Firestore
      await updateDoc(doc(db, 'users', currentUser.uid), {
        'subscription.active': false
      })
      
      // Update local state
      await updateUserProfile({
        subscription: {
          ...userProfile.subscription,
          active: false
        }
      })
      
      toast.success('Your subscription has been canceled.')
    } catch (error) {
      console.error('Error canceling subscription:', error)
      toast.error('Failed to cancel subscription. Please try again.')
    } finally {
      setLoading(false)
    }
  }
  
  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex justify-center items-center">
        <LoadingSpinner size="large" />
      </div>
    )
  }
  
  const currentPlan = userProfile?.subscription?.plan || 'free'
  const isSubscriptionActive = userProfile?.subscription?.active || false
  
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container-custom">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Membership Plans</h1>
          <p className="text-gray-600">
            Choose the right plan to enhance your matrimonial journey
          </p>
        </div>
        
        {/* Current Subscription Status */}
        {currentPlan !== 'free' && (
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="p-3 rounded-full bg-primary-50 text-primary-500 mr-4">
                  <FaCrown className="h-6 w-6" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 capitalize">
                    {currentPlan} Plan
                  </h2>
                  <p className="text-gray-600">
                    {isSubscriptionActive 
                      ? `Your subscription is active until ${new Date(userProfile.subscription.endDate).toLocaleDateString()}` 
                      : 'Your subscription is canceled and will end on the next billing date.'
                    }
                  </p>
                </div>
              </div>
              
              {isSubscriptionActive && (
                <button
                  onClick={handleCancelSubscription}
                  className="btn btn-danger"
                >
                  Cancel Subscription
                </button>
              )}
            </div>
          </div>
        )}
        
        {/* Pricing Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {plans.map(plan => (
            <div 
              key={plan.id}
              className={`bg-white rounded-lg shadow-md overflow-hidden transition-shadow hover:shadow-lg ${
                currentPlan === plan.id ? 'ring-2 ring-primary-500' : ''
              }`}
            >
              <div className="p-6 border-b">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  {plan.name}
                </h2>
                <div className="flex items-baseline">
                  <span className="text-3xl font-extrabold text-gray-900">
                    ${plan.price}
                  </span>
                  <span className="ml-1 text-xl font-medium text-gray-500">
                    /{plan.billingPeriod}
                  </span>
                </div>
                
                <div className="mt-4">
                  {currentPlan === plan.id ? (
                    <button
                      className="w-full btn bg-gray-100 text-gray-800 cursor-default"
                      disabled
                    >
                      Current Plan
                    </button>
                  ) : (
                    <button
                      onClick={() => handleSelectPlan(plan.id)}
                      className={`w-full btn ${
                        selectedPlan === plan.id
                          ? 'btn-primary'
                          : 'btn-secondary'
                      }`}
                    >
                      {selectedPlan === plan.id ? 'Selected' : 'Select Plan'}
                    </button>
                  )}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-lg font-medium text-gray-900 mb-4">
                  Features
                </h3>
                <ul className="space-y-3">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <div className="flex-shrink-0">
                        {feature.included ? (
                          <FaCheck className="h-5 w-5 text-green-500" />
                        ) : (
                          <FaTimes className="h-5 w-5 text-red-500" />
                        )}
                      </div>
                      <p className="ml-3 text-gray-700">
                        {feature.text}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        
        {/* Subscribe Button */}
        {selectedPlan && selectedPlan !== 'free' && selectedPlan !== currentPlan && (
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div className="mb-4 md:mb-0">
                <h3 className="text-lg font-semibold text-gray-900 capitalize">
                  Subscribe to {selectedPlan} Plan
                </h3>
                <p className="text-gray-600">
                  You will be charged ${plans.find(p => p.id === selectedPlan)?.price} per month
                </p>
              </div>
              
              <button
                onClick={handleSubscribe}
                className="btn btn-primary"
                disabled={processingPayment}
              >
                {processingPayment ? (
                  <>
                    <LoadingSpinner size="small" color="white" />
                    <span className="ml-2">Processing...</span>
                  </>
                ) : (
                  'Subscribe Now'
                )}
              </button>
            </div>
          </div>
        )}
        
        {/* Features Comparison */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="px-6 py-4 border-b">
            <h2 className="text-xl font-semibold text-gray-900">Plan Features Comparison</h2>
          </div>
          
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Feature
                  </th>
                  <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Free
                  </th>
                  <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Basic
                  </th>
                  <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Premium
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    <div className="flex items-center">
                      <FaSearch className="text-gray-400 mr-2" />
                      Profile Browsing
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">
                    Limited
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">
                    Unlimited
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">
                    Unlimited
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    <div className="flex items-center">
                      <FaHeart className="text-gray-400 mr-2" />
                      Express Interest
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">
                    5 per month
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">
                    30 per month
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">
                    Unlimited
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    <div className="flex items-center">
                      <FaEnvelope className="text-gray-400 mr-2" />
                      Messaging
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">
                    Limited
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">
                    Unlimited
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">
                    Unlimited
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    <div className="flex items-center">
                      <FaHeart className="text-gray-400 mr-2" />
                      See Who's Interested
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-center">
                    <FaTimes className="h-5 w-5 text-red-500 mx-auto" />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-center">
                    <FaCheck className="h-5 w-5 text-green-500 mx-auto" />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-center">
                    <FaCheck className="h-5 w-5 text-green-500 mx-auto" />
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    <div className="flex items-center">
                      <FaSearch className="text-gray-400 mr-2" />
                      Advanced Filters
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-center">
                    <FaTimes className="h-5 w-5 text-red-500 mx-auto" />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-center">
                    <FaTimes className="h-5 w-5 text-red-500 mx-auto" />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-center">
                    <FaCheck className="h-5 w-5 text-green-500 mx-auto" />
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    <div className="flex items-center">
                      <FaCrown className="text-gray-400 mr-2" />
                      Profile Highlighting
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-center">
                    <FaTimes className="h-5 w-5 text-red-500 mx-auto" />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-center">
                    <FaTimes className="h-5 w-5 text-red-500 mx-auto" />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-center">
                    <FaCheck className="h-5 w-5 text-green-500 mx-auto" />
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    <div className="flex items-center">
                      <FaUserShield className="text-gray-400 mr-2" />
                      Priority Support
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-center">
                    <FaTimes className="h-5 w-5 text-red-500 mx-auto" />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-center">
                    <FaTimes className="h-5 w-5 text-red-500 mx-auto" />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-center">
                    <FaCheck className="h-5 w-5 text-green-500 mx-auto" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
