import React from 'react'
import { Link } from 'react-router-dom'
import { FaSearch, FaHeart, FaBook, FaQuran, FaMosque } from 'react-icons/fa'
import { useAuth } from '../contexts/AuthContext'

const Home = () => {
  // Get auth context with fallback
  const authContext = useAuth() || { currentUser: null, loading: false }
  const { currentUser, loading } = authContext

  // Featured success stories
  const successStories = [
    {
      id: 1,
      couple: 'Ahmed & Fatima',
      image: 'https://images.pexels.com/photos/3760854/pexels-photo-3760854.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      story: "We connected through My Muslim Spouse and found that we shared the same values and vision for our future. Alhamdulillah, we've been happily married for 2 years now.",
    },
    {
      id: 2,
      couple: 'Yusuf & Aisha',
      image: 'https://images.pexels.com/photos/3770254/pexels-photo-3770254.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      story: "After months of searching, we found each other on this platform. Our families connected, and with Allah's blessing, we're now building our life together.",
    },
    {
      id: 3,
      couple: 'Ibrahim & Maryam',
      image: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      story: "What started as a simple message led to the most beautiful journey of our lives. We're grateful to My Muslim Spouse for bringing us together.",
    }
  ]

  // Featured articles
  const featuredArticles = [
    {
      id: 1,
      title: 'The Importance of Compatibility in Islamic Marriage',
      excerpt: 'Understanding the key factors that contribute to a successful and harmonious Islamic marriage.',
      image: 'https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      category: 'Marriage',
    },
    {
      id: 2,
      title: 'Communication Skills for Muslim Couples',
      excerpt: 'Effective communication strategies based on Islamic principles for building a strong marital foundation.',
      image: 'https://images.pexels.com/photos/7108227/pexels-photo-7108227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      category: 'Relationship',
    },
    {
      id: 3,
      title: 'Preparing for Marriage: A Comprehensive Guide',
      excerpt: 'Essential steps and considerations for Muslims preparing to enter the sacred bond of marriage.',
      image: 'https://images.pexels.com/photos/7108238/pexels-photo-7108238.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      category: 'Guidance',
    }
  ]

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-primary-600">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover opacity-30"
            src="https://images.pexels.com/photos/6646917/pexels-photo-6646917.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Muslim couple"
          />
          <div className="absolute inset-0 bg-primary-700 mix-blend-multiply" aria-hidden="true"></div>
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">My Muslim Spouse</h1>
          <p className="mt-6 text-xl text-primary-100 max-w-3xl">
            Find your compatible Muslim life partner in a safe, secure, and halal environment. 
            Our platform is designed to help practicing Muslims connect with potential spouses 
            who share their values and commitment to faith.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            {currentUser ? (
              <Link
                to="/browse"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-primary-700 bg-white hover:bg-primary-50"
              >
                <FaSearch className="mr-2" />
                Start Browsing
              </Link>
            ) : (
              <>
                <Link
                  to="/register"
                  className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-primary-700 bg-white hover:bg-primary-50"
                >
                  Create Account
                </Link>
                <Link
                  to="/login"
                  className="inline-flex items-center justify-center px-5 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-primary-500"
                >
                  Sign In
                </Link>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base font-semibold text-primary-600 tracking-wide uppercase">Features</h2>
            <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight">
              Why Choose My Muslim Spouse?
            </p>
            <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
              Our platform is designed with Islamic values at its core, providing a safe and respectful environment for Muslims seeking marriage.
            </p>
          </div>

          <div className="mt-12">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="pt-6">
                <div className="flow-root bg-white rounded-lg px-6 pb-8 shadow-md">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-primary-500 rounded-md shadow-lg">
                        <FaHeart className="h-6 w-6 text-white" aria-hidden="true" />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">Value-Based Matching</h3>
                    <p className="mt-5 text-base text-gray-500">
                      Our matching algorithm focuses on Islamic values, lifestyle compatibility, and long-term relationship goals.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <div className="flow-root bg-white rounded-lg px-6 pb-8 shadow-md">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-primary-500 rounded-md shadow-lg">
                        <FaBook className="h-6 w-6 text-white" aria-hidden="true" />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">Islamic Guidance</h3>
                    <p className="mt-5 text-base text-gray-500">
                      Access to articles, resources, and guidance on Islamic marriage from qualified scholars and counselors.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <div className="flow-root bg-white rounded-lg px-6 pb-8 shadow-md">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-primary-500 rounded-md shadow-lg">
                        <FaMosque className="h-6 w-6 text-white" aria-hidden="true" />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">Privacy & Safety</h3>
                    <p className="mt-5 text-base text-gray-500">
                      Strict verification process and privacy controls to ensure a safe and respectful environment.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Success Stories */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base font-semibold text-primary-600 tracking-wide uppercase">Success Stories</h2>
            <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight">
              Marriages Made with Faith
            </p>
            <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
              Read about couples who found their perfect match through My Muslim Spouse.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {successStories.map((story) => (
              <div key={story.id} className="bg-white overflow-hidden shadow rounded-lg">
                <div className="h-48 w-full overflow-hidden">
                  <img className="w-full h-full object-cover" src={story.image} alt={story.couple} />
                </div>
                <div className="px-4 py-5 sm:p-6">
                  <h3 className="text-lg font-medium text-gray-900">{story.couple}</h3>
                  <p className="mt-2 text-base text-gray-500">{story.story}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Articles */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base font-semibold text-primary-600 tracking-wide uppercase">Knowledge Center</h2>
            <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight">
              Featured Articles
            </p>
            <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
              Gain insights and knowledge about Islamic marriage and relationships.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {featuredArticles.map((article) => (
              <div key={article.id} className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                <div className="flex-shrink-0">
                  <img className="h-48 w-full object-cover" src={article.image} alt={article.title} />
                </div>
                <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-primary-600">
                      {article.category}
                    </p>
                    <Link to={`/articles/${article.id}`} className="block mt-2">
                      <p className="text-xl font-semibold text-gray-900">{article.title}</p>
                      <p className="mt-3 text-base text-gray-500">{article.excerpt}</p>
                    </Link>
                  </div>
                  <div className="mt-6">
                    <Link to={`/articles/${article.id}`} className="text-primary-600 hover:text-primary-500">
                      Read full article →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/articles"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700"
            >
              View All Articles
            </Link>
          </div>
        </div>
      </div>

      {/* Islamic Guidance Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Islamic Guidance on Marriage
              </h2>
              <p className="mt-3 max-w-3xl text-lg text-gray-500">
                Marriage in Islam is a sacred covenant that brings together a man and woman in a relationship of mutual love, respect, and compassion.
              </p>
              <div className="mt-8 space-y-4">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                      <FaQuran className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">Quranic References</h3>
                    <p className="mt-2 text-base text-gray-500">
                      "And among His Signs is that He created for you mates from among yourselves, that you may dwell in tranquility with them, and He has put love and mercy between your hearts." (Ar-Rum 30:21)
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                      <FaBook className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">Hadith Wisdom</h3>
                    <p className="mt-2 text-base text-gray-500">
                      "When a man marries, he has fulfilled half of his religion, so let him fear Allah regarding the remaining half." (Al-Tirmidhi)
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <Link
                  to="/islamic-marriage"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700"
                >
                  Learn More
                </Link>
              </div>
            </div>
            <div className="mt-10 lg:mt-0">
              <div className="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/6646911/pexels-photo-6646911.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Muslim couple reading"
                  className="w-full h-full object-center object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-primary-700">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">Ready to find your spouse?</span>
            <span className="block text-primary-200">Join our community today.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <Link
                to="/register"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-primary-600 bg-white hover:bg-primary-50"
              >
                Get Started
              </Link>
            </div>
            <div className="ml-3 inline-flex rounded-md shadow">
              <Link
                to="/about"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-500"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
