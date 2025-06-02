import React, { useState } from 'react'
import { FaSearch, FaBookOpen, FaHeart, FaShareAlt, FaBookmark } from 'react-icons/fa'

const quranChapters = [
  { id: 1, name: "Al-Fatihah", arabicName: "الفاتحة", meaning: "The Opening", verses: 7, relevance: "Foundation of prayer, seeking guidance" },
  { id: 2, name: "Al-Baqarah", arabicName: "البقرة", meaning: "The Cow", verses: 286, relevance: "Family laws, marriage, divorce" },
  { id: 4, name: "An-Nisa", arabicName: "النساء", meaning: "The Women", verses: 176, relevance: "Women's rights, marriage, inheritance" },
  { id: 24, name: "An-Nur", arabicName: "النور", meaning: "The Light", verses: 64, relevance: "Modesty, marriage, family ethics" },
  { id: 30, name: "Ar-Rum", arabicName: "الروم", meaning: "The Romans", verses: 60, relevance: "Signs of Allah, marriage as comfort" },
  { id: 33, name: "Al-Ahzab", arabicName: "الأحزاب", meaning: "The Confederates", verses: 73, relevance: "Prophet's marriages, family laws" },
  { id: 65, name: "At-Talaq", arabicName: "الطلاق", meaning: "The Divorce", verses: 12, relevance: "Divorce regulations, family rights" },
  { id: 66, name: "At-Tahrim", arabicName: "التحريم", meaning: "The Prohibition", verses: 12, relevance: "Prophet's family life, marital harmony" }
]

const marriageVerses = [
  {
    id: 1,
    chapter: 30,
    verse: 21,
    arabicText: "وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً ۚ إِنَّ فِي ذَٰلِكَ لَآيَاتٍ لِّقَوْمٍ يَتَفَكَّرُونَ",
    translation: "And of His signs is that He created for you from yourselves mates that you may find tranquility in them; and He placed between you affection and mercy. Indeed in that are signs for a people who give thought.",
    explanation: "This verse highlights the divine purpose of marriage: tranquility, affection, and mercy between spouses. It emphasizes that marriage is a sign of Allah's mercy and wisdom, designed to bring emotional and spiritual comfort."
  },
  {
    id: 2,
    chapter: 2,
    verse: 187,
    arabicText: "هُنَّ لِبَاسٌ لَّكُمْ وَأَنتُمْ لِبَاسٌ لَّهُنَّ",
    translation: "They are clothing for you and you are clothing for them.",
    explanation: "This beautiful metaphor describes spouses as garments for each other, suggesting how marriage provides protection, comfort, beauty, and concealment of faults. Just as clothing protects from external elements, spouses should protect each other's honor and privacy."
  },
  {
    id: 3,
    chapter: 4,
    verse: 19,
    arabicText: "وَعَاشِرُوهُنَّ بِالْمَعْرُوفِ",
    translation: "And live with them in kindness.",
    explanation: "This command instructs husbands to treat their wives with kindness, respect, and fairness. It establishes the Islamic principle that the marital relationship should be based on good treatment and honorable conduct."
  },
  {
    id: 4,
    chapter: 2,
    verse: 228,
    arabicText: "وَلَهُنَّ مِثْلُ الَّذِي عَلَيْهِنَّ بِالْمَعْرُوفِ",
    translation: "And due to the wives is similar to what is expected of them, according to what is reasonable.",
    explanation: "This verse establishes the principle of reciprocal rights and responsibilities between spouses. It affirms that marriage in Islam is based on mutual respect, with both parties having rights over each other."
  },
  {
    id: 5,
    chapter: 25,
    verse: 74,
    arabicText: "رَبَّنَا هَبْ لَنَا مِنْ أَزْوَاجِنَا وَذُرِّيَّاتِنَا قُرَّةَ أَعْيُنٍ وَاجْعَلْنَا لِلْمُتَّقِينَ إِمَامًا",
    translation: "Our Lord, grant us from among our spouses and offspring comfort to our eyes and make us an example for the righteous.",
    explanation: "This verse teaches believers to pray for righteous spouses and children who will be a source of joy and comfort. It emphasizes the importance of family as a source of happiness and spiritual fulfillment."
  }
]

