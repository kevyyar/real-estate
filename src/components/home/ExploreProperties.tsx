import PropertyCategoryCard from "../shared/PropertyCategoryCard";

// Sample data - will be replaced with dynamic data later
const categories = [
  {
    count: 17,
    category: "Apartments",
    slug: "apartments",
    imageUrl:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3",
  },
  {
    count: 10,
    category: "Single Family Homes",
    slug: "single-family-homes",
    imageUrl:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3",
  },
  {
    count: 8,
    category: "Luxury Villas",
    slug: "luxury-villas",
    imageUrl:
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3",
  },
  {
    count: 12,
    category: "Condos",
    slug: "condos",
    imageUrl:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3",
  },
];

const ExploreProperties = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Explore Our Properties
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our diverse range of properties across different
            categories, each offering unique features and lifestyles
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <PropertyCategoryCard
              key={category.slug}
              count={category.count}
              category={category.category}
              imageUrl={category.imageUrl}
              slug={category.slug}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExploreProperties;
