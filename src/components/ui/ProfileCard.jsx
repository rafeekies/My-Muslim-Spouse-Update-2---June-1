import { Link } from 'react-router-dom'
import { FaUser, FaMapMarkerAlt, FaGraduationCap, FaHeart, FaRegHeart, FaComments } from 'react-icons/fa'

export default function ProfileCard({ profile, onInterestClick }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative">
        {profile.photoURL ? (
          <img 
            src={profile.photoURL} 
            alt={profile.displayName} 
            className="w-full h-48 object-cover"
          />
        ) : (
          <div className="w-full h-48 bg-gray-200 flex items-center justify-center">
            <FaUser className="text-gray-400 text-4xl" />
          </div>
        )}
        
        {/* Premium Badge */}
        {profile.subscription?.plan === 'premium' && (
          <div className="absolute top-2 right-2 bg-primary-500 text-white text-xs font-bold px-2 py-1 rounded-full">
            Premium
          </div>
        )}
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-1">{profile.displayName}</h3>
        
        <div className="flex items-center text-gray-600 text-sm mb-3">
          <FaMapMarkerAlt className="mr-1" />
          <span>{profile.location || 'Location not specified'}</span>
        </div>
        
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-sm">
            <div className="w-24 text-gray-500">Age:</div>
            <div className="text-gray-900">{profile.age || 'Not specified'}</div>
          </div>
          
          <div className="flex items-center text-sm">
            <div className="w-24 text-gray-500">Ethnicity:</div>
            <div className="text-gray-900 capitalize">{profile.ethnicity || 'Not specified'}</div>
          </div>
          
          <div className="flex items-center text-sm">
            <div className="w-24 text-gray-500">Education:</div>
            <div className="text-gray-900 capitalize">{profile.education || 'Not specified'}</div>
          </div>
          
          <div className="flex items-center text-sm">
            <div className="w-24 text-gray-500">Religious:</div>
            <div className="text-gray-900 capitalize">{profile.religiousLevel || 'Not specified'}</div>
          </div>
        </div>
        
        <div className="flex justify-between items-center">
          <Link 
            to={`/profile/${profile.id}`} 
            className="text-primary-600 hover:text-primary-700 text-sm font-medium"
          >
            View Profile
          </Link>
          
          <div className="flex space-x-2">
            <button
              onClick={() => onInterestClick(profile.id, 'interest')}
              className="p-2 text-pink-500 hover:text-pink-600 hover:bg-pink-50 rounded-full transition"
              title="Express Interest"
            >
              <FaRegHeart />
            </button>
            
            <button
              onClick={() => onInterestClick(profile.id, 'message')}
              className="p-2 text-primary-500 hover:text-primary-600 hover:bg-primary-50 rounded-full transition"
              title="Send Message"
            >
              <FaComments />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