const QuranReferences = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [activeTab, setActiveTab] = useState('chapters')
  const [selectedVerse, setSelectedVerse] = useState(null)
  
  const filteredChapters = quranChapters.filter(chapter => 
    chapter.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    chapter.meaning.toLowerCase().includes(searchTerm.toLowerCase()) ||
    chapter.relevance.toLowerCase().includes(searchTerm.toLowerCase())
  )
  
  const filteredVerses = marriageVerses.filter(verse => 
    verse.translation.toLowerCase().includes(searchTerm.toLowerCase()) ||
    verse.explanation.toLowerCase().includes(searchTerm.toLowerCase())
  )
  
  const handleVerseSelect = (verse) => {
    setSelectedVerse(verse)
  }
  
  const handleCloseVerseDetail = () => {
    setSelectedVerse(null)
  }
  
  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="container-custom">
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
          <div className="p-6 border-b border-gray-200">
            <h1 className="text-2xl font-bold text-gray-800">Quranic References on Marriage</h1>
            <p className="text-gray-600">Explore Quranic guidance on marriage, family, and relationships</p>
          </div>
          
          <div className="p-6">
            <div className="relative mb-6">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaSearch className="text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                placeholder="Search chapters, verses, or topics..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="border-b border-gray-200 mb-6">
              <nav className="-mb-px flex space-x-8">
                <button
                  onClick={() => setActiveTab('chapters')}
                  className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
                    activeTab === 'chapters'
                      ? 'border-primary-500 text-primary-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <FaBookOpen className="inline-block mr-2" />
                  Relevant Chapters
                </button>
                <button
                  onClick={() => setActiveTab('verses')}
                  className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
                    activeTab === 'verses'
                      ? 'border-primary-500 text-primary-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <FaBookmark className="inline-block mr-2" />
                  Key Verses
                </button>
              </nav>
            </div>
            
            {activeTab === 'chapters' && (
              <div className="overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {filteredChapters.length > 0 ? (
                    filteredChapters.map(chapter => (
                      <div key={chapter.id} className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="text-lg font-medium text-gray-900">
                              {chapter.name} <span className="text-gray-500">({chapter.meaning})</span>
                            </h3>
                            <p className="text-sm text-gray-500 mt-1">Chapter {chapter.id} • {chapter.verses} verses</p>
                          </div>
                          <div className="text-xl font-arabic text-primary-600">{chapter.arabicName}</div>
                        </div>
                        <p className="mt-2 text-sm text-gray-600">
                          <span className="font-medium">Relevance to Marriage:</span> {chapter.relevance}
                        </p>
                        <div className="mt-4 flex justify-end space-x-2">
                          <button className="inline-flex items-center px-3 py-1 border border-transparent text-sm leading-4 font-medium rounded-md text-primary-700 bg-primary-100 hover:bg-primary-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">
                            <FaBookOpen className="mr-1" /> Read
                          </button>
                          <button className="inline-flex items-center px-3 py-1 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-700 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                            <FaBookmark className="mr-1" /> Save
                          </button>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="col-span-2 text-center py-8">
                      <p className="text-gray-500">No chapters found matching your search.</p>
                    </div>
                  )}
                </div>
              </div>
            )}
            
            {activeTab === 'verses' && (
              <div className="overflow-hidden">
                {selectedVerse ? (
                  <div className="bg-gray-50 rounded-lg p-6 relative">
                    <button 
                      onClick={handleCloseVerseDetail}
                      className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                    
                    <div className="mb-6 text-center">
                      <h3 className="text-xl font-medium text-gray-900">
                        Surah {quranChapters.find(c => c.id === selectedVerse.chapter)?.name || `Chapter ${selectedVerse.chapter}`}
                      </h3>
                      <p className="text-sm text-gray-500">Verse {selectedVerse.verse}</p>
                    </div>
                    
                    <div className="mb-6 text-right">
                      <p className="text-2xl font-arabic leading-loose text-primary-800">{selectedVerse.arabicText}</p>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="text-sm font-medium text-gray-500 mb-2">TRANSLATION</h4>
                      <p className="text-lg text-gray-800 italic">{selectedVerse.translation}</p>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="text-sm font-medium text-gray-500 mb-2">EXPLANATION</h4>
                      <p className="text-gray-700">{selectedVerse.explanation}</p>
                    </div>
                    
                    <div className="flex justify-between items-center pt-4 border-t border-gray-200">
                      <div className="flex space-x-4">
                        <button className="flex items-center text-gray-500 hover:text-primary-600">
                          <FaHeart className="mr-1" />
                          <span className="text-sm">Save</span>
                        </button>
                        <button className="flex items-center text-gray-500 hover:text-primary-600">
                          <FaShareAlt className="mr-1" />
                          <span className="text-sm">Share</span>
                        </button>
                      </div>
                      <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">
                        Read Full Chapter
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {filteredVerses.length > 0 ? (
                      filteredVerses.map(verse => (
                        <div 
                          key={verse.id} 
                          className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition cursor-pointer"
                          onClick={() => handleVerseSelect(verse)}
                        >
                          <div className="flex justify-between items-start">
                            <div>
                              <h3 className="text-lg font-medium text-gray-900">
                                Surah {quranChapters.find(c => c.id === verse.chapter)?.name || `Chapter ${verse.chapter}`}: {verse.verse}
                              </h3>
                              <p className="text-sm text-gray-500 mt-1">On marriage and family relations</p>
                            </div>
                          </div>
                          <p className="mt-2 text-gray-600 italic">"{verse.translation.length > 120 ? verse.translation.substring(0, 120) + '...' : verse.translation}"</p>
                          <div className="mt-4 flex justify-end">
                            <button className="inline-flex items-center px-3 py-1 border border-transparent text-sm leading-4 font-medium rounded-md text-primary-700 bg-primary-100 hover:bg-primary-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">
                              View Details
                            </button>
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="text-center py-8">
                        <p className="text-gray-500">No verses found matching your search.</p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-xl font-bold text-gray-800">Understanding Quranic Guidance</h2>
          </div>
          
          <div className="p-6">
            <div className="prose max-w-none">
              <p>
                The Holy Quran provides comprehensive guidance on marriage, family relationships, and spousal rights. These divine instructions form the foundation of Islamic family law and ethics.
              </p>
              
              <h3>Key Themes in Quranic Guidance on Marriage</h3>
              
              <ul>
                <li>
                  <strong>Marriage as a Divine Sign:</strong> The Quran describes the marital relationship as one of Allah's signs, designed to bring tranquility, love, and mercy between spouses.
                </li>
                <li>
                  <strong>Mutual Rights and Responsibilities:</strong> Islam establishes reciprocal rights and duties between husbands and wives, emphasizing justice and fairness.
                </li>
                <li>
                  <strong>Kind Treatment:</strong> The Quran repeatedly emphasizes treating spouses with kindness, respect, and compassion.
                </li>
                <li>
                  <strong>Family as Foundation:</strong> The family unit is presented as the foundation of society, with marriage being its cornerstone.
                </li>
                <li>
                  <strong>Conflict Resolution:</strong> The Quran provides guidance on resolving marital disputes through communication, patience, and reconciliation.
                </li>
              </ul>
              
              <p>
                When studying Quranic verses about marriage, it's important to understand them in their proper context and in light of the Prophet Muhammad's (peace be upon him) example and teachings. The Quran's guidance on marriage is designed to establish healthy, loving, and spiritually fulfilling relationships that benefit both individuals and society.
              </p>
              
              <div className="bg-primary-50 p-4 rounded-lg border border-primary-100 mt-6">
                <h4 className="text-primary-800 font-medium mb-2">Seeking Knowledge</h4>
                <p className="text-primary-700 text-sm">
                  For deeper understanding of Quranic guidance on marriage, consider consulting with knowledgeable scholars who can provide context and explanation of these verses in light of Islamic tradition and jurisprudence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default QuranReferences
