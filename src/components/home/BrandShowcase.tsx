const brands = [
  {
    id: 1,
    name: "Luxury Estates",
    logo: "https://placehold.co/200x80?text=Luxury+Estates&font=roboto",
  },
  {
    id: 2,
    name: "Premium Properties",
    logo: "https://placehold.co/200x80?text=Premium+Properties&font=roboto",
  },
  {
    id: 3,
    name: "Global Homes",
    logo: "https://placehold.co/200x80?text=Global+Homes&font=roboto",
  },
  {
    id: 4,
    name: "Elite Housing",
    logo: "https://placehold.co/200x80?text=Elite+Housing&font=roboto",
  },
  {
    id: 5,
    name: "Modern Living",
    logo: "https://placehold.co/200x80?text=Modern+Living&font=roboto",
  },
  {
    id: 6,
    name: "Urban Spaces",
    logo: "https://placehold.co/200x80?text=Urban+Spaces&font=roboto",
  },
];

const BrandShowcase = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Trusted by Leading Brands
          </h2>
          <p className="text-gray-600">
            Partnering with the most prestigious names in real estate
          </p>
        </div>

        {/* Logos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {brands.map((brand) => (
            <div
              key={brand.id}
              className="flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110"
            >
              <img
                src={brand.logo}
                alt={brand.name}
                className="max-h-12 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandShowcase;
