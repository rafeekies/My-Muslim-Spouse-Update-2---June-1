import React from 'react'
import { Link } from 'react-router-dom'
import { FaQuran, FaUserFriends, FaChild, FaHeart, FaHandHoldingHeart } from 'react-icons/fa'

const FamilyInIslam = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary-700 text-white py-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">Family in Islam</h1>
            <p className="text-xl mb-0">
              Understanding the importance and structure of family in Islamic teachings
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">The Foundation of Society</h2>
            
            <p className="text-lg text-gray-700 mb-6">
              In Islam, the family is regarded as the cornerstone of society and the foundation for a healthy community. The Quran and Sunnah provide comprehensive guidance on establishing and maintaining strong family bonds based on love, mercy, and mutual respect.
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
              This verse highlights the divine wisdom behind the creation of spouses and the establishment of families. The concepts of tranquility (sakinah), affection (mawaddah), and mercy (rahmah) form the pillars of Islamic family life.
            </p>
          </div>
        </div>
      </section>

      {/* Key Aspects */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12">Key Aspects of Family in Islam</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-start mb-4">
                <div className="flex-shrink-0 mr-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary-100 text-primary-600">
                    <FaHeart size={20} />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Marriage as the Foundation</h3>
                  <p className="text-gray-600">
                    Islam places great emphasis on marriage as the legitimate foundation for family life. The Prophet Muhammad (peace be upon him) said, "Marriage is half of faith." It is through marriage that individuals fulfill their natural desires in a halal manner and establish a family unit.
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
                  <h3 className="text-xl font-semibold mb-2">Spousal Rights and Responsibilities</h3>
                  <p className="text-gray-600">
                    Islam outlines clear rights and responsibilities for both spouses. Husbands are responsible for providing financial support, protection, and kind treatment. Wives are to be respected, consulted in family matters, and treated with compassion. Mutual consultation (shura) is emphasized in family decisions.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-start mb-4">
                <div className="flex-shrink-0 mr-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary-100 text-primary-600">
                    <FaChild size={20} />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Parenting and Children's Rights</h3>
                  <p className="text-gray-600">
                    Children are considered a blessing from Allah. Parents are responsible for providing proper Islamic education, love, and care. Islam emphasizes the importance of raising righteous children who will contribute positively to society. Children, in turn, are commanded to respect and obey their parents.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-start mb-4">
                <div className="flex-shrink-0 mr-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary-100 text-primary-600">
                    <FaHandHoldingHeart size={20} />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Extended Family Relations</h3>
                  <p className="text-gray-600">
                    Islam recognizes the importance of maintaining ties with extended family members. The concept of silat al-rahim (maintaining kinship ties) is highly emphasized. Muslims are encouraged to maintain good relations with relatives, visit them regularly, and provide support when needed.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quranic Guidance */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Quranic Guidance on Family</h2>
            
            <div className="space-y-8">
              <div className="bg-primary-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">On Marriage</h3>
                <p className="text-lg font-arabic text-right mb-2">
                  وَأَنكِحُوا الْأَيَامَىٰ مِنكُمْ وَالصَّالِحِينَ مِنْ عِبَادِكُمْ وَإِمَائِكُمْ ۚ إِن يَكُونُوا فُقَرَاءَ يُغْنِهِمُ اللَّهُ مِن فَضْلِهِ ۗ وَاللَّهُ وَاسِعٌ عَلِيمٌ
                </p>
                <p className="text-gray-700 italic">
                  "And marry the unmarried among you and the righteous among your male slaves and female slaves. If they should be poor, Allah will enrich them from His bounty, and Allah is all-Encompassing and Knowing." [Quran 24:32]
                </p>
                <p className="text-gray-600 mt-4">
                  This verse encourages marriage and reassures that financial constraints should not be a barrier to marriage, as Allah provides for those who marry with the right intentions.
                </p>
              </div>
              
              <div className="bg-primary-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">On Parental Rights</h3>
                <p className="text-lg font-arabic text-right mb-2">
                  وَقَضَىٰ رَبُّكَ أَلَّا تَعْبُدُوا إِلَّا إِيَّاهُ وَبِالْوَالِدَيْنِ إِحْسَانًا ۚ إِمَّا يَبْلُغَنَّ عِندَكَ الْكِبَرَ أَحَدُهُمَا أَوْ كِلَاهُمَا فَلَا تَقُل لَّهُمَا أُفٍّ وَلَا تَنْهَرْهُمَا وَقُل لَّهُمَا قَوْلًا كَرِيمًا
                </p>
                <p className="text-gray-700 italic">
                  "And your Lord has decreed that you not worship except Him, and to parents, good treatment. Whether one or both of them reach old age [while] with you, say not to them [so much as], 'uff,' and do not repel them but speak to them a noble word." [Quran 17:23]
                </p>
                <p className="text-gray-600 mt-4">
                  This verse highlights the high status of parents in Islam and the obligation to treat them with respect and kindness, especially in their old age.
                </p>
              </div>
              
              <div className="bg-primary-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">On Children's Rights</h3>
                <p className="text-lg font-arabic text-right mb-2">
                  يَا أَيُّهَا الَّذِينَ آمَنُوا قُوا أَنفُسَكُمْ وَأَهْلِيكُمْ نَارًا وَقُودُهَا النَّاسُ وَالْحِجَارَةُ
                </p>
                <p className="text-gray-700 italic">
                  "O you who have believed, protect yourselves and your families from a Fire whose fuel is people and stones..." [Quran 66:6]
                </p>
                <p className="text-gray-600 mt-4">
                  This verse emphasizes the responsibility of parents to protect their children not only physically but spiritually by providing proper Islamic education and guidance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Prophetic Teachings */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Prophetic Teachings on Family</h2>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <p className="text-lg italic mb-4">
                  "The best of you are those who are best to their families, and I am the best of you to my family."
                </p>
                <p className="text-gray-600">
                  This hadith emphasizes the importance of treating family members with kindness and respect. The Prophet Muhammad (peace be upon him) set the example of being the best to his family, demonstrating that good treatment of family is a sign of excellence in character.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <p className="text-lg italic mb-4">
                  "The most perfect believer in faith is the one whose character is finest and who is kindest to his wife."
                </p>
                <p className="text-gray-600">
                  This hadith connects the quality of one's faith with how they treat their spouse. It highlights that being kind and respectful to one's wife is not just a social obligation but a religious one.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <p className="text-lg italic mb-4">
                  "No father gives a better gift to his children than good manners and good character."
                </p>
                <p className="text-gray-600">
                  This teaching emphasizes that beyond material provisions, the best gift parents can give their children is good upbringing, which includes teaching them proper manners and developing their character.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <p className="text-lg italic mb-4">
                  "Paradise lies under the feet of mothers."
                </p>
                <p className="text-gray-600">
                  This famous hadith highlights the high status of mothers in Islam and the importance of respecting, obeying, and serving them as a means of attaining Paradise.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Practical Guidance */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12">Practical Guidance for Muslim Families</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4 text-primary-700">Building a Strong Foundation</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary-100 text-primary-600 mr-2 text-xs">1</span>
                  <span className="text-gray-700">Choose a spouse based on religious commitment and character</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary-100 text-primary-600 mr-2 text-xs">2</span>
                  <span className="text-gray-700">Establish clear communication from the beginning</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary-100 text-primary-600 mr-2 text-xs">3</span>
                  <span className="text-gray-700">Set shared goals and values based on Islamic principles</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary-100 text-primary-600 mr-2 text-xs">4</span>
                  <span className="text-gray-700">Practice mutual consultation in decision-making</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary-100 text-primary-600 mr-2 text-xs">5</span>
                  <span className="text-gray-700">Prioritize spiritual growth together</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4 text-primary-700">Maintaining Harmony</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary-100 text-primary-600 mr-2 text-xs">1</span>
                  <span className="text-gray-700">Practice patience and forgiveness</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary-100 text-primary-600 mr-2 text-xs">2</span>
                  <span className="text-gray-700">Show gratitude and appreciation regularly</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary-100 text-primary-600 mr-2 text-xs">3</span>
                  <span className="text-gray-700">Resolve conflicts promptly and respectfully</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary-100 text-primary-600 mr-2 text-xs">4</span>
                  <span className="text-gray-700">Maintain privacy and confidentiality</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary-100 text-primary-600 mr-2 text-xs">5</span>
                  <span className="text-gray-700">Support each other through difficulties</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4 text-primary-700">Raising Righteous Children</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary-100 text-primary-600 mr-2 text-xs">1</span>
                  <span className="text-gray-700">Lead by example in practicing Islam</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary-100 text-primary-600 mr-2 text-xs">2</span>
                  <span className="text-gray-700">Teach Quran and Islamic values from an early age</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary-100 text-primary-600 mr-2 text-xs">3</span>
                  <span className="text-gray-700">Balance discipline with love and mercy</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary-100 text-primary-600 mr-2 text-xs">4</span>
                  <span className="text-gray-700">Encourage questions and open discussion</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary-100 text-primary-600 mr-2 text-xs">5</span>
                  <span className="text-gray-700">Pray for your children's guidance and success</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-700 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-6">Begin Your Journey to a Blessed Family Life</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Apply Islamic principles to build a strong, loving family that pleases Allah and contributes positively to society.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/islamic-marriage" className="btn bg-white text-primary-700 hover:bg-gray-100 font-semibold text-lg px-8 py-3">
              Learn About Islamic Marriage
            </Link>
            <Link to="/register" className="btn bg-transparent border-2 border-white text-white hover:bg-white/10 font-semibold text-lg px-8 py-3">
              Join Our Community
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default FamilyInIslam
