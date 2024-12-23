import { useState } from "react";
import {
  FaEnvelope,
  FaPhone,
  FaSearch,
  FaStar,
  FaWhatsapp,
} from "react-icons/fa";
import Breadcrumb from "../components/shared/Breadcrumb";

interface Agent {
  id: string;
  name: string;
  role: string;
  image: string;
  rating: number;
  totalReviews: number;
  phone: string;
  email: string;
  whatsapp: string;
  properties: number;
  experience: string;
  languages: string[];
  specializations: string[];
  bio: string;
}

// Sample agent data
const sampleAgents: Agent[] = [
  {
    id: "1",
    name: "Sarah Johnson",
    role: "Senior Real Estate Agent",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80",
    rating: 4.8,
    totalReviews: 127,
    phone: "+1 (555) 123-4567",
    email: "sarah.j@realestate.com",
    whatsapp: "+1 (555) 123-4567",
    properties: 45,
    experience: "8 years",
    languages: ["English", "Spanish"],
    specializations: ["Luxury Homes", "Waterfront Properties"],
    bio: "Sarah specializes in luxury real estate and has consistently ranked in the top 1% of agents nationwide.",
  },
  {
    id: "2",
    name: "Michael Chen",
    role: "Property Investment Specialist",
    image:
      "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=300&q=80",
    rating: 4.9,
    totalReviews: 98,
    phone: "+1 (555) 234-5678",
    email: "michael.c@realestate.com",
    whatsapp: "+1 (555) 234-5678",
    properties: 38,
    experience: "6 years",
    languages: ["English", "Mandarin", "Cantonese"],
    specializations: ["Investment Properties", "Commercial Real Estate"],
    bio: "Michael's background in finance gives him a unique perspective in helping clients make sound investment decisions.",
  },
  {
    id: "3",
    name: "Emily Rodriguez",
    role: "Residential Property Expert",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300&q=80",
    rating: 4.7,
    totalReviews: 156,
    phone: "+1 (555) 345-6789",
    email: "emily.r@realestate.com",
    whatsapp: "+1 (555) 345-6789",
    properties: 62,
    experience: "10 years",
    languages: ["English", "Spanish", "Portuguese"],
    specializations: ["Family Homes", "First-Time Buyers"],
    bio: "Emily has helped hundreds of families find their perfect home, specializing in first-time homebuyers.",
  },
];

const AgentCard = ({ agent }: { agent: Agent }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-4 sm:p-6">
        {/* Main Content */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6">
          {/* Agent Image */}
          <img
            src={agent.image}
            alt={agent.name}
            className="w-24 h-24 sm:w-32 sm:h-32 rounded-full object-cover flex-shrink-0"
          />

          {/* Agent Info */}
          <div className="flex-1 w-full">
            {/* Header Section */}
            <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start gap-2 sm:gap-0">
              <div className="text-center sm:text-left">
                <h3 className="text-xl font-semibold text-gray-900">
                  {agent.name}
                </h3>
                <p className="text-blue-600 font-medium">{agent.role}</p>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-2">
                <div className="flex items-center">
                  <FaStar className="text-yellow-400 w-5 h-5" />
                  <span className="ml-1 font-semibold">{agent.rating}</span>
                </div>
                <span className="text-gray-500 text-sm">
                  ({agent.totalReviews} reviews)
                </span>
              </div>
            </div>

            {/* Contact Info */}
            <div className="mt-4 space-y-2">
              <div className="flex items-center justify-center sm:justify-start gap-2">
                <FaPhone className="text-gray-400" />
                <a
                  href={`tel:${agent.phone}`}
                  className="text-gray-600 hover:text-blue-600"
                >
                  {agent.phone}
                </a>
              </div>
              <div className="flex items-center justify-center sm:justify-start gap-2">
                <FaEnvelope className="text-gray-400" />
                <a
                  href={`mailto:${agent.email}`}
                  className="text-gray-600 hover:text-blue-600 break-all sm:break-normal"
                >
                  {agent.email}
                </a>
              </div>
              <div className="flex items-center justify-center sm:justify-start gap-2">
                <FaWhatsapp className="text-gray-400" />
                <a
                  href={`https://wa.me/${agent.whatsapp.replace(
                    /[^0-9]/g,
                    ""
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600"
                >
                  WhatsApp
                </a>
              </div>
            </div>

            {/* Stats */}
            <div className="mt-4 flex justify-center sm:justify-start gap-4">
              <div>
                <span className="text-gray-500">Properties: </span>
                <span className="font-semibold">{agent.properties}</span>
              </div>
              <div>
                <span className="text-gray-500">Experience: </span>
                <span className="font-semibold">{agent.experience}</span>
              </div>
            </div>

            {/* Languages & Specializations */}
            <div className="mt-4">
              <div className="flex flex-wrap justify-center sm:justify-start gap-2">
                {agent.languages.map((lang) => (
                  <span
                    key={lang}
                    className="px-2 py-1 bg-gray-100 text-gray-600 text-sm rounded-full"
                  >
                    {lang}
                  </span>
                ))}
                {agent.specializations.map((spec) => (
                  <span
                    key={spec}
                    className="px-2 py-1 bg-blue-100 text-blue-600 text-sm rounded-full"
                  >
                    {spec}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bio */}
        <p className="mt-4 text-gray-600 text-center sm:text-left">
          {agent.bio}
        </p>
      </div>
    </div>
  );
};

const Agents = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const breadcrumbItems = [{ label: "Our Agents", path: "/agents" }];

  const filteredAgents = sampleAgents.filter(
    (agent) =>
      agent.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      agent.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
      agent.specializations.some((spec) =>
        spec.toLowerCase().includes(searchQuery.toLowerCase())
      )
  );

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="mb-8">
          <Breadcrumb items={breadcrumbItems} />
        </div>

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Our Real Estate Agents
          </h1>
          <p className="mt-2 text-gray-600">
            Meet our team of professional real estate agents ready to help you
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative max-w-md">
            <input
              type="text"
              placeholder="Search agents by name, role, or specialization..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          </div>
        </div>

        {/* Agents Grid */}
        <div className="space-y-6">
          {filteredAgents.map((agent) => (
            <AgentCard key={agent.id} agent={agent} />
          ))}
        </div>

        {/* No Results Message */}
        {filteredAgents.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              No agents found
            </h3>
            <p className="text-gray-600">
              Try adjusting your search query to find what you're looking for.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Agents;
