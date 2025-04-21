
import { NavLink } from "react-router-dom";

const Privacy = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-primary py-12 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in">Privacy Policy</h1>
          <p className="text-lg max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Baker & Davis is committed to protecting your privacy and personal information
          </p>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-pharma-navy mb-4">Introduction</h2>
              <p className="text-gray-700">
                This Privacy Policy outlines how Baker & Davis Pvt. Ltd. ("we," "our," or "the Company") collects, uses, 
                maintains, and discloses information collected from users (each, a "User") of our website and services. 
                This privacy policy applies to the Site and all products and services offered by Baker & Davis Pvt. Ltd.
              </p>
              <p className="text-gray-700 mt-4">
                Last updated: April 2023
              </p>
            </div>

            <div className="mb-10">
              <h2 className="text-2xl font-bold text-pharma-navy mb-4">Information Collection</h2>
              <p className="text-gray-700">
                We may collect personal identification information from Users in a variety of ways, including, but not 
                limited to, when Users visit our site, register on the site, fill out a form, and in connection with 
                other activities, services, features or resources we make available on our Site. Users may be asked for, 
                as appropriate, name, email address, mailing address, phone number. We will collect personal identification 
                information from Users only if they voluntarily submit such information to us. Users can always refuse to 
                supply personally identification information, except that it may prevent them from engaging in certain 
                Site related activities.
              </p>
            </div>

            <div className="mb-10">
              <h2 className="text-2xl font-bold text-pharma-navy mb-4">Information Usage</h2>
              <p className="text-gray-700">
                Baker & Davis Pvt. Ltd. may collect and use Users' personal information for the following purposes:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-700">
                <li>To improve customer service - Information you provide helps us respond to your customer service requests and support needs more efficiently.</li>
                <li>To personalize user experience - We may use information in the aggregate to understand how our Users as a group use the services and resources provided on our Site.</li>
                <li>To improve our Site - We may use feedback you provide to improve our products and services.</li>
                <li>To process payments - We may use the information Users provide about themselves when placing an order only to provide service to that order. We do not share this information with outside parties except to the extent necessary to provide the service.</li>
                <li>To run a promotion, contest, survey or other Site feature.</li>
                <li>To send Users information they agreed to receive about topics we think will be of interest to them.</li>
                <li>To send periodic emails - We may use the email address to send User information and updates pertaining to their order. It may also be used to respond to their inquiries, questions, and/or other requests.</li>
              </ul>
            </div>

            <div className="mb-10">
              <h2 className="text-2xl font-bold text-pharma-navy mb-4">Information Protection</h2>
              <p className="text-gray-700">
                We adopt appropriate data collection, storage and processing practices and security measures to protect against 
                unauthorized access, alteration, disclosure or destruction of your personal information, username, password, 
                transaction information and data stored on our Site.
              </p>
            </div>

            <div className="mb-10">
              <h2 className="text-2xl font-bold text-pharma-navy mb-4">Sharing Personal Information</h2>
              <p className="text-gray-700">
                We do not sell, trade, or rent Users' personal identification information to others. We may share generic 
                aggregated demographic information not linked to any personal identification information regarding visitors 
                and users with our business partners, trusted affiliates and advertisers for the purposes outlined above.
              </p>
            </div>

            <div className="mb-10">
              <h2 className="text-2xl font-bold text-pharma-navy mb-4">Third-Party Websites</h2>
              <p className="text-gray-700">
                Users may find advertising or other content on our Site that link to the sites and services of our partners, 
                suppliers, advertisers, sponsors, licensors and other third parties. We do not control the content or links 
                that appear on these sites and are not responsible for the practices employed by websites linked to or from 
                our Site. In addition, these sites or services, including their content and links, may be constantly changing. 
                These sites and services may have their own privacy policies and customer service policies. Browsing and 
                interaction on any other website, including websites which have a link to our Site, is subject to that 
                website's own terms and policies.
              </p>
            </div>

            <div className="mb-10">
              <h2 className="text-2xl font-bold text-pharma-navy mb-4">Changes to This Privacy Policy</h2>
              <p className="text-gray-700">
                Baker & Davis Pvt. Ltd. has the discretion to update this privacy policy at any time. When we do, we will revise 
                the updated date at the bottom of this page. We encourage Users to frequently check this page for any changes to 
                stay informed about how we are helping to protect the personal information we collect. You acknowledge and agree 
                that it is your responsibility to review this privacy policy periodically and become aware of modifications.
              </p>
            </div>

            <div className="mb-10">
              <h2 className="text-2xl font-bold text-pharma-navy mb-4">Your Acceptance of These Terms</h2>
              <p className="text-gray-700">
                By using this Site, you signify your acceptance of this policy. If you do not agree to this policy, please do not 
                use our Site. Your continued use of the Site following the posting of changes to this policy will be deemed your 
                acceptance of those changes.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-pharma-navy mb-4">Contacting Us</h2>
              <p className="text-gray-700">
                If you have any questions about this Privacy Policy, the practices of this site, or your dealings with this site, 
                please contact us at:
              </p>
              <address className="mt-4 not-italic text-gray-700">
                <p>Baker & Davis Pvt. Ltd.</p>
                <p>42/44, Babu Genu Road, Shop No. 14, 2nd Floor,</p>
                <p>Om Shanti Co-Operative Housing Society Ltd.,</p>
                <p>Kalbadevi, Mumbai - 400 002</p>
                <p>Email: admin@bdindia.in</p>
                <p>Phone: 022-48256677 / 022-40134455</p>
              </address>
            </div>

            <div className="mt-10 pt-6 border-t border-gray-200 text-center">
              <NavLink 
                to="/contact" 
                className="text-pharma-navy font-medium hover:underline"
              >
                Contact Us for Privacy Questions
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Privacy;
