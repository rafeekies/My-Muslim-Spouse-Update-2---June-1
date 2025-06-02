import { Link } from 'react-router-dom'
import { FaQuran, FaHandshake, FaUsers, FaShieldAlt, FaHeart } from 'react-icons/fa'

export default function About() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary-700 text-white py-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">About My Muslim Spouse</h1>
            <p className="text-xl mb-0">
              A matrimonial service built on Islamic principles to help Muslims find their perfect life partner.
            </p>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Our Mission</h2>
            <p className="text-lg text-gray-700 mb-6">
              At My Muslim Spouse, our mission is to facilitate matrimonial connections between Muslims in a way that upholds Islamic values and principles. We understand the challenges Muslims face in finding suitable spouses, especially in non-Muslim majority countries.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              We aim to provide a platform where practicing Muslims can connect with potential spouses in a halal environment, with the involvement of family members and adherence to Islamic guidelines throughout the process.
            </p>
            <div className="bg-primary-50 p-6 rounded-lg border-l-4 border-primary-500 mb-6">
              <p className="text-lg font-arabic text-right mb-2">
                وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً ۚ إِنَّ فِي ذَٰلِكَ لَآيَاتٍ لِّقَوْمٍ يَتَفَكَّرُونَ
              </p>
              <p className="text-gray-700 italic">
                "And of His signs is that He created for you from yourselves mates that you may find tranquility in them; and He placed between you affection and mercy. Indeed in that are signs for a people who give thought." [Quran 30:21]
              </p>
            </div>
            <p className="text-lg text-gray-700">
              Guided by this verse and many teachings of our Prophet Muhammad (peace be upon him), we strive to make the path to a halal marriage easier for Muslims worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-100 text-primary-600 mb-4">
                <FaQuran size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Islamic Principles</h3>
              <p className="text-gray-600">
                We adhere to Islamic guidelines in all aspects of our service, ensuring a halal environment for Muslims seeking marriage.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-100 text-primary-600 mb-4">
                <FaShieldAlt size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Privacy & Safety</h3>
              <p className="text-gray-600">
                We prioritize the privacy and safety of our members, with strict verification processes and privacy controls.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-100 text-primary-600 mb-4">
                <FaUsers size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Family Involvement</h3>
              <p className="text-gray-600">
                We encourage family involvement in the matrimonial process, as recommended in Islamic tradition.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-100 text-primary-600 mb-4">
                <FaHandshake size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Respect & Integrity</h3>
              <p className="text-gray-600">
                We promote respectful interactions and maintain integrity in all our operations and member communications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Our Story</h2>
            
            <p className="text-lg text-gray-700 mb-6">
              My Muslim Spouse was founded in 2023 by a group of practicing Muslims who recognized the challenges faced by the Muslim community in finding suitable spouses while adhering to Islamic principles.
            </p>
            
            <p className="text-lg text-gray-700 mb-6">
              Having experienced these challenges firsthand, our founders were determined to create a platform that would make the search for a spouse easier, more accessible, and most importantly, aligned with Islamic values.
            </p>
            
            <p className="text-lg text-gray-700 mb-6">
              What began as a small community has now grown into a trusted matrimonial service for Muslims worldwide. We continue to evolve and improve our platform based on feedback from our members and guidance from Islamic scholars.
            </p>
            
            <p className="text-lg text-gray-700">
              Our journey is guided by the principle that marriage in Islam is half of one's faith, and we are committed to helping Muslims complete this important aspect of their deen.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12">Our Team</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-sm">
              <img 
                src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Ahmed Khan" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">Ahmed Khan</h3>
                <p className="text-primary-600 mb-4">Founder & CEO</p>
                <p className="text-gray-600 mb-4">
                  With a background in technology and Islamic studies, Ahmed founded My Muslim Spouse to help Muslims find compatible partners while adhering to Islamic principles.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-sm">
              <img 
                src="https://images.pexels.com/photos/1820919/pexels-photo-1820919.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Fatima Ali" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">Fatima Ali</h3>
                <p className="text-primary-600 mb-4">Chief Operating Officer</p>
                <p className="text-gray-600 mb-4">
                  Fatima brings her expertise in community building and user experience to ensure our platform meets the needs of Muslims seeking marriage.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-sm">
              <img 
                src="https://images.pexels.com/photos/2269872/pexels-photo-2269872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Yusuf Rahman" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">Yusuf Rahman</h3>
                <p className="text-primary-600 mb-4">Islamic Advisor</p>
                <p className="text-gray-600 mb-4">
                  As our Islamic advisor, Yusuf ensures that all aspects of our platform adhere to Islamic principles and provides guidance on matrimonial matters.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-700 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Community</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Be part of a growing community of Muslims seeking marriage based on Islamic values and principles.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/register" className="btn bg-white text-primary-700 hover:bg-gray-100 font-semibold text-lg px-8 py-3">
              Register Now
            </Link>
            <Link to="/contact" className="btn bg-transparent border-2 border-white text-white hover:bg-white/10 font-semibold text-lg px-8 py-3">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
