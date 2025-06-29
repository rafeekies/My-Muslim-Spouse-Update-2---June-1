import React from 'react'
import { useParams } from 'react-router-dom'
import { FaMapMarkerAlt, FaCalendarAlt, FaQuran, FaMosque, FaGraduationCap, FaBriefcase, FaLanguage, FaHeart, FaEnvelope } from 'react-icons/fa'

const UserProfile = () => {
  const { id } = useParams()
  
  // Mock profile data for demonstration
  const profile = {
    id: id,
    name: 'Fatima Hassan',
    age: 26,
    location: 'Birmingham, UK',
    occupation: 'Pharmacist',
    education: "Bachelor's in Pharmacy",
    religiousBackground: 'Sunni, Practicing',
    prayerCommitment: 'All five daily prayers',
    madhab: 'Maliki',
    quranKnowledge: 'Can read with tajweed, memorized 3 juz',
    languages: ['English', 'Arabic', 'French'],
    familyValues: 'Traditional, family-oriented',
    aboutMe: 'Assalamu alaikum, I am a practicing Muslimah who values Islamic principles and traditions. I enjoy reading, cooking, and volunteering at the local masjid. I am looking for someone who is kind, religious, and has strong family values.',
    lookingFor: 'A practicing Muslim who is educated, kind-hearted, and ready for marriage. Someone who values Islamic principles and wants to build a family based on mutual respect and love.',
    avatar: 'https://images.pexels.com/photos/1820919/pexels-photo-1820919.jpeg'
  }

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="container-custom">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          {/* Profile Header */}
          <div className="relative">
            <div className="h-48 bg-gradient-to-r from-primary-600 to-primary-700 relative">
              <div className="absolute inset-0 bg-islamic-pattern opacity-10"></div>
            </div>
            <div className="absolute top-24 left-8">
              <div className="relative">
                <img 
                  src={profile.avatar} 
                  alt={profile.name} 
                  className="w-40 h-40 rounded-full border-4 border-white object-cover"
                />
                <div className="absolute bottom-4 right-4 bg-primary-100 text-primary-700 rounded-full px-3 py-1 text-sm font-semibold">
                  Verified
                </div>
              </div>
            </div>
            <div className="h-24"></div>
          </div>
          
          {/* Profile Content */}
          <div className="p-8">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h1 className="text-3xl font-bold">{profile.name}, {profile.age}</h1>
                <div className="flex items-center text-gray-600 mt-2">
                  <FaMapMarkerAlt className="mr-2" />
                  <span>{profile.location}</span>
                </div>
              </div>
              <button 
                className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-md flex items-center transition"
              >
                <FaEnvelope className="mr-2" />
                Send Message
              </button>
            </div>
            
            {/* Profile Sections */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* About Me */}
              <div className="md:col-span-2 space-y-8">
                <div>
                  <h2 className="text-xl font-semibold mb-4 pb-2 border-b border-gray-200">About Me</h2>
                  <p className="text-gray-700 leading-relaxed">{profile.aboutMe}</p>
                </div>
                
                <div>
                  <h2 className="text-xl font-semibold mb-4 pb-2 border-b border-gray-200">What I'm Looking For</h2>
                  <p className="text-gray-700 leading-relaxed">{profile.lookingFor}</p>
                </div>
                
                {/* Religious Background */}
                <div>
                  <h2 className="text-xl font-semibold mb-4 pb-2 border-b border-gray-200">Religious Background</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mr-3">
                        <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center">
                          <FaMosque className="text-primary-600" />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-medium">Religious Practice</h3>
                        <p className="text-gray-600">{profile.religiousBackground}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mr-3">
                        <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center">
                          <FaQuran className="text-primary-600" />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-medium">Quran Knowledge</h3>
                        <p className="text-gray-600">{profile.quranKnowledge}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mr-3">
                        <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center">
                          <FaMosque className="text-primary-600" />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-medium">Prayer Commitment</h3>
                        <p className="text-gray-600">{profile.prayerCommitment}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mr-3">
                        <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center">
                          <FaQuran className="text-primary-600" />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-medium">Madhab</h3>
                        <p className="text-gray-600">{profile.madhab}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Sidebar */}
              <div className="space-y-6">
                {/* Basic Info */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h2 className="text-lg font-semibold mb-4">Basic Information</h2>
                  
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <div className="w-8 text-gray-500">
                        <FaBriefcase />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Occupation</p>
                        <p className="font-medium">{profile.occupation}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <div className="w-8 text-gray-500">
                        <FaGraduationCap />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Education</p>
                        <p className="font-medium">{profile.education}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <div className="w-8 text-gray-500">
                        <FaLanguage />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Languages</p>
                        <p className="font-medium">{profile.languages.join(', ')}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <div className="w-8 text-gray-500">
                        <FaHeart />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Family Values</p>
                        <p className="font-medium">{profile.familyValues}</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Islamic Quote */}
                <div className="bg-primary-50 rounded-lg p-6 border-l-4 border-primary-500">
                  <p className="text-lg font-arabic text-right mb-3">
                    وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا
                  </p>
                  <p className="text-gray-700 italic text-sm">
                    "And of His signs is that He created for you from yourselves mates that you may find tranquility in them..."
                  </p>
                  <p className="text-gray-500 text-xs mt-1">Surah Ar-Rum 30:21</p>
                </div>
                
                {/* Contact Options */}
                <div className="bg-green-50 rounded-lg p-6 border-l-4 border-green-500">
                  <h3 className="font-semibold text-green-800 mb-2">Interested?</h3>
                  <p className="text-green-700 text-sm mb-3">
                    If you think this profile might be a good match, you can express interest or send a message.
                  </p>
                  <div className="space-y-2">
                    <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-md text-sm font-medium transition">
                      Express Interest
                    </button>
                    <button className="w-full bg-white border border-green-600 text-green-700 hover:bg-green-50 py-2 rounded-md text-sm font-medium transition">
                      Add to Favorites
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserProfile
