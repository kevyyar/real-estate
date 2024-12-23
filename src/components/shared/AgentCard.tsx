import { Link } from "react-router-dom";
import { Agent } from "../../types/agent";

interface AgentCardProps {
  agent: Agent;
}

const AgentCard = ({ agent }: AgentCardProps) => {
  return (
    <div className="group relative flex flex-col items-center p-6 h-[600px] transition-transform duration-300 hover:-translate-y-2">
      {/* Profile Image Container */}
      <div className="relative mb-6 flex-shrink-0">
        {/* Circular background animation */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 blur-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300" />

        {/* Profile Image */}
        <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-lg">
          <img
            src={agent.imageUrl}
            alt={agent.name}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col items-center flex-grow w-full">
        <div className="text-center mb-4 flex-shrink-0">
          <h3 className="text-xl font-bold text-gray-900 mb-2">{agent.name}</h3>
          <p className="text-blue-600 font-medium">{agent.title}</p>
        </div>

        {/* Description with fixed height and ellipsis */}
        <p className="text-gray-600 text-center mb-6 line-clamp-3 flex-shrink-0">
          {agent.description}
        </p>

        {/* Stats */}
        {agent.stats && (
          <div className="grid grid-cols-3 gap-4 w-full mb-6 flex-shrink-0">
            <div className="text-center">
              <span className="block text-2xl font-bold text-gray-900">
                {agent.stats.propertiesSold}
              </span>
              <span className="text-sm text-gray-500">Properties Sold</span>
            </div>
            <div className="text-center">
              <span className="block text-2xl font-bold text-gray-900">
                {agent.stats.experience}+
              </span>
              <span className="text-sm text-gray-500">Years Experience</span>
            </div>
            <div className="text-center">
              <span className="block text-2xl font-bold text-gray-900">
                {agent.stats.activeListings}
              </span>
              <span className="text-sm text-gray-500">Active Listings</span>
            </div>
          </div>
        )}

        {/* View Profile Link - Always at bottom */}
        <div className="mt-auto flex-shrink-0">
          <Link
            to={`/agents/${agent.slug}`}
            className="inline-flex items-center gap-2 text-blue-600 font-medium hover:text-blue-700 transition-colors duration-300"
          >
            View Profile
            <svg
              className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AgentCard;
