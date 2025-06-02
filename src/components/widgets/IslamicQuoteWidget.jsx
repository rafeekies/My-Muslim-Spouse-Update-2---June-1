import React, { useState } from 'react'
import { FaQuoteLeft, FaQuoteRight, FaRandom } from 'react-icons/fa'

const IslamicQuoteWidget = () => {
  const quotes = [
    {
      text: "The best among you are those who have the best manners and character.",
      source: "Prophet Muhammad (peace be upon him)",
      reference: "Sahih Bukhari"
    },
    {
      text: "The strong person is not the one who can wrestle someone else down. The strong person is the one who can control himself when he is angry.",
      source: "Prophet Muhammad (peace be upon him)",
      reference: "Sahih Bukhari"
    },
    {
      text: "Speak good or remain silent.",
      source: "Prophet Muhammad (peace be upon him)",
      reference: "Sahih Muslim"
    },
    {
      text: "Verily, God does not look at your appearance or wealth, but rather your hearts and actions.",
      source: "Prophet Muhammad (peace be upon him)",
      reference: "Sahih Muslim"
    },
    {
      text: "Marriage is half of faith.",
      source: "Prophet Muhammad (peace be upon him)",
      reference: "Al-Bayhaqi"
    },
    {
      text: "The most perfect believer in faith is the one whose character is finest and who is kindest to his wife.",
      source: "Prophet Muhammad (peace be upon him)",
      reference: "Sunan al-Tirmidhi"
    }
  ]
  
  const [currentQuote, setCurrentQuote] = useState(0)
  
  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length)
    if (randomIndex === currentQuote && quotes.length > 1) {
      // Avoid showing the same quote twice in a row
      return (randomIndex + 1) % quotes.length
    }
    return randomIndex
  }
  
  const handleNewQuote = () => {
    setCurrentQuote(getRandomQuote())
  }
  
  return (
    <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100 flex flex-col h-full">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">Islamic Wisdom</h3>
        <button 
          onClick={handleNewQuote}
          className="text-green-600 hover:text-green-700 focus:outline-none"
          aria-label="Get new quote"
        >
          <FaRandom />
        </button>
      </div>
      
      <div className="flex-grow flex flex-col justify-center">
        <div className="mb-4 text-center">
          <FaQuoteLeft className="inline-block text-green-400 mb-2" />
          <p className="text-lg text-gray-700 italic px-4">
            {quotes[currentQuote].text}
          </p>
          <FaQuoteRight className="inline-block text-green-400 mt-2" />
        </div>
        
        <div className="text-center">
          <p className="font-medium text-gray-800">
            {quotes[currentQuote].source}
          </p>
          <p className="text-sm text-gray-500">
            {quotes[currentQuote].reference}
          </p>
        </div>
      </div>
      
      <div className="mt-6 pt-4 border-t border-gray-100 text-center">
        <p className="text-sm text-gray-600">
          "The best of you are those who are best to their wives." - Prophet Muhammad (peace be upon him)
        </p>
      </div>
    </div>
  )
}

export default IslamicQuoteWidget
