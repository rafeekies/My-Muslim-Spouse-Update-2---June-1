import React, { useState } from 'react'
import { FaQuestionCircle, FaSearch } from 'react-icons/fa'

const FAQs = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [activeCategory, setActiveCategory] = useState('all')
  const [openFaqs, setOpenFaqs] = useState({})
  
  // Toggle FAQ open/closed state
  const toggleFaq = (id) => {
    setOpenFaqs(prev => ({
      ...prev,
      [id]: !prev[id]
    }))
  }
  
  // FAQ categories
  const categories = [
    { id: 'all', name: 'All Questions' },
    { id: 'registration', name: 'Registration & Profile' },
    { id: 'matching', name: 'Matching Process' },
    { id: 'communication', name: 'Communication' },
    { id: 'islamic', name: 'Islamic Guidelines' },
    { id: 'privacy', name: 'Privacy & Safety' }
  ]
  
  // FAQ data
  const faqs = [
    {
      id: 1,
      question: 'How does My Muslim Spouse ensure Islamic principles are followed?',
      answer: 'My Muslim Spouse is designed with Islamic principles at its core. We enforce strict modesty guidelines, provide Islamic resources, and ensure all interactions follow Islamic etiquette. Our platform facilitates family involvement in the process and provides educational content on Islamic marriage practices.',
      category: 'islamic'
    },
    {
      id: 2,
      question: 'Can family members be involved in the matching process?',
      answer: 'Yes, we encourage family involvement. Users can add family members as "Wali" (guardians) to their account. These family members can review potential matches, participate in conversations, and help guide the process in accordance with Islamic traditions.',
      category: 'matching'
    },
    {
      id: 3,
      question: 'How is my privacy protected on the platform?',
      answer: 'We take privacy very seriously. Your personal information is only visible to verified users you choose to connect with. Profile photos can be blurred and only revealed to specific connections. You control who can contact you, and all data is encrypted and protected according to strict privacy standards.',
      category: 'privacy'
    },
    {
      id: 4,
      question: 'What information should I include in my profile?',
      answer: 'Your profile should include honest information about your religious practices, education, family background, interests, and what you\'re looking for in a spouse. We recommend focusing on your values, life goals, and religious commitment rather than just physical attributes. Complete profiles receive more quality matches.',
      category: 'registration'
    },
    {
      id: 5,
      question: 'How does the matching system work?',
      answer: 'Our matching system uses both your stated preferences and Islamic compatibility factors. We consider religious values, life goals, education, and family background. You\'ll receive quality matches rather than endless profiles to browse. You can also set deal-breakers that will automatically filter incompatible matches.',
      category: 'matching'
    },
    {
      id: 6,
      question: 'What communication options are available?',
      answer: 'We offer text-based messaging, supervised chat rooms where family members can be present, and virtual meeting spaces. All communication tools are designed to maintain Islamic etiquette and modesty while allowing you to get to know potential spouses in a halal environment.',
      category: 'communication'
    },
    {
      id: 7,
      question: 'Is there a verification process for users?',
      answer: 'Yes, all users go through a verification process to confirm their identity. This includes email verification, phone verification, and optional ID verification for enhanced trust. We also have community reporting features to maintain platform integrity.',
      category: 'privacy'
    },
    {
      id: 8,
      question: 'What Islamic resources are available on the platform?',
      answer: 'We provide articles, videos, and guides on Islamic marriage, spouse selection criteria, rights and responsibilities in marriage, and how to conduct the search process in an Islamically appropriate manner. We also offer access to qualified scholars who can answer specific questions.',
      category: 'islamic'
    },
    {
      id: 9,
      question: 'Can I hide my profile temporarily?',
      answer: 'Yes, you can pause your profile visibility at any time without losing your information or connections. This is useful if you\'re getting to know someone seriously or need a break from the search process.',
      category: 'registration'
    },
    {
      id: 10,
      question: 'How can I report inappropriate behavior?',
      answer: 'We have a zero-tolerance policy for un-Islamic behavior. You can report any concerns through the "Report" button available on profiles and in messages. Our moderation team reviews all reports within 24 hours and takes appropriate action.',
      category: 'privacy'
    }
  ]
  
  // Filter FAQs based on search term and active category
  const filteredFaqs = faqs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
    
    const matchesCategory = activeCategory === 'all' || faq.category === activeCategory
    
    return matchesSearch && matchesCategory
  })
  
  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about using My Muslim Spouse and how we maintain Islamic principles.
          </p>
        </div>
        
        {/* Search Bar */}
        <div className="max-w-xl mx-auto mb-10">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaSearch className="text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
              placeholder="Search for questions or keywords"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row">
          {/* Category Sidebar */}
          <div className="w-full md:w-1/4 mb-8 md:mb-0 md:pr-8">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Categories</h2>
              <ul className="space-y-2">
                {categories.map((category) => (
                  <li key={category.id}>
                    <button
                      onClick={() => setActiveCategory(category.id)}
                      className={`flex items-center w-full px-3 py-2 text-left rounded-md ${
                        activeCategory === category.id 
                          ? 'bg-primary-50 text-primary-700' 
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      {category.id === 'all' ? (
                        <FaQuestionCircle className="mr-2" />
                      ) : (
                        <span className="w-5 h-5 flex items-center justify-center mr-2 rounded-full bg-gray-100 text-xs">
                          {faqs.filter(faq => faq.category === category.id).length}
                        </span>
                      )}
                      {category.name}
                    </button>
                  </li>
                ))}
              </ul>
              
              <div className="mt-8 p-4 bg-primary-50 rounded-lg border-l-4 border-primary-500">
                <h3 className="font-medium text-primary-800 mb-2">Need More Help?</h3>
                <p className="text-sm text-gray-600">
                  If you can't find the answer you're looking for, our support team is here to help.
                </p>
                <button className="mt-2 text-sm font-medium text-primary-600 hover:text-primary-500">
                  Contact Support →
                </button>
              </div>
            </div>
          </div>
          
          {/* FAQ Accordion */}
          <div className="w-full md:w-3/4">
            {filteredFaqs.length > 0 ? (
              <div className="bg-white rounded-lg shadow-sm divide-y">
                {filteredFaqs.map((faq) => (
                  <div key={faq.id} className="p-6">
                    <button
                      className="flex justify-between items-center w-full text-left"
                      onClick={() => toggleFaq(faq.id)}
                    >
                      <h3 className="text-lg font-medium text-gray-900 pr-8">{faq.question}</h3>
                      <svg
                        className={`h-6 w-6 text-gray-500 transform ${openFaqs[faq.id] ? 'rotate-180' : ''}`}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    
                    {openFaqs[faq.id] && (
                      <div className="mt-4 text-gray-600">
                        <p>{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-lg shadow-sm p-8 text-center">
                <FaQuestionCircle className="mx-auto text-gray-400 mb-4" size={48} />
                <h3 className="text-xl font-medium text-gray-900 mb-2">No questions found</h3>
                <p className="text-gray-600">
                  We couldn't find any questions matching your search. Please try different keywords or browse by category.
                </p>
                <button
                  onClick={() => {
                    setSearchTerm('')
                    setActiveCategory('all')
                  }}
                  className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700"
                >
                  View All Questions
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default FAQs
