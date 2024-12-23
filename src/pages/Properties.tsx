import { useState } from "react";
import Breadcrumb from "../components/shared/Breadcrumb";
import Pagination from "../components/shared/Pagination";
import PropertyCard from "../components/shared/PropertyCard";
import { Property, PropertyStatus, PropertyType } from "../types/property";

// Generate more sample data
const generateSampleProperties = (): Property[] => {
  const locations = [
    "New York",
    "Los Angeles",
    "Miami",
    "Chicago",
    "San Francisco",
    "Boston",
    "Seattle",
    "Denver",
  ];

  // Collection of real estate images from Unsplash
  const propertyImages = [
    "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=800&q=80", // Modern House
    "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80", // Luxury Villa
    "https://images.unsplash.com/photo-1576941089067-2de3c901e126?auto=format&fit=crop&w=800&q=80", // Single Family
    "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80", // Modern Apartment
    "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80", // Townhouse
    "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?auto=format&fit=crop&w=800&q=80", // Contemporary
    "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80", // Suburban Home
    "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=800&q=80", // Classic House
    "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=800&q=80", // Modern Condo
    "https://images.unsplash.com/photo-1416331108676-a22ccb276e35?auto=format&fit=crop&w=800&q=80", // Beach House
    "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80", // Mountain Villa
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80", // City Apartment
  ];

  const types = ["APARTMENT", "HOUSE", "VILLA", "CONDO"] as const;
  const statuses = ["FOR_SALE", "FOR_RENT"] as const;
  const properties: Property[] = [];

  // Generate 32 properties
  for (let i = 1; i <= 32; i++) {
    const isFeatured = i <= 8; // First 8 properties are featured
    const location = locations[Math.floor(Math.random() * locations.length)];
    const type = types[Math.floor(Math.random() * types.length)];
    const status = statuses[Math.floor(Math.random() * statuses.length)];
    const bedrooms = Math.floor(Math.random() * 5) + 1;
    const bathrooms = Math.floor(Math.random() * 3) + 1;
    const area = Math.floor(Math.random() * 2000) + 800;
    const price =
      status === "FOR_SALE"
        ? Math.floor(Math.random() * 900000) + 100000
        : Math.floor(Math.random() * 3000) + 1000;

    // Get a random image from our collection and add quality parameters
    const baseImage =
      propertyImages[Math.floor(Math.random() * propertyImages.length)];
    const imageUrl = `${baseImage}?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80`;

    properties.push({
      id: i.toString(),
      title: `${type.charAt(0) + type.toLowerCase().slice(1)} in ${location}`,
      type,
      status,
      price,
      location: `${location}, USA`,
      bedrooms,
      bathrooms,
      area,
      isFeatured,
      imageUrl,
      features: [],
    });
  }

  return properties;
};

const sampleProperties = generateSampleProperties();

type SortOption =
  | "price-asc"
  | "price-desc"
  | "date-asc"
  | "date-desc"
  | "featured";

const sortOptions = [
  { value: "featured", label: "Featured" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "date-desc", label: "Newest First" },
  { value: "date-asc", label: "Oldest First" },
];

const typeOptions = [
  { value: "ALL", label: "All Types" },
  { value: "APARTMENT", label: "Apartments" },
  { value: "HOUSE", label: "Houses" },
  { value: "VILLA", label: "Villas" },
  { value: "CONDO", label: "Condos" },
];

const ITEMS_PER_PAGE = 12;

const Properties = () => {
  const [activeTab, setActiveTab] = useState<"ALL" | PropertyStatus>("ALL");
  const [activeType, setActiveType] = useState<"ALL" | PropertyType>("ALL");
  const [sortBy, setSortBy] = useState<SortOption>("featured");
  const [currentPage, setCurrentPage] = useState(1);

  const breadcrumbItems = [{ label: "Properties", path: "/properties" }];

  const filteredProperties = sampleProperties.filter((property) => {
    // Status filter
    if (activeTab !== "ALL" && property.status !== activeTab) {
      return false;
    }
    // Type filter
    if (activeType !== "ALL" && property.type !== activeType) {
      return false;
    }
    return true;
  });

  const sortedProperties = [...filteredProperties].sort((a, b) => {
    switch (sortBy) {
      case "price-asc":
        return a.price - b.price;
      case "price-desc":
        return b.price - a.price;
      case "featured":
        return b.isFeatured ? 1 : -1;
      default:
        return 0;
    }
  });

  // Calculate pagination
  const totalPages = Math.ceil(sortedProperties.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedProperties = sortedProperties.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  // Reset to first page when filters change
  const handleTabChange = (tab: typeof activeTab) => {
    setActiveTab(tab);
    setCurrentPage(1);
  };

  const handleTypeChange = (type: typeof activeType) => {
    setActiveType(type);
    setCurrentPage(1);
  };

  const handleSortChange = (sort: SortOption) => {
    setSortBy(sort);
    setCurrentPage(1);
  };

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="mb-8">
          <Breadcrumb items={breadcrumbItems} />
        </div>

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">All Properties</h1>
          <p className="mt-2 text-gray-600">
            Explore our collection of premium properties
          </p>
        </div>

        {/* Filters and Sort */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
            {/* Status Tabs */}
            <div className="flex space-x-1 bg-white rounded-lg p-1 shadow-sm">
              {["ALL", "FOR_SALE", "FOR_RENT"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => handleTabChange(tab as typeof activeTab)}
                  className={`
                    px-4 py-2 rounded-md text-sm font-medium
                    ${
                      activeTab === tab
                        ? "bg-blue-600 text-white"
                        : "text-gray-600 hover:text-gray-900"
                    }
                    transition-colors duration-150
                  `}
                >
                  {tab === "ALL"
                    ? "All"
                    : tab === "FOR_SALE"
                    ? "For Sale"
                    : "For Rent"}
                </button>
              ))}
            </div>

            {/* Type Filter */}
            <select
              value={activeType}
              onChange={(e) =>
                handleTypeChange(e.target.value as typeof activeType)
              }
              className="appearance-none bg-white border border-gray-300 rounded-lg py-2 pl-4 pr-10 text-sm font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm"
            >
              {typeOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          {/* Sort Dropdown */}
          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => handleSortChange(e.target.value as SortOption)}
              className="appearance-none bg-white border border-gray-300 rounded-lg py-2 pl-4 pr-10 text-sm font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm"
            >
              {sortOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-12">
          {paginatedProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        )}

        {/* No Results Message */}
        {paginatedProperties.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              No properties found
            </h3>
            <p className="text-gray-600">
              Try adjusting your filters to find what you're looking for.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Properties;
