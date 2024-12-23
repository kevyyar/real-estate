import { Link } from "react-router-dom";
import { Property } from "../../types/property";
import PropertyCard from "../shared/PropertyCard";

// Sample data - will be replaced with dynamic data later
const sampleProperties: Property[] = [
  {
    id: "1",
    title: "Modern Apartment in Downtown",
    type: "APARTMENT",
    status: "FOR_SALE",
    price: 450000,
    location: "Downtown, New York",
    bedrooms: 2,
    bathrooms: 2,
    area: 1200,
    isFeatured: true,
    imageUrl:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3",
    features: [],
  },
  {
    id: "2",
    title: "Luxury Villa with Pool",
    type: "VILLA",
    status: "FOR_SALE",
    price: 1250000,
    location: "Beverly Hills, Los Angeles",
    bedrooms: 4,
    bathrooms: 3,
    area: 3500,
    isFeatured: true,
    imageUrl:
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3",
    features: [],
  },
  {
    id: "3",
    title: "Cozy Studio for Rent",
    type: "APARTMENT",
    status: "FOR_RENT",
    price: 2500,
    location: "Manhattan, New York",
    bedrooms: 1,
    bathrooms: 1,
    area: 800,
    isFeatured: true,
    imageUrl:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3",
    features: [],
  },
  {
    id: "4",
    title: "Seaside Condo",
    type: "CONDO",
    status: "FOR_SALE",
    price: 750000,
    location: "Miami Beach, Florida",
    bedrooms: 3,
    bathrooms: 2,
    area: 1800,
    isFeatured: true,
    imageUrl:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3",
    features: [],
  },
];

const FeaturedProperties = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Featured Properties
          </h2>
          <p className="text-lg text-gray-600">
            Discover our handpicked selection of premium properties
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {sampleProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/properties"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-blue-700 transition-colors duration-300"
          >
            View All Properties
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;
