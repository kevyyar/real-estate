import { Link } from "react-router-dom";

interface PropertyCategoryCardProps {
  count: number;
  category: string;
  imageUrl: string;
  slug: string;
}

const PropertyCategoryCard = ({
  count,
  category,
  imageUrl,
  slug,
}: PropertyCategoryCardProps) => {
  return (
    <Link
      to={`/properties/${slug}`}
      className="group relative block h-[360px] overflow-hidden rounded-lg"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/80 transition-opacity duration-300 group-hover:opacity-90" />
      </div>

      {/* Content */}
      <div className="relative h-full p-8 flex flex-col justify-between text-white">
        {/* Top Content */}
        <div>
          <span className="block text-3xl font-bold mb-2">
            {count} {count === 1 ? "property" : "properties"}
          </span>
          <h3 className="text-2xl">{category}</h3>
        </div>

        {/* Bottom Link */}
        <div className="flex items-center gap-2 text-sm font-medium">
          <span className="transition-colors duration-300 group-hover:text-blue-400">
            More Details
          </span>
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
        </div>
      </div>
    </Link>
  );
};

export default PropertyCategoryCard;
