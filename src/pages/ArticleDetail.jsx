import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { FaArrowLeft, FaCalendarAlt, FaUser, FaTag, FaShare, FaBookmark, FaPrint } from 'react-icons/fa'

const ArticleDetail = () => {
  const { id } = useParams()
  
  // Mock article data - in a real app, you would fetch this based on the ID
  const articles = {
    '1': {
      title: 'The Islamic Approach to Finding a Spouse',
      content: `
        <p class="mb-4">In Islam, marriage is considered a sacred bond and an important part of one's faith. The Prophet Muhammad (peace be upon him) said, "Marriage is half of religion." Finding a suitable spouse is therefore not just a personal choice but a religious duty.</p>
        
        <h2 class="text-2xl font-bold mt-8 mb-4">Islamic Guidelines for Spouse Selection</h2>
        
        <p class="mb-4">Islam provides clear guidelines for selecting a spouse. The Prophet Muhammad (peace be upon him) advised that a person may be chosen for marriage for four reasons: wealth, beauty, lineage, and religious commitment. He emphasized that one should prioritize religious commitment above all.</p>
        
        <p class="mb-4">This doesn't mean other factors aren't important. Mutual attraction and compatibility are essential for a successful marriage. However, shared values and religious commitment provide the foundation for a lasting relationship.</p>
        
        <h2 class="text-2xl font-bold mt-8 mb-4">The Role of Parents and Guardians</h2>
        
        <p class="mb-4">In Islamic tradition, parents and guardians play an important role in the marriage process. Their approval and blessings are sought, and they often help in finding suitable matches. This involvement ensures that marriages are built on strong foundations with family support.</p>
        
        <p class="mb-4">However, forced marriages are not permitted in Islam. Both the bride and groom must give their free consent. The Prophet Muhammad (peace be upon him) invalidated marriages where the woman's consent was not obtained.</p>
        
        <h2 class="text-2xl font-bold mt-8 mb-4">Modern Approaches While Maintaining Islamic Values</h2>
        
        <p class="mb-4">In today's world, Muslims have adapted various ways to find spouses while maintaining Islamic principles. These include:</p>
        
        <ul class="list-disc pl-6 mb-4">
          <li class="mb-2">Family and community networks</li>
          <li class="mb-2">Islamic events and conferences</li>
          <li class="mb-2">Muslim marriage services and websites</li>
          <li class="mb-2">University and professional networks</li>
        </ul>
        
        <p class="mb-4">Regardless of the method, the key is to maintain Islamic boundaries of modesty and propriety during the process.</p>
        
        <h2 class="text-2xl font-bold mt-8 mb-4">Getting to Know Each Other</h2>
        
        <p class="mb-4">Islam permits potential spouses to meet and talk to assess compatibility, but with proper etiquette. These meetings should:</p>
        
        <ul class="list-disc pl-6 mb-4">
          <li class="mb-2">Take place in public or with family present</li>
          <li class="mb-2">Maintain modest behavior and dress</li>
          <li class="mb-2">Focus on important topics like religious views, life goals, and expectations</li>
          <li class="mb-2">Avoid physical contact before marriage</li>
        </ul>
        
        <h2 class="text-2xl font-bold mt-8 mb-4">Prayer and Divine Guidance</h2>
        
        <p class="mb-4">Throughout the search process, Muslims are encouraged to seek Allah's guidance through prayer (istikhara). This prayer asks for divine help in making the right decision and brings peace of heart.</p>
        
        <p class="mb-4">The search for a spouse should be approached with sincerity, patience, and trust in Allah's plan. As the Quran states: "And among His Signs is this, that He created for you mates from among yourselves, that you may dwell in tranquility with them, and He has put love and mercy between your hearts." (Quran 30:21)</p>
      `,
      category: 'Marriage',
      date: 'May 15, 2023',
      author: 'Imam Abdullah',
      authorBio: 'Imam Abdullah is a respected scholar with over 15 years of experience counseling Muslim couples.',
      image: 'https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      tags: ['Marriage', 'Spouse Selection', 'Islamic Guidelines']
    }
  }
  
  const article = articles[id]
  
  if (!article) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Article Not Found</h2>
          <p className="text-gray-600 mb-6">The article you're looking for doesn't exist or has been removed.</p>
          <Link 
            to="/articles" 
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700"
          >
            <FaArrowLeft className="mr-2" />
            Back to Articles
          </Link>
        </div>
      </div>
    )
  }
  
  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <div className="mb-6">
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li className="inline-flex items-center">
                <Link to="/" className="text-gray-600 hover:text-gray-900">
                  Home
                </Link>
              </li>
              <li>
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                  </svg>
                  <Link to="/articles" className="ml-1 text-gray-600 hover:text-gray-900 md:ml-2">
                    Articles
                  </Link>
                </div>
              </li>
              <li aria-current="page">
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                  </svg>
                  <span className="ml-1 text-gray-500 md:ml-2 font-medium truncate">
                    {article.title}
                  </span>
                </div>
              </li>
            </ol>
          </nav>
        </div>
        
        <div className="flex flex-col lg:flex-row">
          {/* Main Content */}
          <div className="w-full lg:w-3/4 lg:pr-8">
            <article className="bg-white rounded-lg shadow-sm overflow-hidden">
              {/* Featured Image */}
              <div className="h-64 md:h-96 overflow-hidden">
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Article Header */}
              <div className="p-6 md:p-8 border-b">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  {article.title}
                </h1>
                
                <div className="flex flex-wrap items-center text-sm text-gray-500 mb-4">
                  <div className="flex items-center mr-4 mb-2">
                    <FaUser className="mr-1" size={14} />
                    <span>{article.author}</span>
                  </div>
                  <div className="flex items-center mr-4 mb-2">
                    <FaCalendarAlt className="mr-1" size={14} />
                    <span>{article.date}</span>
                  </div>
                  <div className="flex items-center mb-2">
                    <FaTag className="mr-1" size={14} />
                    <span>{article.category}</span>
                  </div>
                </div>
                
                {/* Social Sharing */}
                <div className="flex items-center space-x-4">
                  <button className="text-gray-500 hover:text-primary-600">
                    <FaShare size={16} />
                  </button>
                  <button className="text-gray-500 hover:text-primary-600">
                    <FaBookmark size={16} />
                  </button>
                  <button className="text-gray-500 hover:text-primary-600">
                    <FaPrint size={16} />
                  </button>
                </div>
              </div>
              
              {/* Article Content */}
              <div className="p-6 md:p-8 prose prose-lg max-w-none">
                <div dangerouslySetInnerHTML={{ __html: article.content }} />
              </div>
              
              {/* Tags */}
              <div className="px-6 md:px-8 pb-6 md:pb-8 pt-2">
                <div className="flex flex-wrap gap-2">
                  {article.tags.map(tag => (
                    <span 
                      key={tag} 
                      className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Author Bio */}
              <div className="px-6 md:px-8 py-6 bg-gray-50 border-t">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="h-12 w-12 rounded-full bg-primary-100 flex items-center justify-center">
                      <FaUser className="text-primary-600" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">{article.author}</h3>
                    <p className="text-sm text-gray-600">{article.authorBio}</p>
                  </div>
                </div>
              </div>
            </article>
            
            {/* Navigation */}
            <div className="mt-8 flex justify-between">
              <Link 
                to="/articles" 
                className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
              >
                <FaArrowLeft className="mr-2" />
                Back to Articles
              </Link>
            </div>
          </div>
          
          {/* Sidebar */}
          <div className="w-full lg:w-1/4 mt-8 lg:mt-0">
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Related Articles</h2>
              <ul className="space-y-4">
                <li>
                  <Link to="/articles/2" className="block hover:bg-gray-50 rounded-md p-2 -m-2">
                    <h3 className="text-gray-900 font-medium mb-1">Rights and Responsibilities in Muslim Marriage</h3>
                    <p className="text-sm text-gray-500">Understanding mutual rights in an Islamic marriage</p>
                  </Link>
                </li>
                <li>
                  <Link to="/articles/4" className="block hover:bg-gray-50 rounded-md p-2 -m-2">
                    <h3 className="text-gray-900 font-medium mb-1">Preparing for Marriage: A Muslim Perspective</h3>
                    <p className="text-sm text-gray-500">Practical steps for marriage preparation</p>
                  </Link>
                </li>
                <li>
                  <Link to="/articles/3" className="block hover:bg-gray-50 rounded-md p-2 -m-2">
                    <h3 className="text-gray-900 font-medium mb-1">Communication Skills for Muslim Couples</h3>
                    <p className="text-sm text-gray-500">Building strong relationships through communication</p>
                  </Link>
                </li>
              </ul>
            </div>
            
            <div className="bg-primary-50 rounded-lg p-6 border-l-4 border-primary-500">
              <h3 className="font-medium text-primary-800 mb-2">Seeking Guidance?</h3>
              <p className="text-sm text-gray-600 mb-4">
                If you have questions about Islamic marriage or need personalized advice, our scholars are here to help.
              </p>
              <Link 
                to="/contact" 
                className="inline-block text-sm font-medium text-primary-600 hover:text-primary-500"
              >
                Contact Our Scholars →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ArticleDetail
