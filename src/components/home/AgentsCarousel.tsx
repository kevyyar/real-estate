import Slider from "react-slick";
import { Agent } from "../../types/agent";
import AgentCard from "../shared/AgentCard";
import "./AgentsCarousel.css";

// Sample data - will be replaced with dynamic data later
const agents: Agent[] = [
  {
    id: "1",
    name: "Sarah Johnson",
    title: "Senior Real Estate Agent",
    description:
      "Specializing in luxury properties with over 10 years of experience in the real estate market.",
    imageUrl:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3",
    slug: "sarah-johnson",
    stats: {
      propertiesSold: 150,
      experience: 10,
      activeListings: 12,
    },
  },
  {
    id: "2",
    name: "Michael Chen",
    title: "Property Investment Specialist",
    description:
      "Expert in residential and commercial property investments, helping clients make informed decisions.",
    imageUrl:
      "https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-4.0.3",
    slug: "michael-chen",
    stats: {
      propertiesSold: 200,
      experience: 8,
      activeListings: 15,
    },
  },
  {
    id: "3",
    name: "Emily Rodriguez",
    title: "Luxury Home Specialist",
    description:
      "Dedicated to finding the perfect luxury homes for discerning clients.",
    imageUrl:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3",
    slug: "emily-rodriguez",
    stats: {
      propertiesSold: 120,
      experience: 6,
      activeListings: 8,
    },
  },
  {
    id: "4",
    name: "David Thompson",
    title: "Commercial Real Estate Agent",
    description:
      "Experienced in commercial property transactions and business real estate solutions.",
    imageUrl:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3",
    slug: "david-thompson",
    stats: {
      propertiesSold: 180,
      experience: 12,
      activeListings: 10,
    },
  },
  {
    id: "5",
    name: "Lisa Anderson",
    title: "First-Time Home Specialist",
    description:
      "Helping first-time buyers navigate the real estate market with confidence.",
    imageUrl:
      "https://images.unsplash.com/photo-1619343177062-b77bb932e1f2?ixlib=rb-4.0.3",
    slug: "lisa-anderson",
    stats: {
      propertiesSold: 90,
      experience: 5,
      activeListings: 6,
    },
  },
];

const AgentsCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Meet Our Real Estate Agents
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our team of experienced agents is here to help you find your perfect
            property
          </p>
        </div>

        {/* Carousel */}
        <div className="relative px-4 agents-carousel pb-12">
          <Slider {...settings}>
            {agents.map((agent) => (
              <div key={agent.id} className="px-4">
                <AgentCard agent={agent} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default AgentsCarousel;
