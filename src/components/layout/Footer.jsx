import React from 'react'
import { Link } from 'react-router-dom'
import { FaMosque, FaTwitter, FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-gray-800 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-4 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <div className="flex items-center">
              <FaMosque className="h-8 w-8 text-primary-400" />
              <span className="ml-2 text-xl font-bold text-white">My Muslim Spouse</span>
            </div>
            <p className="text-gray-300 text-base">
              A trusted platform for Muslims seeking marriage based on Islamic values and principles.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-primary-400">
                <span className="sr-only">Facebook</span>
                <FaFacebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400">
                <span className="sr-only">Instagram</span>
                <FaInstagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400">
                <span className="sr-only">Twitter</span>
                <FaTwitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400">
                <span className="sr-only">YouTube</span>
                <FaYoutube className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-3">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">
                  Navigation
                </h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <Link to="/" className="text-base text-gray-400 hover:text-white">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link to="/about" className="text-base text-gray-400 hover:text-white">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link to="/browse" className="text-base text-gray-400 hover:text-white">
                      Browse Profiles
                    </Link>
                  </li>
                  <li>
                    <Link to="/articles" className="text-base text-gray-400 hover:text-white">
                      Articles
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact" className="text-base text-gray-400 hover:text-white">
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">
                  Resources
                </h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <Link to="/islamic-marriage" className="text-base text-gray-400 hover:text-white">
                      Islamic Marriage
                    </Link>
                  </li>
                  <li>
                    <Link to="/family-in-islam" className="text-base text-gray-400 hover:text-white">
                      Family in Islam
                    </Link>
                  </li>
                  <li>
                    <Link to="/quran-references" className="text-base text-gray-400 hover:text-white">
                      Quranic References
                    </Link>
                  </li>
                  <li>
                    <Link to="/hadith-collection" className="text-base text-gray-400 hover:text-white">
                      Hadith Collection
                    </Link>
                  </li>
                  <li>
                    <Link to="/guidelines" className="text-base text-gray-400 hover:text-white">
                      Community Guidelines
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">
                  Support
                </h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <Link to="/faqs" className="text-base text-gray-400 hover:text-white">
                      FAQs
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact" className="text-base text-gray-400 hover:text-white">
                      Help Center
                    </Link>
                  </li>
                  <li>
                    <a href="#" className="text-base text-gray-400 hover:text-white">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-base text-gray-400 hover:text-white">
                      Terms of Service
                    </a>
                  </li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">
                  Account
                </h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <Link to="/login" className="text-base text-gray-400 hover:text-white">
                      Sign In
                    </Link>
                  </li>
                  <li>
                    <Link to="/register" className="text-base text-gray-400 hover:text-white">
                      Create Account
                    </Link>
                  </li>
                  <li>
                    <Link to="/profile" className="text-base text-gray-400 hover:text-white">
                      My Profile
                    </Link>
                  </li>
                  <li>
                    <Link to="/settings" className="text-base text-gray-400 hover:text-white">
                      Account Settings
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Copyright */}
      <div className="bg-gray-900">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm text-center md:text-left">
              &copy; {currentYear} My Muslim Spouse. All rights reserved.
            </p>
            <div className="mt-2 md:mt-0 flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-gray-300 text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-300 text-sm">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-300 text-sm">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
