import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useAuth } from '../contexts/AuthContext'
import { doc, updateDoc } from 'firebase/firestore'
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import { db, storage } from '../firebase/config'
import { toast } from 'react-toastify'
import { FaUser, FaMapMarkerAlt, FaBriefcase, FaGraduationCap, FaBook, FaHeart, FaChild, FaLanguage, FaUpload } from 'react-icons/fa'

export default function ProfileCreate() {
  const { register, handleSubmit, formState: { errors }, watch } = useForm()
  const [loading, setLoading] = useState(false)
  const [photoFile, setPhotoFile] = useState(null)
  const [photoPreview, setPhotoPreview] = useState(null)
  const [currentStep, setCurrentStep] = useState(1)
  const { currentUser, fetchUserProfile } = useAuth()
  const navigate = useNavigate()
  
  const totalSteps = 4
  
  const handlePhotoChange = (e) => {
    if (e.target.files[0]) {
      setPhotoFile(e.target.files[0])
      setPhotoPreview(URL.createObjectURL(e.target.files[0]))
    }
  }
  
  const nextStep = () => {
    setCurrentStep(prev => Math.min(prev + 1, totalSteps))
  }
  
  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1))
  }
  
  const onSubmit = async (data) => {
    try {
      setLoading(true)
      
      let photoURL = null
      
      // Upload photo if selected
      if (photoFile) {
        const storageRef = ref(storage, `profile-photos/${currentUser.uid}`)
        await uploadBytes(storageRef, photoFile)
        photoURL = await getDownloadURL(storageRef)
      }
      
      // Prepare profile data
      const profileData = {
        ...data,
        photoURL,
        profileCompleted: true,
        updatedAt: new Date().toISOString()
      }
      
      // Update user document in Firestore
      await updateDoc(doc(db, 'users', currentUser.uid), profileData)
      
      // Refresh user profile in context
      await fetchUserProfile(currentUser.uid)
      
      toast.success('Profile created successfully!')
      navigate('/dashboard')
    } catch (error) {
      console.error('Error creating profile:', error)
      toast.error('Failed to create profile. Please try again.')
    } finally {
      setLoading(false)
    }
  }
  
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Create Your Profile</h1>
            <p className="mt-2 text-gray-600">
              Complete your profile to start connecting with potential spouses
            </p>
          </div>
          
          {/* Progress Steps */}
          <div className="mb-8">
            <div className="flex items-center justify-between">
              {Array.from({ length: totalSteps }).map((_, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div 
                    className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-medium ${
                      currentStep > index + 1 
                        ? 'bg-green-500' 
                        : currentStep === index + 1 
                          ? 'bg-primary-600' 
                          : 'bg-gray-300'
                    }`}
                  >
                    {index + 1}
                  </div>
                  <div className="text-xs mt-2 text-gray-500">
                    {index === 0 && 'Basic Info'}
                    {index === 1 && 'Background'}
                    {index === 2 && 'Preferences'}
                    {index === 3 && 'About You'}
                  </div>
                </div>
              ))}
            </div>
            <div className="relative mt-2">
              <div className="absolute inset-0 flex items-center" aria-hidden="true">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-between">
                {Array.from({ length: totalSteps }).map((_, index) => (
                  <div 
                    key={index}
                    className={`w-1/4 ${
                      index < currentStep - 1 
                        ? 'bg-primary-600' 
                        : 'bg-gray-200'
                    }`}
                  ></div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* Step 1: Basic Information */}
              {currentStep === 1 && (
                <div className="p-6">
                  <h2 className="text-xl font-semibold mb-6">Basic Information</h2>
                  
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Profile Photo</label>
                    <div className="flex items-center">
                      <div className="mr-4">
                        {photoPreview ? (
                          <img 
                            src={photoPreview} 
                            alt="Profile preview" 
                            className="w-24 h-24 rounded-full object-cover"
                          />
                        ) : (
                          <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center">
                            <FaUser className="text-gray-400 text-3xl" />
                          </div>
                        )}
                      </div>
                      <label className="btn btn-secondary flex items-center cursor-pointer">
                        <FaUpload className="mr-2" />
                        Upload Photo
                        <input 
                          type="file" 
                          accept="image/*"
                          className="hidden"
                          onChange={handlePhotoChange}
                        />
                      </label>
                    </div>
                    <p className="mt-2 text-xs text-gray-500">
                      Please upload a modest photo that adheres to Islamic guidelines.
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="gender" className="block text-sm font-medium text-gray-700 mb-1">
                        Gender
                      </label>
                      <select
                        id="gender"
                        className={`input ${errors.gender ? 'border-red-300 focus:ring-red-500 focus:border-red-500' : ''}`}
                        {...register('gender', { required: 'Gender is required' })}
                      >
                        <option value="">Select gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                      </select>
                      {errors.gender && (
                        <p className="mt-1 text-sm text-red-600">{errors.gender.message}</p>
                      )}
                    </div>
                    
                    <div>
                      <label htmlFor="age" className="block text-sm font-medium text-gray-700 mb-1">
                        Age
                      </label>
                      <input
                        type="number"
                        id="age"
                        min="18"
                        max="80"
                        className={`input ${errors.age ? 'border-red-300 focus:ring-red-500 focus:border-red-500' : ''}`}
                        {...register('age', { 
                          required: 'Age is required',
                          min: {
                            value: 18,
                            message: 'You must be at least 18 years old'
                          },
                          max: {
                            value: 80,
                            message: 'Age must be less than 80'
                          }
                        })}
                      />
                      {errors.age && (
                        <p className="mt-1 text-sm text-red-600">{errors.age.message}</p>
                      )}
                    </div>
                    
                    <div>
                      <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
                        Location
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <FaMapMarkerAlt className="text-gray-400" />
                        </div>
                        <input
                          type="text"
                          id="location"
                          placeholder="City, Country"
                          className={`input pl-10 ${errors.location ? 'border-red-300 focus:ring-red-500 focus:border-red-500' : ''}`}
                          {...register('location', { required: 'Location is required' })}
                        />
                      </div>
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
                        className={`input ${errors.maritalStatus ? 'border-red-300 focus:ring-red-500 focus:border-red-500' : ''}`}
                        {...register('maritalStatus', { required: 'Marital status is required' })}
                      >
                        <option value="">Select marital status</option>
                        <option value="never married">Never Married</option>
                        <option value="divorced">Divorced</option>
                        <option value="widowed">Widowed</option>
                      </select>
                      {errors.maritalStatus && (
                        <p className="mt-1 text-sm text-red-600">{errors.maritalStatus.message}</p>
                      )}
                    </div>
                    
                    <div>
                      <label htmlFor="hasChildren" className="block text-sm font-medium text-gray-700 mb-1">
                        Do you have children?
                      </label>
                      <select
                        id="hasChildren"
                        className={`input ${errors.hasChildren ? 'border-red-300 focus:ring-red-500 focus:border-red-500' : ''}`}
                        {...register('hasChildren', { required: 'This field is required' })}
                      >
                        <option value="">Select option</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                      </select>
                      {errors.hasChildren && (
                        <p className="mt-1 text-sm text-red-600">{errors.hasChildren.message}</p>
                      )}
                    </div>
                    
                    <div>
                      <label htmlFor="wantChildren" className="block text-sm font-medium text-gray-700 mb-1">
                        Do you want children?
                      </label>
                      <select
                        id="wantChildren"
                        className={`input ${errors.wantChildren ? 'border-red-300 focus:ring-red-500 focus:border-red-500' : ''}`}
                        {...register('wantChildren', { required: 'This field is required' })}
                      >
                        <option value="">Select option</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                        <option value="open">Open to it</option>
                      </select>
                      {errors.wantChildren && (
                        <p className="mt-1 text-sm text-red-600">{errors.wantChildren.message}</p>
                      )}
                    </div>
                  </div>
                </div>
              )}
              
              {/* Step 2: Background */}
              {currentStep === 2 && (
                <div className="p-6">
                  <h2 className="text-xl font-semibold mb-6">Background & Lifestyle</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="ethnicity" className="block text-sm font-medium text-gray-700 mb-1">
                        Ethnicity
                      </label>
                      <select
                        id="ethnicity"
                        className={`input ${errors.ethnicity ? 'border-red-300 focus:ring-red-500 focus:border-red-500' : ''}`}
                        {...register('ethnicity', { required: 'Ethnicity is required' })}
                      >
                        <option value="">Select ethnicity</option>
                        <option value="arab">Arab</option>
                        <option value="south asian">South Asian</option>
                        <option value="african">African</option>
                        <option value="european">European</option>
                        <option value="southeast asian">Southeast Asian</option>
                        <option value="turkish">Turkish</option>
                        <option value="persian">Persian</option>
                        <option value="other">Other</option>
                      </select>
                      {errors.ethnicity && (
                        <p className="mt-1 text-sm text-red-600">{errors.ethnicity.message}</p>
                      )}
                    </div>
                    
                    <div>
                      <label htmlFor="nationality" className="block text-sm font-medium text-gray-700 mb-1">
                        Nationality
                      </label>
                      <input
                        type="text"
                        id="nationality"
                        className={`input ${errors.nationality ? 'border-red-300 focus:ring-red-500 focus:border-red-500' : ''}`}
                        {...register('nationality', { required: 'Nationality is required' })}
                      />
                      {errors.nationality && (
                        <p className="mt-1 text-sm text-red-600">{errors.nationality.message}</p>
                      )}
                    </div>
                    
                    <div>
                      <label htmlFor="languages" className="block text-sm font-medium text-gray-700 mb-1">
                        Languages Spoken
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <FaLanguage className="text-gray-400" />
                        </div>
                        <input
                          type="text"
                          id="languages"
                          placeholder="e.g. English, Arabic, Urdu"
                          className={`input pl-10 ${errors.languages ? 'border-red-300 focus:ring-red-500 focus:border-red-500' : ''}`}
                          {...register('languages', { required: 'Languages are required' })}
                        />
                      </div>
                      {errors.languages && (
                        <p className="mt-1 text-sm text-red-600">{errors.languages.message}</p>
                      )}
                    </div>
                    
                    <div>
                      <label htmlFor="education" className="block text-sm font-medium text-gray-700 mb-1">
                        Education Level
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <FaGraduationCap className="text-gray-400" />
                        </div>
                        <select
                          id="education"
                          className={`input pl-10 ${errors.education ? 'border-red-300 focus:ring-red-500 focus:border-red-500' : ''}`}
                          {...register('education', { required: 'Education level is required' })}
                        >
                          <option value="">Select education level</option>
                          <option value="high school">High School</option>
                          <option value="bachelor">Bachelor's Degree</option>
                          <option value="master">Master's Degree</option>
                          <option value="doctorate">Doctorate</option>
                          <option value="islamic education">Islamic Education</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      {errors.education && (
                        <p className="mt-1 text-sm text-red-600">{errors.education.message}</p>
                      )}
                    </div>
                    
                    <div>
                      <label htmlFor="profession" className="block text-sm font-medium text-gray-700 mb-1">
                        Profession
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <FaBriefcase className="text-gray-400" />
                        </div>
                        <input
                          type="text"
                          id="profession"
                          placeholder="e.g. Doctor, Engineer, Teacher"
                          className={`input pl-10 ${errors.profession ? 'border-red-300 focus:ring-red-500 focus:border-red-500' : ''}`}
                          {...register('profession', { required: 'Profession is required' })}
                        />
                      </div>
                      {errors.profession && (
                        <p className="mt-1 text-sm text-red-600">{errors.profession.message}</p>
                      )}
                    </div>
                    
                    <div>
                      <label htmlFor="religiousLevel" className="block text-sm font-medium text-gray-700 mb-1">
                        Religious Practice Level
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <FaBook className="text-gray-400" />
                        </div>
                        <select
                          id="religiousLevel"
                          className={`input pl-10 ${errors.religiousLevel ? 'border-red-300 focus:ring-red-500 focus:border-red-500' : ''}`}
                          {...register('religiousLevel', { required: 'Religious level is required' })}
                        >
                          <option value="">Select level</option>
                          <option value="very practicing">Very Practicing</option>
                          <option value="practicing">Practicing</option>
                          <option value="moderately practicing">Moderately Practicing</option>
                          <option value="cultural">Cultural</option>
                        </select>
                      </div>
                      {errors.religiousLevel && (
                        <p className="mt-1 text-sm text-red-600">{errors.religiousLevel.message}</p>
                      )}
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <label htmlFor="religiousPractices" className="block text-sm font-medium text-gray-700 mb-1">
                      Religious Practices
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="praysFiveTimes"
                          className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                          {...register('praysFiveTimes')}
                        />
                        <label htmlFor="praysFiveTimes" className="ml-2 block text-sm text-gray-700">
                          Prays five times daily
                        </label>
                      </div>
                      
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="fastsDuringRamadan"
                          className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                          {...register('fastsDuringRamadan')}
                        />
                        <label htmlFor="fastsDuringRamadan" className="ml-2 block text-sm text-gray-700">
                          Fasts during Ramadan
                        </label>
                      </div>
                      
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="wearsHijab"
                          className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                          {...register('wearsHijab')}
                        />
                        <label htmlFor="wearsHijab" className="ml-2 block text-sm text-gray-700">
                          Wears Hijab (for women)
                        </label>
                      </div>
                      
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="hasBeard"
                          className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                          {...register('hasBeard')}
                        />
                        <label htmlFor="hasBeard" className="ml-2 block text-sm text-gray-700">
                          Has Beard (for men)
                        </label>
                      </div>
                      
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="readsQuran"
                          className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                          {...register('readsQuran')}
                        />
                        <label htmlFor="readsQuran" className="ml-2 block text-sm text-gray-700">
                          Reads Quran regularly
                        </label>
                      </div>
                      
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="attendsMosque"
                          className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                          {...register('attendsMosque')}
                        />
                        <label htmlFor="attendsMosque" className="ml-2 block text-sm text-gray-700">
                          Attends mosque regularly
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              {/* Step 3: Preferences */}
              {currentStep === 3 && (
                <div className="p-6">
                  <h2 className="text-xl font-semibold mb-6">Spouse Preferences</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="prefAgeMin" className="block text-sm font-medium text-gray-700 mb-1">
                        Preferred Age Range
                      </label>
                      <div className="flex items-center space-x-2">
                        <input
                          type="number"
                          id="prefAgeMin"
                          min="18"
                          placeholder="Min"
                          className={`input w-full ${errors.prefAgeMin ? 'border-red-300 focus:ring-red-500 focus:border-red-500' : ''}`}
                          {...register('prefAgeMin', { 
                            required: 'Minimum age is required',
                            min: {
                              value: 18,
                              message: 'Minimum age must be at least 18'
                            }
                          })}
                        />
                        <span>to</span>
                        <input
                          type="number"
                          id="prefAgeMax"
                          min="18"
                          placeholder="Max"
                          className={`input w-full ${errors.prefAgeMax ? 'border-red-300 focus:ring-red-500 focus:border-red-500' : ''}`}
                          {...register('prefAgeMax', { 
                            required: 'Maximum age is required',
                            min: {
                              value: 18,
                              message: 'Maximum age must be at least 18'
                            }
                          })}
                        />
                      </div>
                      {(errors.prefAgeMin || errors.prefAgeMax) && (
                        <p className="mt-1 text-sm text-red-600">
                          {errors.prefAgeMin?.message || errors.prefAgeMax?.message}
                        </p>
                      )}
                    </div>
                    
                    <div>
                      <label htmlFor="prefLocation" className="block text-sm font-medium text-gray-700 mb-1">
                        Preferred Location
                      </label>
                      <input
                        type="text"
                        id="prefLocation"
                        placeholder="e.g. Any, Specific City, Country"
                        className="input"
                        {...register('prefLocation')}
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="prefReligiousLevel" className="block text-sm font-medium text-gray-700 mb-1">
                        Preferred Religious Level
                      </label>
                      <select
                        id="prefReligiousLevel"
                        className="input"
                        {...register('prefReligiousLevel')}
                      >
                        <option value="">Select preference</option>
                        <option value="very practicing">Very Practicing</option>
                        <option value="practicing">Practicing</option>
                        <option value="moderately practicing">Moderately Practicing</option>
                        <option value="any">Any</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="prefEducation" className="block text-sm font-medium text-gray-700 mb-1">
                        Preferred Education Level
                      </label>
                      <select
                        id="prefEducation"
                        className="input"
                        {...register('prefEducation')}
                      >
                        <option value="">Select preference</option>
                        <option value="high school">High School</option>
                        <option value="bachelor">Bachelor's Degree</option>
                        <option value="master">Master's Degree</option>
                        <option value="doctorate">Doctorate</option>
                        <option value="islamic education">Islamic Education</option>
                        <option value="any">Any</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="prefMaritalStatus" className="block text-sm font-medium text-gray-700 mb-1">
                        Preferred Marital Status
                      </label>
                      <select
                        id="prefMaritalStatus"
                        className="input"
                        {...register('prefMaritalStatus')}
                      >
                        <option value="">Select preference</option>
                        <option value="never married">Never Married</option>
                        <option value="divorced">Divorced</option>
                        <option value="widowed">Widowed</option>
                        <option value="any">Any</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="prefEthnicity" className="block text-sm font-medium text-gray-700 mb-1">
                        Preferred Ethnicity
                      </label>
                      <select
                        id="prefEthnicity"
                        className="input"
                        {...register('prefEthnicity')}
                      >
                        <option value="">Select preference</option>
                        <option value="arab">Arab</option>
                        <option value="south asian">South Asian</option>
                        <option value="african">African</option>
                        <option value="european">European</option>
                        <option value="southeast asian">Southeast Asian</option>
                        <option value="turkish">Turkish</option>
                        <option value="persian">Persian</option>
                        <option value="any">Any</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <label htmlFor="importantQualities" className="block text-sm font-medium text-gray-700 mb-1">
                      Most Important Qualities in a Spouse
                    </label>
                    <textarea
                      id="importantQualities"
                      rows="4"
                      placeholder="Describe the qualities you value most in a potential spouse"
                      className="input"
                      {...register('importantQualities')}
                    ></textarea>
                  </div>
                </div>
              )}
              
              {/* Step 4: About You */}
              {currentStep === 4 && (
                <div className="p-6">
                  <h2 className="text-xl font-semibold mb-6">About You</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <label htmlFor="bio" className="block text-sm font-medium text-gray-700 mb-1">
                        Bio
                      </label>
                      <textarea
                        id="bio"
                        rows="4"
                        placeholder="Tell potential matches about yourself"
                        className={`input ${errors.bio ? 'border-red-300 focus:ring-red-500 focus:border-red-500' : ''}`}
                        {...register('bio', { 
                          required: 'Bio is required',
                          minLength: {
                            value: 50,
                            message: 'Bio should be at least 50 characters'
                          },
                          maxLength: {
                            value: 500,
                            message: 'Bio should not exceed 500 characters'
                          }
                        })}
                      ></textarea>
                      {errors.bio && (
                        <p className="mt-1 text-sm text-red-600">{errors.bio.message}</p>
                      )}
                      <p className="mt-1 text-xs text-gray-500">
                        {watch('bio')?.length || 0}/500 characters
                      </p>
                    </div>
                    
                    <div>
                      <label htmlFor="hobbies" className="block text-sm font-medium text-gray-700 mb-1">
                        Hobbies & Interests
                      </label>
                      <textarea
                        id="hobbies"
                        rows="3"
                        placeholder="What do you enjoy doing in your free time?"
                        className="input"
                        {...register('hobbies')}
                      ></textarea>
                    </div>
                    
                    <div>
                      <label htmlFor="familyValues" className="block text-sm font-medium text-gray-700 mb-1">
                        Family Values
                      </label>
                      <textarea
                        id="familyValues"
                        rows="3"
                        placeholder="Describe your family values and expectations"
                        className={`input ${errors.familyValues ? 'border-red-300 focus:ring-red-500 focus:border-red-500' : ''}`}
                        {...register('familyValues', { required: 'Family values are required' })}
                      ></textarea>
                      {errors.familyValues && (
                        <p className="mt-1 text-sm text-red-600">{errors.familyValues.message}</p>
                      )}
                    </div>
                    
                    <div>
                      <label htmlFor="futureGoals" className="block text-sm font-medium text-gray-700 mb-1">
                        Future Goals
                      </label>
                      <textarea
                        id="futureGoals"
                        rows="3"
                        placeholder="What are your goals and aspirations for the future?"
                        className="input"
                        {...register('futureGoals')}
                      ></textarea>
                    </div>
                  </div>
                </div>
              )}
              
              {/* Navigation Buttons */}
              <div className="px-6 py-4 bg-gray-50 flex justify-between">
                {currentStep > 1 ? (
                  <button
                    type="button"
                    onClick={prevStep}
                    className="btn btn-secondary"
                  >
                    Previous
                  </button>
                ) : (
                  <div></div>
                )}
                
                {currentStep < totalSteps ? (
                  <button
                    type="button"
                    onClick={nextStep}
                    className="btn btn-primary"
                  >
                    Next
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={loading}
                    className="btn btn-primary"
                  >
                    {loading ? (
                      <span className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Creating Profile...
                      </span>
                    ) : (
                      'Create Profile'
                    )}
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
