import React from 'react'
import { Link } from 'react-router-dom'
import { FaRing, FaHandshake, FaBalanceScale, FaHeart, FaQuran, FaUserFriends } from 'react-icons/fa'

const IslamicMarriage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary-700 text-white py-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">Islamic Marriage</h1>
            <p className="text-xl mb-0">
              Understanding the sacred bond of marriage in Islam and its importance
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Marriage in Islam: A Sacred Covenant</h2>
            
            <p className="text-lg text-gray-700 mb-6">
              In Islam, marriage (nikah) is not merely a civil contract but a sacred covenant between a man and a woman. It is considered an act of worship ('ibadah) and half of one's faith. The Prophet Muhammad (peace be upon him) said, "When a servant marries, he has completed half of his religion."
            </p>
            
            <div className="bg-primary-50 p-6 rounded-lg border-l-4 border-primary-500 mb-6">
              <p className="text-lg font-arabic text-right mb-2">
                وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً ۚ إِنَّ فِي ذَٰلِكَ لَآيَاتٍ لِّقَوْمٍ يَتَفَكَّرُونَ
              </p>
              <p className="text-gray-700 italic">
                "And of His signs is that He created for you from yourselves mates that you may find tranquility in them; and He placed between you affection and mercy. Indeed in that are signs for a people who give thought." [Quran 30:21]
              </p>
            </div>
            
            <p className="text-lg text-gray-700 mb-6">
              This verse highlights the three foundational elements of an Islamic marriage:
            </p>
            
            <ul className="space-y-4 mb-6">
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary-100 text-primary-600 mr-2 text-xs">1</span>
                <div>
                  <span className="font-semibold">Tranquility (Sakinah):</span>
                  <span className="text-gray-700"> The peace and comfort spouses find in each other's company.</span>
                </div>
              </li>
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary-100 text-primary-600 mr-2 text-xs">2</span>
                <div>
                  <span className="font-semibold">Affection (Mawaddah):</span>
                  <span className="text-gray-700"> The love and care that grows between spouses.</span>
                </div>
              </li>
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary-100 text-primary-600 mr-2 text-xs">3</span>
                <div>
                  <span className="font-semibold">Mercy (Rahmah):</span>
                  <span className="text-gray-700"> The compassion and forgiveness that sustains the relationship through challenges.</span>
                </div>
              </li>
            </ul>
            
            <p className="text-lg text-gray-700">
              Marriage in Islam serves multiple purposes: it fulfills the natural human desire for companionship, provides a legitimate outlet for physical needs, establishes a stable foundation for raising children, and contributes to the growth and expansion of the Muslim community.
            </p>
          </div>
        </div>
      </section>

      {/* Key Elements */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12">Essential Elements of Islamic Marriage</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-start mb-4">
                <div className="flex-shrink-0 mr-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary-100 text-primary-600">
                    <FaHandshake size={20} />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Proposal and Acceptance (Ijab and Qabul)</h3>
                  <p className="text-gray-600">
                    A valid Islamic marriage requires a clear proposal (ijab) from one party and acceptance (qabul) from the other. This exchange must take place in the same sitting and be witnessed by at least two Muslim witnesses. This verbal agreement constitutes the core of the marriage contract.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-start mb-4">
                <div className="flex-shrink-0 mr-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary-100 text-primary-600">
                    <FaRing size={20} />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Mahr (Dowry)</h3>
                  <p className="text-gray-600">
                    Mahr is a mandatory gift from the husband to the wife, which becomes her exclusive property. It symbolizes the husband's responsibility and commitment to provide for his wife. The amount should be agreed upon before marriage and can be paid immediately or deferred, as agreed by both parties.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-start mb-4">
                <div className="flex-shrink-0 mr-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary-100 text-primary-600">
                    <FaUserFriends size={20} />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Wali (Guardian)</h3>
                  <p className="text-gray-600">
                    In many Islamic traditions, the presence and consent of the bride's wali (guardian, typically her father) is necessary for the marriage to be valid. The wali's role is to ensure the bride's interests are protected and to give his blessing to the union.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-start mb-4">
                <div className="flex-shrink-0 mr-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary-100 text-primary-600">
                    <FaBalanceScale size={20} />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Mutual Consent</h3>
                  <p className="text-gray-600">
                    Both the bride and groom must enter the marriage willingly and with full consent. Forced marriages are prohibited in Islam. The Prophet Muhammad (peace be upon him) invalidated marriages where the bride was coerced, emphasizing the importance of free choice.
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
                  <h3 className="text-xl font-semibold mb-2">Selection of a Spouse</h3>
                  <p className="text-gray-700">
                    Islam encourages selecting a spouse based on religious commitment and character. The Prophet Muhammad (peace be upon him) said, "A woman is married for four reasons: for her wealth, for her lineage, for her beauty, and for her religion. Choose the one who is religious, may your hands be rubbed with dust (i.e., may you prosper)."
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
                  <h3 className="text-xl font-semibold mb-2">Khitbah (Engagement)</h3>
                  <p className="text-gray-700">
                    Once a suitable match is identified, the man or his family approaches the woman's family with a proposal. This period allows both parties to learn about each other within Islamic boundaries. While not legally binding, it is a commitment to proceed toward marriage.
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
                  <h3 className="text-xl font-semibold mb-2">Istikhara (Prayer for Guidance)</h3>
                  <p className="text-gray-700">
                    Muslims are encouraged to perform the prayer of istikhara, seeking Allah's guidance in making the right decision about marriage. This prayer helps in seeking divine assistance when one is uncertain about proceeding with a potential match.
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
                  <h3 className="text-xl font-semibold mb-2">Nikah (Marriage Ceremony)</h3>
                  <p className="text-gray-700">
                    The nikah ceremony involves the exchange of vows (ijab and qabul) in the presence of witnesses. It typically includes a sermon (khutbah) emphasizing the importance of marriage and the couple's responsibilities. The mahr is specified, and the marriage contract may be signed.
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
                  <h3 className="text-xl font-semibold mb-2">Walimah (Wedding Feast)</h3>
                  <p className="text-gray-700">
                    After the nikah, it is sunnah to host a walimah (wedding feast) to announce the marriage publicly and share the joy with family and friends. The Prophet Muhammad (peace be upon him) encouraged hosting a walimah, even if it is simple.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rights and Responsibilities */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12">Rights and Responsibilities in Marriage</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div>
              <h3 className="text-xl font-semibold mb-6 text-primary-700 flex items-center">
                <FaBalanceScale className="mr-2" />
                Husband's Responsibilities
              </h3>
              
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary-100 text-primary-600 mr-2 text-xs">1</span>
                  <div>
                    <span className="font-semibold">Financial Provision:</span>
                    <span className="text-gray-700"> Providing food, clothing, shelter, and other necessities according to his means.</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary-100 text-primary-600 mr-2 text-xs">2</span>
                  <div>
                    <span className="font-semibold">Kind Treatment:</span>
                    <span className="text-gray-700"> Treating his wife with respect, kindness, and compassion.</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary-100 text-primary-600 mr-2 text-xs">3</span>
                  <div>
                    <span className="font-semibold">Protection:</span>
                    <span className="text-gray-700"> Ensuring the physical and emotional safety of his wife and family.</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary-100 text-primary-600 mr-2 text-xs">4</span>
                  <div>
                    <span className="font-semibold">Religious Guidance:</span>
                    <span className="text-gray-700"> Leading the family in religious matters and encouraging Islamic practices.</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary-100 text-primary-600 mr-2 text-xs">5</span>
                  <div>
                    <span className="font-semibold">Justice:</span>
                    <span className="text-gray-700"> Being fair and equitable, especially in polygamous marriages.</span>
                  </div>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-6 text-primary-700 flex items-center">
                <FaBalanceScale className="mr-2" />
                Wife's Responsibilities
              </h3>
              
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary-100 text-primary-600 mr-2 text-xs">1</span>
                  <div>
                    <span className="font-semibold">Respect and Cooperation:</span>
                    <span className="text-gray-700"> Respecting her husband and cooperating with him in family matters.</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary-100 text-primary-600 mr-2 text-xs">2</span>
                  <div>
                    <span className="font-semibold">Home Management:</span>
                    <span className="text-gray-700"> Managing the household affairs, though this is considered a voluntary contribution rather than an obligation.</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary-100 text-primary-600 mr-2 text-xs">3</span>
                  <div>
                    <span className="font-semibold">Child Rearing:</span>
                    <span className="text-gray-700"> Nurturing and raising children with Islamic values, in cooperation with her husband.</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary-100 text-primary-600 mr-2 text-xs">4</span>
                  <div>
                    <span className="font-semibold">Guarding Privacy:</span>
                    <span className="text-gray-700"> Protecting the privacy and secrets of the marriage.</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary-100 text-primary-600 mr-2 text-xs">5</span>
                  <div>
                    <span className="font-semibold">Faithfulness:</span>
                    <span className="text-gray-700"> Being loyal and faithful to her husband.</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="max-w-3xl mx-auto mt-12">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4 text-primary-700 flex items-center">
                <FaHeart className="mr-2" />
                Mutual Rights and Responsibilities
              </h3>
              
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary-100 text-primary-600 mr-2 text-xs">1</span>
                  <div>
                    <span className="font-semibold">Love and Mercy:</span>
                    <span className="text-gray-700"> Showing affection, compassion, and understanding toward each other.</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary-100 text-primary-600 mr-2 text-xs">2</span>
                  <div>
                    <span className="font-semibold">Consultation:</span>
                    <span className="text-gray-700"> Making important decisions together through mutual consultation (shura).</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary-100 text-primary-600 mr-2 text-xs">3</span>
                  <div>
                    <span className="font-semibold">Intimacy:</span>
                    <span className="text-gray-700"> Fulfilling each other's physical needs within the marriage.</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary-100 text-primary-600 mr-2 text-xs">4</span>
                  <div>
                    <span className="font-semibold">Trust:</span>
                    <span className="text-gray-700"> Building and maintaining trust through honesty and reliability.</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary-100 text-primary-600 mr-2 text-xs">5</span>
                  <div>
                    <span className="font-semibold">Religious Growth:</span>
                    <span className="text-gray-700"> Supporting each other's spiritual development and practice of Islam.</span>
                  </div>
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
            Apply Islamic principles to build a strong, loving marriage that pleases Allah and brings tranquility to your life.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/register" className="btn bg-white text-primary-700 hover:bg-gray-100 font-semibold text-lg px-8 py-3">
              Find Your Muslim Spouse
            </Link>
            <Link to="/guidelines" className="btn bg-transparent border-2 border-white text-white hover:bg-white/10 font-semibold text-lg px-8 py-3">
              Read Islamic Guidelines
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default IslamicMarriage
