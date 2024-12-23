import { Link } from "react-router";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./Banner.css";

// Sample slide data - you can replace these with your actual images and content
const slides = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3",
    title: "Luxury Homes",
    subtitle: "Discover Your Perfect Home",
    description:
      "Experience luxury living at its finest with our exclusive properties",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3",
    title: "Modern Living",
    subtitle: "Contemporary Design",
    description: "Explore our collection of modern architectural masterpieces",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3",
    title: "Prime Locations",
    subtitle: "Premium Neighborhoods",
    description: "Find your dream home in the most sought-after locations",
  },
];

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    cssEase: "linear",
    arrows: true,
    adaptiveHeight: true,
  };

  return (
    <div className="relative">
      <Slider {...settings}>
        {slides.map((slide) => (
          <div key={slide.id} className="relative">
            {/* Slide Container */}
            <div className="relative h-[600px]">
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url(${slide.image})`,
                }}
              >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-40" />
              </div>

              {/* Content */}
              <div className="relative h-full flex items-center">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
                  <div className="max-w-3xl">
                    {/* Animated elements */}
                    <h2 className="text-6xl font-bold mb-4 animate-fadeInUp">
                      {slide.title}
                    </h2>
                    <h3 className="text-3xl font-semibold mb-4 animate-fadeInUp animation-delay-200">
                      {slide.subtitle}
                    </h3>
                    <p className="text-xl mb-8 animate-fadeInUp animation-delay-400">
                      {slide.description}
                    </p>
                    <Link
                      to="/properties"
                      className="bg-white text-gray-900 px-8 py-3 rounded-md font-semibold hover:bg-opacity-90 transition-all duration-300 animate-fadeInUp animation-delay-600"
                    >
                      View Properties
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Banner;
