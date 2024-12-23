import { FaHeart, FaRegHeart, FaRuler } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Breadcrumb from "../components/shared/Breadcrumb";
import { toggleFavorite } from "../store/features/favoritesSlice";
import { RootState } from "../store/store";
import { Property } from "../types/property";
import { formatCurrency } from "../utils/format";

// This would typically come from an API call using the ID
const getPropertyById = (id: string): Property | undefined => {
  // Mock data for demonstration
  const property: Property = {
    id,
    title: "Modern Luxury Villa with Ocean View",
    type: "VILLA",
    status: "FOR_SALE",
    price: 2500000,
    location: "Malibu, CA",
    bedrooms: 5,
    bathrooms: 4,
    area: 4200,
    isFeatured: true,
    imageUrl:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1920&q=80",
    features: [
      { icon: "ocean", label: "Ocean View", value: "Panoramic" },
      { icon: "pool", label: "Private Pool", value: "Yes" },
      { icon: "smart", label: "Smart Home System", value: "Full Integration" },
      { icon: "wine", label: "Wine Cellar", value: "500 Bottles" },
      { icon: "theater", label: "Home Theater", value: "12 Seats" },
      {
        icon: "kitchen",
        label: "Gourmet Kitchen",
        value: "Professional Grade",
      },
    ],
  };
  return property;
};

const PropertyDetails = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch();
  const favoriteIds = useSelector(
    (state: RootState) => state.favorites.favoriteIds
  );

  if (!id) return <div>Property not found</div>;

  const property = getPropertyById(id);
  if (!property) return <div>Property not found</div>;

  const isFavorite = favoriteIds.includes(property.id);
  const breadcrumbItems = [
    { label: "Properties", path: "/properties" },
    { label: property.title, path: `/properties/${property.id}` },
  ];

  const handleToggleFavorite = () => {
    dispatch(toggleFavorite(property.id));
  };

  return (
    <div>
      {/* Banner Section */}
      <div className="relative h-[500px]">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${property.imageUrl})`,
          }}
        >
          <div className="absolute inset-0 bg-black/30" />
        </div>

        {/* Content */}
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="pt-6">
            <Breadcrumb items={breadcrumbItems} className="text-white/90" />
          </div>

          {/* Property Info */}
          <div className="absolute bottom-8 left-4 right-4 sm:left-6 sm:right-6 lg:left-8 lg:right-8">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
              {/* Left Side */}
              <div>
                {/* Status Badge */}
                <span
                  className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                    property.status === "FOR_SALE"
                      ? "bg-green-500/90 text-white"
                      : "bg-blue-500/90 text-white"
                  }`}
                >
                  {property.status === "FOR_SALE" ? "For Sale" : "For Rent"}
                </span>

                {/* Title */}
                <h1 className="text-3xl sm:text-4xl font-bold text-white mt-2">
                  {property.title}
                </h1>

                {/* Location */}
                <p className="text-xl text-white/90 mt-2">
                  {property.location}
                </p>
              </div>

              {/* Right Side */}
              <div className="flex flex-col items-end">
                {/* Price */}
                <div className="text-3xl sm:text-4xl font-bold text-white">
                  {formatCurrency(property.price)}
                  {property.status === "FOR_RENT" && (
                    <span className="text-lg">/mo</span>
                  )}
                </div>

                {/* Area */}
                <div className="flex items-center gap-2 text-white/90 mt-2">
                  <FaRuler />
                  <span>{property.area.toLocaleString()} sq ft</span>
                </div>
              </div>
            </div>

            {/* Favorite Button */}
            <button
              onClick={handleToggleFavorite}
              className="absolute top-0 right-0 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200"
            >
              {isFavorite ? (
                <FaHeart className="w-6 h-6 text-red-500" />
              ) : (
                <FaRegHeart className="w-6 h-6 text-white" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Property Details Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Features */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Features & Amenities
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {property.features.map((feature) => (
                  <div
                    key={feature.label}
                    className="flex items-center gap-2 text-gray-600"
                  >
                    <span className="w-2 h-2 bg-blue-500 rounded-full" />
                    {feature.label}
                  </div>
                ))}
              </div>
            </div>

            {/* Description */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Description
              </h2>
              <p className="text-gray-600">
                This stunning modern villa offers breathtaking ocean views and
                luxurious living spaces. The property features high-end
                finishes, smart home technology, and an open floor plan perfect
                for entertaining. The gourmet kitchen comes equipped with
                top-of-the-line appliances, and the master suite includes a
                spa-like bathroom and private balcony.
              </p>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Property Details
              </h2>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Property Type</span>
                  <span className="font-medium text-gray-900">
                    {property.type.charAt(0) +
                      property.type.slice(1).toLowerCase()}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Bedrooms</span>
                  <span className="font-medium text-gray-900">
                    {property.bedrooms}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Bathrooms</span>
                  <span className="font-medium text-gray-900">
                    {property.bathrooms}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Area</span>
                  <span className="font-medium text-gray-900">
                    {property.area.toLocaleString()} sq ft
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
