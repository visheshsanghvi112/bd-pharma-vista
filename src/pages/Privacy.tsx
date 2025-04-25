import { NavLink } from "react-router-dom";
import { Shield } from "lucide-react";

const Privacy = () => {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary-light to-background py-12 dark:from-primary/20 dark:to-background">
        <div className="container mx-auto px-4 text-center">
          <div className="mx-auto mb-8 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 dark:bg-primary/20">
            <Shield className="h-8 w-8 text-primary dark:text-primary-light" />
          </div>
          <h1 className="mb-4 text-3xl font-bold text-primary dark:text-primary-light md:text-4xl">
            Privacy Policy
          </h1>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Baker & Davis is committed to protecting your privacy and personal information
          </p>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="flex-1 py-16">
        <div className="container mx-auto px-4">
          <div className="prose prose-lg mx-auto max-w-4xl dark:prose-invert">
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-pharma-navy dark:text-primary-light mb-4 transition-colors duration-300">Introduction</h2>
              <p className="text-gray-700 dark:text-gray-300 transition-colors duration-300">
                This Privacy Policy outlines how Baker & Davis Pvt. Ltd. ("we," "our," or "the Company") collects, uses, 
                maintains, and discloses information collected from users (each, a "User") of our website and services. 
                This privacy policy applies to the Site and all products and services offered by Baker & Davis Pvt. Ltd.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mt-4 transition-colors duration-300">
                Last updated: April 2023
              </p>
            </div>

            <div className="mb-10">
              <h2 className="text-2xl font-bold text-pharma-navy dark:text-primary-light mb-4 transition-colors duration-300">Information Collection</h2>
              <p className="text-gray-700 dark:text-gray-300 transition-colors duration-300">
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
              <h2 className="text-2xl font-bold text-pharma-navy dark:text-primary-light mb-4 transition-colors duration-300">Information Usage</h2>
              <p className="text-gray-700 dark:text-gray-300 transition-colors duration-300">
                Baker & Davis Pvt. Ltd. may collect and use Users' personal information for the following purposes:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-700 dark:text-gray-300 transition-colors duration-300">
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
              <h2 className="text-2xl font-bold text-pharma-navy dark:text-primary-light mb-4 transition-colors duration-300">Information Protection</h2>
              <p className="text-gray-700 dark:text-gray-300 transition-colors duration-300">
                We adopt appropriate data collection, storage and processing practices and security measures to protect against 
                unauthorized access, alteration, disclosure or destruction of your personal information, username, password, 
                transaction information and data stored on our Site.
              </p>
            </div>

            <div className="mb-10">
              <h2 className="text-2xl font-bold text-pharma-navy dark:text-primary-light mb-4 transition-colors duration-300">Sharing Personal Information</h2>
              <p className="text-gray-700 dark:text-gray-300 transition-colors duration-300">
                We do not sell, trade, or rent Users' personal identification information to others. We may share generic 
                aggregated demographic information not linked to any personal identification information regarding visitors 
                and users with our business partners, trusted affiliates and advertisers for the purposes outlined above.
              </p>
            </div>

            <div className="mb-10">
              <h2 className="text-2xl font-bold text-pharma-navy dark:text-primary-light mb-4 transition-colors duration-300">Third-Party Websites</h2>
              <p className="text-gray-700 dark:text-gray-300 transition-colors duration-300">
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
              <h2 className="text-2xl font-bold text-pharma-navy dark:text-primary-light mb-4 transition-colors duration-300">Changes to This Privacy Policy</h2>
              <p className="text-gray-700 dark:text-gray-300 transition-colors duration-300">
                Baker & Davis Pvt. Ltd. has the discretion to update this privacy policy at any time. When we do, we will revise 
                the updated date at the bottom of this page. We encourage Users to frequently check this page for any changes to 
                stay informed about how we are helping to protect the personal information we collect. You acknowledge and agree 
                that it is your responsibility to review this privacy policy periodically and become aware of modifications.
              </p>
            </div>

            <div className="mb-10">
              <h2 className="text-2xl font-bold text-pharma-navy dark:text-primary-light mb-4 transition-colors duration-300">Your Acceptance of These Terms</h2>
              <p className="text-gray-700 dark:text-gray-300 transition-colors duration-300">
                By using this Site, you signify your acceptance of this policy. If you do not agree to this policy, please do not 
                use our Site. Your continued use of the Site following the posting of changes to this policy will be deemed your 
                acceptance of those changes.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-pharma-navy dark:text-primary-light mb-4 transition-colors duration-300">Contacting Us</h2>
              <p className="text-gray-700 dark:text-gray-300 transition-colors duration-300">
                If you have any questions about this Privacy Policy, the practices of this site, or your dealings with this site, 
                please contact us at:
              </p>
              <address className="mt-4 not-italic text-gray-700 dark:text-gray-300 transition-colors duration-300">
                <p>Baker & Davis Pvt. Ltd.</p>
                <p>42/44, Babu Genu Road, Shop No. 14, 2nd Floor,</p>
                <p>Om Shanti Co-Operative Housing Society Ltd.,</p>
                <p>Kalbadevi, Mumbai - 400 002</p>
                <p>Email: admin@bdindia.in</p>
                <p>Phone: 022-48256677 / 022-40134455</p>
              </address>
            </div>

            <div className="mt-10 pt-6 border-t border-gray-200 dark:border-gray-700 text-center transition-colors duration-300">
              <NavLink 
                to="/contact" 
                className="text-pharma-navy dark:text-primary-light font-medium hover:underline transition-colors duration-300"
              >
                Contact Us for Privacy Questions
              </NavLink>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-card py-8 dark:bg-card/50">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-4 text-2xl font-bold text-primary dark:text-primary-light">
              Have Questions About Our Privacy Policy?
            </h2>
            <p className="mb-6 text-muted-foreground">
              Our team is here to help you understand how we protect your data
            </p>
            <NavLink
              to="/contact"
              className="inline-flex items-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 dark:bg-primary-light dark:text-primary dark:hover:bg-primary-light/90"
            >
              Contact Our Privacy Team
            </NavLink>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Privacy;
