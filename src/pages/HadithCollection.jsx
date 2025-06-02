import React, { useState } from 'react'
import { FaSearch, FaBookOpen, FaQuoteRight, FaFilter } from 'react-icons/fa'

const HadithCollection = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedCollection, setSelectedCollection] = useState('all')
  
  // Sample hadith data
  const hadiths = [
    {
      id: 1,
      text: "The best among you are those who have the best manners and character.",
      narrator: "Narrated by Abdullah ibn Amr",
      source: "Sahih Bukhari",
      category: "character",
      arabic: "خَيْرُكُمْ أَحْسَنُكُمْ خُلُقًا"
    },
    {
      id: 2,
      text: "Marriage is part of my sunnah, and whoever does not follow my sunnah is not from me.",
      narrator: "Narrated by Anas ibn Malik",
      source: "Ibn Majah",
      category: "marriage",
      arabic: "النِّكَاحُ مِنْ سُنَّتِي فَمَنْ لَمْ يَعْمَلْ بِسُنَّتِي فَلَيْسَ مِنِّي"
    },
    {
      id: 3,
      text: "The most perfect believer in faith is the one whose character is finest and who is kindest to his wife.",
      narrator: "Narrated by Abu Hurairah",
      source: "Tirmidhi",
      category: "marriage",
      arabic: "أَكْمَلُ الْمُؤْمِنِينَ إِيمَانًا أَحْسَنُهُمْ خُلُقًا وَخِيَارُكُمْ خِيَارُكُمْ لِنِسَائِهِمْ"
    },
    {
      id: 4,
      text: "When a man marries, he has fulfilled half of his religion, so let him fear Allah regarding the remaining half.",
      narrator: "Narrated by Anas ibn Malik",
      source: "Bayhaqi",
      category: "marriage",
      arabic: "إِذَا تَزَوَّجَ الْعَبْدُ فَقَدِ اسْتَكْمَلَ نِصْفَ الدِّينِ، فَلْيَتَّقِ اللَّهَ فِي النِّصْفِ الْبَاقِي"
    },
    {
      id: 5,
      text: "A woman is married for four things: her wealth, her family status, her beauty, and her religion. Choose the one who is religious, may your hands be rubbed with dust (i.e., may you prosper).",
      narrator: "Narrated by Abu Hurairah",
      source: "Sahih Bukhari",
      category: "marriage",
      arabic: "تُنْكَحُ الْمَرْأَةُ لِأَرْبَعٍ: لِمَالِهَا، وَلِحَسَبِهَا، وَلِجَمَالِهَا، وَلِدِينِهَا، فَاظْفَرْ بِذَاتِ الدِّينِ تَرِبَتْ يَدَاكَ"
    },
    {
      id: 6,
      text: "The best of you are those who are best to their families, and I am the best of you to my family.",
      narrator: "Narrated by Ibn Abbas",
      source: "Tirmidhi",
      category: "family",
      arabic: "خَيْرُكُمْ خَيْرُكُمْ لِأَهْلِهِ وَأَنَا خَيْرُكُمْ لِأَهْلِي"
    },
    {
      id: 7,
      text: "Paradise lies under the feet of mothers.",
      narrator: "Narrated by Ahmad and Nasai",
      source: "Nasai",
      category: "family",
      arabic: "الْجَنَّةُ تَحْتَ أَقْدَامِ الْأُمَّهَاتِ"
    },
    {
      id: 8,
      text: "Whoever does not show mercy to our young ones and respect to our old ones is not one of us.",
      narrator: "Narrated by Abdullah ibn Amr",
      source: "Tirmidhi",
      category: "family",
      arabic: "لَيْسَ مِنَّا مَنْ لَمْ يَرْحَمْ صَغِيرَنَا وَيُوَقِّرْ كَبِيرَنَا"
    },
    {
      id: 9,
      text: "The strong person is not the one who can wrestle someone else down. The strong person is the one who can control himself when he is angry.",
      narrator: "Narrated by Abu Hurairah",
      source: "Sahih Bukhari",
      category: "character",
      arabic: "لَيْسَ الشَّدِيدُ بِالصُّرَعَةِ، إِنَّمَا الشَّدِيدُ الَّذِي يَمْلِكُ نَفْسَهُ عِنْدَ الْغَضَبِ"
    },
    {
      id: 10,
      text: "The most beloved of deeds to Allah are those that are most consistent, even if they are small.",
      narrator: "Narrated by Aisha",
      source: "Sahih Muslim",
      category: "worship",
      arabic: "أَحَبُّ الْأَعْمَالِ إِلَى اللَّهِ أَدْوَمُهَا وَإِنْ قَلَّ"
    }
  ]
  
  // Categories
  const categories = [
    { value: 'all', label: 'All Categories' },
    { value: 'marriage', label: 'Marriage' },
    { value: 'family', label: 'Family' },
    { value: 'character', label: 'Character' },
    { value: 'worship', label: 'Worship' }
  ]
  
  // Collections
  const collections = [
    { value: 'all', label: 'All Collections' },
    { value: 'Sahih Bukhari', label: 'Sahih Bukhari' },
    { value: 'Sahih Muslim', label: 'Sahih Muslim' },
    { value: 'Tirmidhi', label: 'Tirmidhi' },
    { value: 'Ibn Majah', label: 'Ibn Majah' },
    { value: 'Nasai', label: 'Nasai' },
    { value: 'Bayhaqi', label: 'Bayhaqi' }
  ]
  
  // Filter hadiths based on search term and filters
  const filteredHadiths = hadiths.filter(hadith => {
    const matchesSearch = hadith.text.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          hadith.narrator.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          hadith.arabic.includes(searchTerm);
    
    const matchesCategory = selectedCategory === 'all' || hadith.category === selectedCategory;
    
    const matchesCollection = selectedCollection === 'all' || hadith.source === selectedCollection;
    
    return matchesSearch && matchesCategory && matchesCollection;
  });
  
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary-700 text-white py-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">Hadith Collection</h1>
            <p className="text-xl mb-0">
              Explore the sayings and traditions of Prophet Muhammad (peace be upon him) on marriage, family, and relationships
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-white border-b">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-center md:space-x-4">
              <div className="flex-grow mb-4 md:mb-0">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search hadith by keyword..."
                    className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <FaSearch className="absolute left-3 top-3 text-gray-400" />
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
                <div className="relative">
                  <select
                    className="appearance-none w-full px-4 py-2 pl-10 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500 bg-white"
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                  >
                    {categories.map(category => (
                      <option key={category.value} value={category.value}>
                        {category.label}
                      </option>
                    ))}
                  </select>
                  <FaFilter className="absolute left-3 top-3 text-gray-400" />
                </div>
                
                <div className="relative">
                  <select
                    className="appearance-none w-full px-4 py-2 pl-10 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500 bg-white"
                    value={selectedCollection}
                    onChange={(e) => setSelectedCollection(e.target.value)}
                  >
                    {collections.map(collection => (
                      <option key={collection.value} value={collection.value}>
                        {collection.label}
                      </option>
                    ))}
                  </select>
                  <FaBookOpen className="absolute left-3 top-3 text-gray-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hadith List Section */}
      <section className="py-12 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">
              {filteredHadiths.length} {filteredHadiths.length === 1 ? 'Hadith' : 'Hadiths'} Found
            </h2>
            
            {filteredHadiths.length > 0 ? (
              <div className="space-y-6">
                {filteredHadiths.map(hadith => (
                  <div key={hadith.id} className="bg-white p-6 rounded-lg shadow-sm">
                    <div className="flex items-start mb-4">
                      <div className="flex-shrink-0 mr-4">
                        <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary-100 text-primary-600">
                          <FaQuoteRight size={16} />
                        </div>
                      </div>
                      <div>
                        <p className="text-lg text-gray-800 mb-3">{hadith.text}</p>
                        <p className="text-lg font-arabic text-right mb-3 text-gray-700">{hadith.arabic}</p>
                        <div className="flex flex-wrap items-center text-sm text-gray-600">
                          <span className="mr-4">{hadith.narrator}</span>
                          <span className="font-medium text-primary-600">{hadith.source}</span>
                          <span className="ml-auto bg-primary-50 text-primary-700 px-2 py-1 rounded text-xs font-medium">
                            {hadith.category.charAt(0).toUpperCase() + hadith.category.slice(1)}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-white p-8 rounded-lg shadow-sm text-center">
                <FaSearch className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">No Hadiths Found</h3>
                <p className="text-gray-600 mb-4">
                  Try adjusting your search or filters to find what you're looking for.
                </p>
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('all');
                    setSelectedCollection('all');
                  }}
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700"
                >
                  Reset Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Information Section */}
      <section className="py-12 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">About Hadith Collections</h2>
            
            <p className="text-lg text-gray-700 mb-6">
              Hadiths are the recorded sayings, actions, and silent approvals of Prophet Muhammad (peace be upon him). They serve as the second source of Islamic law and guidance after the Quran. The most authentic collections of hadith include:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-50 p-5 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Sahih Bukhari</h3>
                <p className="text-gray-600">
                  Compiled by Imam Muhammad al-Bukhari, this collection is considered the most authentic book after the Quran. It contains 7,563 hadiths.
                </p>
              </div>
              
              <div className="bg-gray-50 p-5 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Sahih Muslim</h3>
                <p className="text-gray-600">
                  Compiled by Imam Muslim ibn al-Hajjaj, this is the second most authentic hadith collection, containing approximately 7,500 hadiths.
                </p>
              </div>
              
              <div className="bg-gray-50 p-5 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Sunan Abu Dawood</h3>
                <p className="text-gray-600">
                  Compiled by Abu Dawood Sulaiman ibn al-Ash'ath, this collection focuses on legal matters and contains 5,274 hadiths.
                </p>
              </div>
              
              <div className="bg-gray-50 p-5 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Jami at-Tirmidhi</h3>
                <p className="text-gray-600">
                  Compiled by Abu Isa Muhammad at-Tirmidhi, this collection is known for its categorization of hadiths and contains 3,956 hadiths.
                </p>
              </div>
            </div>
            
            <p className="text-lg text-gray-700">
              The hadiths presented in this collection focus specifically on marriage, family relationships, and character development. They provide valuable guidance for Muslims seeking to establish and maintain healthy family relationships according to Islamic teachings.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HadithCollection
