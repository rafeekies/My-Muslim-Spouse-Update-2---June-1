import { Link } from 'react-router-dom'

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
          <div className="px-6 py-4 border-b">
            <h1 className="text-3xl font-bold text-gray-900">Privacy Policy</h1>
            <p className="text-gray-600 mt-2">Last Updated: {new Date().toLocaleDateString()}</p>
          </div>
          
          <div className="p-6 space-y-6">
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">1. Introduction</h2>
              <p className="text-gray-700">
                Welcome to My Muslim Spouse ("we," "our," or "us"). We are committed to protecting your privacy and personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website and services.
              </p>
              <p className="text-gray-700 mt-2">
                By accessing or using our service, you consent to the collection, use, and storage of your information as described in this Privacy Policy. If you do not agree with our policies and practices, please do not use our service.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">2. Information We Collect</h2>
              <p className="text-gray-700">
                We collect several types of information from and about users of our service, including:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-700">
                <li>
                  <strong>Personal Information:</strong> This includes information that can identify you as an individual, such as your name, email address, date of birth, gender, location, and photographs.
                </li>
                <li>
                  <strong>Profile Information:</strong> Information you provide in your profile, including your religious practices, education, profession, family background, and preferences for a spouse.
                </li>
                <li>
                  <strong>Communication Data:</strong> Messages, chat logs, and other communications between you and other users or our customer service team.
                </li>
                <li>
                  <strong>Usage Data:</strong> Information about how you use our service, including log data, device information, IP address, browser type, pages visited, and time spent on the service.
                </li>
                <li>
                  <strong>Payment Information:</strong> If you subscribe to our premium services, we collect payment details necessary to process your payment.
                </li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">3. How We Use Your Information</h2>
              <p className="text-gray-700">
                We use the information we collect for various purposes, including:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-700">
                <li>To provide and maintain our service</li>
                <li>To match you with potential spouses based on your preferences</li>
                <li>To process your payments and manage your account</li>
                <li>To communicate with you about service updates, offers, and promotions</li>
                <li>To respond to your inquiries and provide customer support</li>
                <li>To monitor and analyze usage patterns and trends</li>
                <li>To detect, prevent, and address technical issues, fraud, or illegal activities</li>
                <li>To enforce our terms of service and other policies</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">4. Sharing Your Information</h2>
              <p className="text-gray-700">
                We may share your information in the following circumstances:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-700">
                <li>
                  <strong>With Other Users:</strong> Your profile information and communications will be shared with other users as part of the core functionality of our matrimonial service.
                </li>
                <li>
                  <strong>Service Providers:</strong> We may share your information with third-party vendors, service providers, and contractors who perform services on our behalf.
                </li>
                <li>
                  <strong>Legal Requirements:</strong> We may disclose your information if required to do so by law or in response to valid requests by public authorities.
                </li>
                <li>
                  <strong>Business Transfers:</strong> If we are involved in a merger, acquisition, or sale of all or a portion of our assets, your information may be transferred as part of that transaction.
                </li>
                <li>
                  <strong>With Your Consent:</strong> We may share your information with third parties when we have your consent to do so.
                </li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">5. Data Security</h2>
              <p className="text-gray-700">
                We implement appropriate technical and organizational measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">6. Your Rights and Choices</h2>
              <p className="text-gray-700">
                Depending on your location, you may have certain rights regarding your personal information, including:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-700">
                <li>The right to access and receive a copy of your personal information</li>
                <li>The right to rectify or update your personal information</li>
                <li>The right to delete your personal information</li>
                <li>The right to restrict or object to processing of your personal information</li>
                <li>The right to data portability</li>
                <li>The right to withdraw consent</li>
              </ul>
              <p className="text-gray-700 mt-2">
                To exercise these rights, please contact us using the information provided in the "Contact Us" section below.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">7. Children's Privacy</h2>
              <p className="text-gray-700">
                Our service is not intended for individuals under the age of 18. We do not knowingly collect personal information from children under 18. If you are a parent or guardian and believe that your child has provided us with personal information, please contact us, and we will take steps to delete such information.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">8. Changes to This Privacy Policy</h2>
              <p className="text-gray-700">
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. You are advised to review this Privacy Policy periodically for any changes.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">9. Contact Us</h2>
              <p className="text-gray-700">
                If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:
              </p>
              <p className="text-gray-700 mt-2">
                Email: privacy@mymuslimspouse.com<br />
                Address: 123 Islamic Center Drive, Suite 456, Anytown, USA 12345
              </p>
            </section>
            
            <div className="pt-4 border-t">
              <Link to="/" className="text-primary-600 hover:text-primary-700">
                &larr; Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
