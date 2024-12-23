import { FaBath, FaBed, FaRuler } from "react-icons/fa";
import { Property } from "../../types/property";
import { formatCurrency } from "../../utils/format";

interface PropertyCardProps {
  property: Property;
}

const PropertyCard = ({ property }: PropertyCardProps) => {
  const {
    imageUrl,
    title,
    status,
    type,
    price,
    location,
    bedrooms,
    bathrooms,
    area,
    isFeatured,
  } = property;

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-1">
      {/* Image Container */}
      <div className="relative h-64">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover"
        />
        {/* Status Pills */}
        <div className="absolute top-4 left-4 flex gap-2">
          {isFeatured && (
            <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
              Featured
            </span>
          )}
          <span
            className={`${
              status === "FOR_SALE" ? "bg-green-500" : "bg-blue-500"
            } text-white px-3 py-1 rounded-full text-sm font-semibold`}
          >
            {status === "FOR_SALE" ? "For Sale" : "For Rent"}
          </span>
        </div>
        {/* Property Type */}
        <div className="absolute bottom-4 left-4">
          <span className="bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm">
            {type}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 sm:p-6">
        {/* Title and Price */}
        <div className="mb-4">
          <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
            {title}
          </h3>
          <p className="text-gray-500 text-sm mb-2">{location}</p>
          <p className="text-xl font-bold text-blue-600">
            {formatCurrency(price)}
            {status === "FOR_RENT" && <span className="text-sm">/month</span>}
          </p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-3 gap-2 sm:gap-4 border-t pt-4">
          <div className="flex items-center gap-1.5 sm:gap-2">
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-50">
              <FaBed className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-600" />
            </div>
            <div className="flex flex-col">
              {/* <span className="text-xs sm:text-sm text-gray-500">Beds</span> */}
              <span className="text-xs font-medium text-gray-900">
                {bedrooms}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-1.5 sm:gap-2">
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-50">
              <FaBath className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-600" />
            </div>
            <div className="flex flex-col ">
              {/* <span className="text-xs sm:text-sm text-gray-500">Baths</span> */}
              <span className="text-xs font-medium text-gray-900">
                {bathrooms}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-1.5 sm:gap-2">
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-50">
              <FaRuler className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-600" />
            </div>
            <div className="flex flex-col">
              {/* <span className="text-xs sm:text-sm text-gray-500">Area</span> */}
              <span className="text-xs font-medium text-gray-900">
                {area} sqft
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
