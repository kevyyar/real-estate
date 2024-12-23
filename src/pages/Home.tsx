import AgentsCarousel from "../components/home/AgentsCarousel";
import BrandShowcase from "../components/home/BrandShowcase";
import ContactFooter from "../components/home/ContactFooter";
import ExploreProperties from "../components/home/ExploreProperties";
import FeaturedProperties from "../components/home/FeaturedProperties";
import PropertyInquiry from "../components/home/PropertyInquiry";
import Banner from "../components/shared/Banner";

const Home = () => {
  return (
    <div>
      <Banner />
      <FeaturedProperties />
      <PropertyInquiry />
      <ExploreProperties />
      <AgentsCarousel />
      <BrandShowcase />
      <ContactFooter />
    </div>
  );
};

export default Home;
