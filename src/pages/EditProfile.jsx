import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { useAuth } from '../contexts/AuthContext'
import LoadingSpinner from '../components/ui/LoadingSpinner'

const EditProfile = () => {
  const { currentUser, userProfile, updateUserProfile, loading } = useAuth()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const navigate = useNavigate()
  
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      displayName: currentUser?.displayName || '',
      age: userProfile?.age || '',
      gender: userProfile?.gender || '',
      location: userProfile?.location || '',
      maritalStatus: userProfile?.maritalStatus || '',
      religiousPractice: userProfile?.religiousPractice || '',
      prayerFrequency: userProfile?.prayerFrequency || '',
      sect: userProfile?.sect || '',
      hijabBeard: userProfile?.hijabBeard || '',
      educationLevel: userProfile?.educationLevel || '',
      fieldOfStudy: userProfile?.fieldOfStudy || '',
      profession: userProfile?.profession || '',
      incomeRange: userProfile?.incomeRange || '',
      aboutMe: userProfile?.aboutMe || '',
      lookingFor: userProfile?.lookingFor || ''
    }
  })
  
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <LoadingSpinner size="large" />
      </div>
    )
  }
  
  const onSubmit = async (data) => {
    try {
      setIsSubmitting(true)
      
      // Add profileCompleted flag
      const updatedProfile = {
        ...data,
        profileCompleted: true
      }
      
      const success = await updateUserProfile(updatedProfile)
      
      if (success) {
        toast.success('Profile updated successfully')
        navigate('/profile')
      } else {
        toast.error('Failed to update profile')
      }
    } catch (error) {
      console.error('Profile update error:', error)
      toast.error(error.message || 'Failed to update profile')
    } finally {
      setIsSubmitting(false)
    }
  }
  
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Edit Profile</h1>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <form onSubmit={handleSubmit(onSubmit)} className="p-6">
              {/* Basic Information */}
              <div className="mb-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Basic Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="displayName" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name
                    </label>
                    <input
                      id="displayName"
                      type="text"
                      {...register('displayName', { required: 'Name is required' })}
                      className={`w-full rounded-md ${
                        errors.displayName ? 'border-red-300' : 'border-gray-300'
                      } shadow-sm focus:border-green-500 focus:ring-green-500`}
                    />
                    {errors.displayName && (
                      <p className="mt-1 text-sm text-red-600">{errors.displayName.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="age" className="block text-sm font-medium text-gray-700 mb-1">
                      Age
                    </label>
                    <input
                      id="age"
                      type="number"
                      {...register('age', { 
                        required: 'Age is required',
                        min: { value: 18, message: 'Age must be at least 18' },
                        max: { value: 80, message: 'Age must be less than 80' }
                      })}
                      className={`w-full rounded-md ${
                        errors.age ? 'border-red-300' : 'border-gray-300'
                      } shadow-sm focus:border-green-500 focus:ring-green-500`}
                    />
                    {errors.age && (
                      <p className="mt-1 text-sm text-red-600">{errors.age.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="gender" className="block text-sm font-medium text-gray-700 mb-1">
                      Gender
                    </label>
                    <select
                      id="gender"
                      {...register('gender', { required: 'Gender is required' })}
                      className={`w-full rounded-md ${
                        errors.gender ? 'border-red-300' : 'border-gray-300'
                      } shadow-sm focus:border-green-500 focus:ring-green-500`}
                    >
                      <option value="">Select Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </select>
                    {errors.gender && (
                      <p className="mt-1 text-sm text-red-600">{errors.gender.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
                      Location
                    </label>
                    <input
                      id="location"
                      type="text"
                      {...register('location', { required: 'Location is required' })}
                      className={`w-full rounded-md ${
                        errors.location ? 'border-red-300' : 'border-gray-300'
                      } shadow-sm focus:border-green-500 focus:ring-green-500`}
                    />
                    {errors.location && (
                      <p className="mt-1 text-sm text-red-600">{errors.location.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="maritalStatus" className="block text-sm font-medium text-gray-700 mb-1">
                      Marital Status
                    </label>
                    <select
                      id="maritalStatus"
                      {...register('maritalStatus', { required: 'Marital status is required' })}
                      className={`w-full rounded-md ${
                        errors.maritalStatus ? 'border-red-300' : 'border-gray-300'
                      } shadow-sm focus:border-green-500 focus:ring-green-500`}
                    >
                      <option value="">Select Marital Status</option>
                      <option value="never_married">Never Married</option>
                      <option value="divorced">Divorced</option>
                      <option value="widowed">Widowed</option>
                    </select>
                    {errors.maritalStatus && (
                      <p className="mt-1 text-sm text-red-600">{errors.maritalStatus.message}</p>
                    )}
                  </div>
                </div>
              </div>
              
              {/* Religious Information */}
              <div className="mb-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Religious Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="religiousPractice" className="block text-sm font-medium text-gray-700 mb-1">
                      Religious Practice
                    </label>
                    <select
                      id="religiousPractice"
                      {...register('religiousPractice', { required: 'Religious practice is required' })}
                      className={`w-full rounded-md ${
                        errors.religiousPractice ? 'border-red-300' : 'border-gray-300'
                      } shadow-sm focus:border-green-500 focus:ring-green-500`}
                    >
                      <option value="">Select Religious Practice</option>
                      <option value="very_practicing">Very Practicing</option>
                      <option value="practicing">Practicing</option>
                      <option value="moderately_practicing">Moderately Practicing</option>
                      <option value="not_practicing">Not Practicing</option>
                    </select>
                    {errors.religiousPractice && (
                      <p className="mt-1 text-sm text-red-600">{errors.religiousPractice.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="prayerFrequency" className="block text-sm font-medium text-gray-700 mb-1">
                      Prayer Frequency
                    </label>
                    <select
                      id="prayerFrequency"
                      {...register('prayerFrequency', { required: 'Prayer frequency is required' })}
                      className={`w-full rounded-md ${
                        errors.prayerFrequency ? 'border-red-300' : 'border-gray-300'
                      } shadow-sm focus:border-green-500 focus:ring-green-500`}
                    >
                      <option value="">Select Prayer Frequency</option>
                      <option value="five_times">5 times a day</option>
                      <option value="most_times">Most of the time</option>
                      <option value="sometimes">Sometimes</option>
                      <option value="rarely">Rarely</option>
                      <option value="never">Never</option>
                    </select>
                    {errors.prayerFrequency && (
                      <p className="mt-1 text-sm text-red-600">{errors.prayerFrequency.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="sect" className="block text-sm font-medium text-gray-700 mb-1">
                      Sect
                    </label>
                    <select
                      id="sect"
                      {...register('sect', { required: 'Sect is required' })}
                      className={`w-full rounded-md ${
                        errors.sect ? 'border-red-300' : 'border-gray-300'
                      } shadow-sm focus:border-green-500 focus:ring-green-500`}
                    >
                      <option value="">Select Sect</option>
                      <option value="sunni">Sunni</option>
                      <option value="shia">Shia</option>
                      <option value="other">Other</option>
                    </select>
                    {errors.sect && (
                      <p className="mt-1 text-sm text-red-600">{errors.sect.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="hijabBeard" className="block text-sm font-medium text-gray-700 mb-1">
                      {userProfile?.gender === 'female' ? 'Hijab' : 'Beard'}
                    </label>
                    <select
                      id="hijabBeard"
                      {...register('hijabBeard', { required: 'This field is required' })}
                      className={`w-full rounded-md ${
                        errors.hijabBeard ? 'border-red-300' : 'border-gray-300'
                      } shadow-sm focus:border-green-500 focus:ring-green-500`}
                    >
                      <option value="">Select Option</option>
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                      <option value="sometimes">Sometimes</option>
                    </select>
                    {errors.hijabBeard && (
                      <p className="mt-1 text-sm text-red-600">{errors.hijabBeard.message}</p>
                    )}
                  </div>
                </div>
              </div>
              
              {/* Education & Career */}
              <div className="mb-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Education & Career</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="educationLevel" className="block text-sm font-medium text-gray-700 mb-1">
                      Education Level
                    </label>
                    <select
                      id="educationLevel"
                      {...register('educationLevel', { required: 'Education level is required' })}
                      className={`w-full rounded-md ${
                        errors.educationLevel ? 'border-red-300' : 'border-gray-300'
                      } shadow-sm focus:border-green-500 focus:ring-green-500`}
                    >
                      <option value="">Select Education Level</option>
                      <option value="high_school">High School</option>
                      <option value="bachelors">Bachelor's Degree</option>
                      <option value="masters">Master's Degree</option>
                      <option value="doctorate">Doctorate</option>
                      <option value="other">Other</option>
                    </select>
                    {errors.educationLevel && (
                      <p className="mt-1 text-sm text-red-600">{errors.educationLevel.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="fieldOfStudy" className="block text-sm font-medium text-gray-700 mb-1">
                      Field of Study
                    </label>
                    <input
                      id="fieldOfStudy"
                      type="text"
                      {...register('fieldOfStudy', { required: 'Field of study is required' })}
                      className={`w-full rounded-md ${
                        errors.fieldOfStudy ? 'border-red-300' : 'border-gray-300'
                      } shadow-sm focus:border-green-500 focus:ring-green-500`}
                    />
                    {errors.fieldOfStudy && (
                      <p className="mt-1 text-sm text-red-600">{errors.fieldOfStudy.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="profession" className="block text-sm font-medium text-gray-700 mb-1">
                      Profession
                    </label>
                    <input
                      id="profession"
                      type="text"
                      {...register('profession', { required: 'Profession is required' })}
                      className={`w-full rounded-md ${
                        errors.profession ? 'border-red-300' : 'border-gray-300'
                      } shadow-sm focus:border-green-500 focus:ring-green-500`}
                    />
                    {errors.profession && (
                      <p className="mt-1 text-sm text-red-600">{errors.profession.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="incomeRange" className="block text-sm font-medium text-gray-700 mb-1">
                      Income Range
                    </label>
                    <select
                      id="incomeRange"
                      {...register('incomeRange', { required: 'Income range is required' })}
                      className={`w-full rounded-md ${
                        errors.incomeRange ? 'border-red-300' : 'border-gray-300'
                      } shadow-sm focus:border-green-500 focus:ring-green-500`}
                    >
                      <option value="">Select Income Range</option>
                      <option value="under_30k">Under $30,000</option>
                      <option value="30k_50k">$30,000 - $50,000</option>
                      <option value="50k_80k">$50,000 - $80,000</option>
                      <option value="80k_100k">$80,000 - $100,000</option>
                      <option value="over_100k">Over $100,000</option>
                      <option value="prefer_not_to_say">Prefer not to say</option>
                    </select>
                    {errors.incomeRange && (
                      <p className="mt-1 text-sm text-red-600">{errors.incomeRange.message}</p>
                    )}
                  </div>
                </div>
              </div>
              
              {/* About Me */}
              <div className="mb-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">About Me</h2>
                <div>
                  <label htmlFor="aboutMe" className="block text-sm font-medium text-gray-700 mb-1">
                    Tell us about yourself
                  </label>
                  <textarea
                    id="aboutMe"
                    rows={4}
                    {...register('aboutMe', { 
                      required: 'Please write something about yourself',
                      minLength: { value: 50, message: 'Please write at least 50 characters' }
                    })}
                    className={`w-full rounded-md ${
                      errors.aboutMe ? 'border-red-300' : 'border-gray-300'
                    } shadow-sm focus:border-green-500 focus:ring-green-500`}
                  ></textarea>
                  {errors.aboutMe && (
                    <p className="mt-1 text-sm text-red-600">{errors.aboutMe.message}</p>
                  )}
                </div>
              </div>
              
              {/* What I'm Looking For */}
              <div className="mb-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">What I'm Looking For</h2>
                <div>
                  <label htmlFor="lookingFor" className="block text-sm font-medium text-gray-700 mb-1">
                    Describe what you're looking for in a spouse
                  </label>
                  <textarea
                    id="lookingFor"
                    rows={4}
                    {...register('lookingFor', { 
                      required: 'Please describe what you\'re looking for',
                      minLength: { value: 50, message: 'Please write at least 50 characters' }
                    })}
                    className={`w-full rounded-md ${
                      errors.lookingFor ? 'border-red-300' : 'border-gray-300'
                    } shadow-sm focus:border-green-500 focus:ring-green-500`}
                  ></textarea>
                  {errors.lookingFor && (
                    <p className="mt-1 text-sm text-red-600">{errors.lookingFor.message}</p>
                  )}
                </div>
              </div>
              
              {/* Submit Button */}
              <div className="flex justify-end">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 ${
                    isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? (
                    <div className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Saving...
                    </div>
                  ) : (
                    'Save Profile'
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EditProfile
