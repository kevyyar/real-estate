import { useState } from "react";
import { Link } from "react-router-dom";

const cities = [
  { name: "New York", slug: "new-york" },
  { name: "Los Angeles", slug: "los-angeles" },
  { name: "Miami", slug: "miami" },
  { name: "San Francisco", slug: "san-francisco" },
  { name: "Chicago", slug: "chicago" },
  { name: "Boston", slug: "boston" },
];

const ContactFooter = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the newsletter subscription
    console.log("Newsletter subscription:", email);
    setIsSubscribed(true);
    setEmail("");
  };

  return (
    <section className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Discover Column */}
          <div>
            <h3 className="text-xl font-bold mb-6">Discover Properties</h3>
            <ul className="space-y-4">
              {cities.map((city) => (
                <li key={city.slug}>
                  <Link
                    to={`/properties/city/${city.slug}`}
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    Properties in {city.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-xl font-bold mb-6">Contact Us</h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-gray-400 mb-1">Address</h4>
                <p className="text-white">
                  123 Real Estate Ave
                  <br />
                  New York, NY 10001
                </p>
              </div>
              <div>
                <h4 className="text-gray-400 mb-1">Phone</h4>
                <a
                  href="tel:+1234567890"
                  className="text-white hover:text-blue-400 transition-colors duration-300"
                >
                  (123) 456-7890
                </a>
              </div>
              <div>
                <h4 className="text-gray-400 mb-1">Email</h4>
                <a
                  href="mailto:info@realestate.com"
                  className="text-white hover:text-blue-400 transition-colors duration-300"
                >
                  info@realestate.com
                </a>
              </div>
              <div className="pt-4">
                <h4 className="text-gray-400 mb-3">Business Hours</h4>
                <p className="text-white">
                  Monday - Friday: 9:00 AM - 6:00 PM
                  <br />
                  Saturday: 10:00 AM - 4:00 PM
                  <br />
                  Sunday: Closed
                </p>
              </div>
            </div>
          </div>

          {/* Newsletter Column */}
          <div>
            <h3 className="text-xl font-bold mb-6">Newsletter</h3>
            <p className="text-gray-400 mb-6">
              Subscribe to our newsletter for the latest property updates,
              market insights, and exclusive offers.
            </p>
            {isSubscribed ? (
              <div className="bg-green-900/50 text-green-300 p-4 rounded-lg">
                Thank you for subscribing! Check your email for confirmation.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-400"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300"
                >
                  Subscribe
                </button>
              </form>
            )}
            <p className="mt-4 text-sm text-gray-500">
              By subscribing, you agree to our Privacy Policy and consent to
              receive updates from our company.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFooter;
