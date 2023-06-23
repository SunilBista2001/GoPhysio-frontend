import About from "../../components/About/About";
import Footer from "../../components/Footer/Footer";
import Hero from "../../components/Hero/Hero";
import Testimonials from "../../components/Testimonials/Testimonials";

const Home = () => {
  return (
    <div style={{ backgroundColor: "#E1ECE6" }}>
      <Hero />
      <About />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Home;
