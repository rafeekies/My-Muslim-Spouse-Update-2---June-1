import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaSearch, FaBook, FaCalendarAlt, FaUser } from 'react-icons/fa'

const Articles = () => {
  const [searchTerm, setSearchTerm] = useState('')
  
  // Mock articles data
  const articles = [
    {
      id: 1,
      title: 'The Islamic Approach to Finding a Spouse',
      excerpt: 'Learn about the Islamic guidelines for finding a suitable marriage partner while maintaining religious values.',
      category: 'Marriage',
      date: 'May 15, 2023',
      author: 'Imam Abdullah',
      image: 'https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id: 2,
      title: 'Rights and Responsibilities in Muslim Marriage',
      excerpt: 'Understanding the mutual rights and responsibilities of husband and wife in an Islamic marriage.',
      category: 'Marriage',
      date: 'June 2, 2023',
      author: 'Dr. Aisha Rahman',
      image: 'https://images.pexels.com/photos/3585798/pexels-photo-3585798.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id: 3,
      title: 'Communication Skills for Muslim Couples',
      excerpt: 'Effective communication techniques to build a strong and harmonious relationship based on Islamic principles.',
      category: 'Relationships',
      date: 'July 10, 2023',
      author: 'Ustadh Yusuf Ali',
      image: 'https://images.pexels.com/photos/8108063/pexels-photo-8108063.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id: 4,
      title: 'Preparing for Marriage: A Muslim Perspective',
      excerpt: 'Practical steps and spiritual preparation for those seeking marriage in accordance with Islamic teachings.',
      category: 'Pre-Marriage',
      date: 'August 5, 2023',
      author: 'Shaykh Muhammad Ibrahim',
      image: 'https://images.pexels.com/photos/7048043/pexels-photo-7048043.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id: 5,
      title: 'Raising Children in an Islamic Household',
      excerpt: 'Guidance on nurturing children with Islamic values and creating a loving family environment.',
      category: 'Family',
      date: 'September 12, 2023',
      author: 'Ustadha Fatima Hassan',
      image: 'https://images.pexels.com/photos/3867210/pexels-photo-3867210.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    }
  ]
  
  // Filter articles based on search term
  const filteredArticles = articles.filter(article => 
    article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    article.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    article.author.toLowerCase().includes(searchTerm.toLowerCase())
  )
  
  // Categories for filter sidebar
  const categories = [
    { name: 'Marriage', count: 2 },
    { name: 'Relationships', count: 1 },
    { name: 'Pre-Marriage', count: 1 },
    { name: 'Family', count: 1 }
  ]
  
  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Islamic Articles</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our collection of articles on marriage, relationships, and family life from an Islamic perspective.
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
              placeholder="Search articles by title, category, or author"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row">
          {/* Sidebar */}
          <div className="w-full md:w-1/4 mb-8 md:mb-0 md:pr-8">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Categories</h2>
              <ul className="space-y-2">
                {categories.map((category) => (
                  <li key={category.name}>
                    <button
                      onClick={() => setSearchTerm(category.name)}
                      className="flex items-center justify-between w-full px-2 py-2 text-left text-gray-700 hover:bg-gray-50 rounded-md"
                    >
                      <span>{category.name}</span>
                      <span className="bg-gray-100 text-gray-600 text-xs font-medium px-2 py-1 rounded-full">
                        {category.count}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
              
              <div className="mt-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Featured</h2>
                <div className="bg-primary-50 rounded-lg p-4 border-l-4 border-primary-500">
                  <h3 className="font-medium text-primary-800">Editor's Pick</h3>
                  <p className="text-sm text-gray-600 mt-2">
                    "The Islamic Approach to Finding a Spouse" has been our most read article this month.
                  </p>
                  <Link 
                    to="/articles/1" 
                    className="mt-2 inline-block text-sm font-medium text-primary-600 hover:text-primary-500"
                  >
                    Read Now →
                  </Link>
                </div>
              </div>
            </div>
          </div>
          
          {/* Main Content */}
          <div className="w-full md:w-3/4">
            {filteredArticles.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredArticles.map((article) => (
                  <div key={article.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={article.image} 
                        alt={article.title} 
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center text-sm text-gray-500 mb-2">
                        <span className="bg-primary-50 text-primary-700 px-2 py-1 rounded text-xs font-medium">
                          {article.category}
                        </span>
                        <span className="mx-2">•</span>
                        <div className="flex items-center">
                          <FaCalendarAlt className="mr-1" size={12} />
                          {article.date}
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        <Link to={`/articles/${article.id}`} className="hover:text-primary-600">
                          {article.title}
                        </Link>
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {article.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-sm text-gray-500">
                          <FaUser className="mr-1" size={12} />
                          <span>{article.author}</span>
                        </div>
                        <Link 
                          to={`/articles/${article.id}`} 
                          className="text-primary-600 hover:text-primary-700 font-medium text-sm"
                        >
                          Read More →
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-lg shadow-sm p-8 text-center">
                <FaBook className="mx-auto text-gray-400 mb-4" size={48} />
                <h3 className="text-xl font-medium text-gray-900 mb-2">No articles found</h3>
                <p className="text-gray-600">
                  We couldn't find any articles matching your search criteria. Please try a different search term.
                </p>
                <button
                  onClick={() => setSearchTerm('')}
                  className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700"
                >
                  View All Articles
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Articles
