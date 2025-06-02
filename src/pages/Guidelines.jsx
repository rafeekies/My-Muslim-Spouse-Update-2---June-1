import { Link } from 'react-router-dom'
import { FaQuran, FaUserFriends, FaComments, FaHandshake, FaRing } from 'react-icons/fa'

export default function Guidelines() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary-700 text-white py-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">Islamic Guidelines for Marriage</h1>
            <p className="text-xl mb-0">
              Understanding the Islamic approach to finding a spouse and building a successful marriage.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Marriage in Islam</h2>
            
            <p className="text-lg text-gray-700 mb-6">
              Marriage (Nikah) in Islam is a sacred covenant and an important Sunnah of the Prophet Muhammad (peace be upon him). It is considered half of one's faith and a means to complete our deen.
            </p>
            
            <div className="bg-primary-50 p-6 rounded-lg border-l-4 border-primary-500 mb-6">
              <p className="text-lg font-arabic text-right mb-2">
                النِّكَاحُ مِنْ سُنَّتِي فَمَنْ لَمْ يَعْمَلْ بِسُنَّتِي فَلَيْسَ مِنِّي
              </p>
              <p className="text-gray-700 italic">
                "Marriage is part of my Sunnah, and whoever does not follow my Sunnah is not from me." [Ibn Majah]
              </p>
            </div>
            
            <p className="text-lg text-gray-700 mb-6">
              At My Muslim Spouse, we are committed to facilitating marriages that adhere to Islamic principles. Our platform is designed to help Muslims find compatible spouses while maintaining Islamic etiquette throughout the process.
            </p>
          </div>
        </div>
      </section>

      {/* Key Guidelines */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12">Key Islamic Guidelines</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-start mb-4">
                <div className="flex-shrink-0 mr-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary-100 text-primary-600">
                    <FaUserFriends size={20} />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Appropriate Interaction</h3>
                  <p className="text-gray-600">
                    Islam encourages interactions between potential spouses to be purposeful, respectful, and preferably in the presence of a mahram (guardian). Our platform facilitates initial communication while maintaining Islamic boundaries.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-start mb-4">
                <div className="flex-shrink-0 mr-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary-100 text-primary-600">
                    <FaHandshake size={20} />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Family Involvement</h3>
                  <p className="text-gray-600">
                    Islam emphasizes the role of family in the marriage process. We encourage users to involve their families early in the process and facilitate family communication when appropriate.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-start mb-4">
                <div className="flex-shrink-0 mr-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary-100 text-primary-600">
                    <FaQuran size={20} />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Religious Compatibility</h3>
                  <p className="text-gray-600">
                    The Prophet (PBUH) advised that a spouse should be chosen primarily for their religious commitment. Our platform allows users to specify their religious practices and values to find compatible matches.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-start mb-4">
                <div className="flex-shrink-0 mr-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary-100 text-primary-600">
                    <FaComments size={20} />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Honest Communication</h3>
                  <p className="text-gray-600">
                    Islam encourages honesty and transparency in all matters, especially marriage. We encourage users to be truthful in their profiles and communications with potential spouses.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Process */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">The Islamic Marriage Process</h2>
            
            <div className="space-y-8">
              <div className="flex">
                <div className="flex-shrink-0 mr-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary-600 text-white font-bold">
                    1
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Intention (Niyyah)</h3>
                  <p className="text-gray-700">
                    Begin your search with the right intention - seeking marriage to complete half of your faith and to please Allah. Make dua for Allah's guidance in finding the right spouse.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0 mr-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary-600 text-white font-bold">
                    2
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Search & Identification</h3>
                  <p className="text-gray-700">
                    Use our platform to search for potential spouses based on compatibility in religion, character, and other preferences. Involve family members in this process when possible.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0 mr-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary-600 text-white font-bold">
                    3
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Initial Communication</h3>
                  <p className="text-gray-700">
                    When you find a potential match, initial communication should be purposeful and respectful. Discuss important matters such as religious views, life goals, and expectations for marriage.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0 mr-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary-600 text-white font-bold">
                    4
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Family Involvement</h3>
                  <p className="text-gray-700">
                    Introduce the potential spouse to your family. In Islam, the involvement of the wali (guardian) is important, especially for women. Arrange meetings between families to discuss the potential marriage.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0 mr-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary-600 text-white font-bold">
                    5
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Istikhara (Prayer for Guidance)</h3>
                  <p className="text-gray-700">
                    Perform Istikhara to seek Allah's guidance in making the right decision. This prayer helps in seeking divine guidance when you are uncertain about the potential match.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0 mr-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary-600 text-white font-bold">
                    6
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Nikah (Marriage Contract)</h3>
                  <p className="text-gray-700">
                    If both parties agree to proceed, arrange for the Nikah ceremony. This involves the offer and acceptance (Ijab and Qabul), witnesses, and the payment of Mahr (dowry) as agreed upon.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dos and Don'ts */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12">Islamic Etiquette: Dos and Don'ts</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div>
              <h3 className="text-xl font-semibold mb-6 text-primary-700 flex items-center">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary-100 text-primary-600 mr-2 text-sm">✓</span>
                Do's
              </h3>
              
              <ul className="space-y-4">
                <li className="flex">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-green-100 text-green-600 mr-2 text-xs">✓</span>
                  <span className="text-gray-700">Involve family members in the process</span>
                </li>
                <li className="flex">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-green-100 text-green-600 mr-2 text-xs">✓</span>
                  <span className="text-gray-700">Be honest about yourself and your expectations</span>
                </li>
                <li className="flex">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-green-100 text-green-600 mr-2 text-xs">✓</span>
                  <span className="text-gray-700">Prioritize religious compatibility</span>
                </li>
                <li className="flex">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-green-100 text-green-600 mr-2 text-xs">✓</span>
                  <span className="text-gray-700">Maintain modesty in interactions</span>
                </li>
                <li className="flex">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-green-100 text-green-600 mr-2 text-xs">✓</span>
                  <span className="text-gray-700">Ask important questions about religious practices, life goals, and expectations</span>
                </li>
                <li className="flex">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-green-100 text-green-600 mr-2 text-xs">✓</span>
                  <span className="text-gray-700">Perform Istikhara before making a decision</span>
                </li>
                <li className="flex">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-green-100 text-green-600 mr-2 text-xs">✓</span>
                  <span className="text-gray-700">Respect the other person's privacy and boundaries</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-6 text-red-700 flex items-center">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-red-100 text-red-600 mr-2 text-sm">✗</span>
                Don'ts
              </h3>
              
              <ul className="space-y-4">
                <li className="flex">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-red-100 text-red-600 mr-2 text-xs">✗</span>
                  <span className="text-gray-700">Engage in unnecessary private conversations without purpose</span>
                </li>
                <li className="flex">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-red-100 text-red-600 mr-2 text-xs">✗</span>
                  <span className="text-gray-700">Meet in private without a mahram present</span>
                </li>
                <li className="flex">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-red-100 text-red-600 mr-2 text-xs">✗</span>
                  <span className="text-gray-700">Share inappropriate content or engage in flirtatious behavior</span>
                </li>
                <li className="flex">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-red-100 text-red-600 mr-2 text-xs">✗</span>
                  <span className="text-gray-700">Misrepresent yourself or lie about important matters</span>
                </li>
                <li className="flex">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-red-100 text-red-600 mr-2 text-xs">✗</span>
                  <span className="text-gray-700">Rush into decisions without proper consideration or istikhara</span>
                </li>
                <li className="flex">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-red-100 text-red-600 mr-2 text-xs">✗</span>
                  <span className="text-gray-700">Ignore red flags or compromise on important religious values</span>
                </li>
                <li className="flex">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-red-100 text-red-600 mr-2 text-xs">✗</span>
                  <span className="text-gray-700">Engage with multiple prospects simultaneously without transparency</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-700 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-6">Begin Your Journey to a Blessed Marriage</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Start your search for a spouse with the right intention and adherence to Islamic principles.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/register" className="btn bg-white text-primary-700 hover:bg-gray-100 font-semibold text-lg px-8 py-3">
              Register Now
            </Link>
            <Link to="/about" className="btn bg-transparent border-2 border-white text-white hover:bg-white/10 font-semibold text-lg px-8 py-3">
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
