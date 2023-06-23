/* eslint-disable react/prop-types */
import LogoPng from "../../assets/logo/gp-logo.png";
import BackgroundPng from "../../assets/landing/landing-bg.jpg";

const Link = ({ title, addr }) => {
  return (
    <li className="mx-3" style={{ color: "#166FAA" }}>
      <a
        className="hover:underline "
        style={{ fontSize: "14px", fontWeight: "700" }}
        href={addr}
      >
        {title}
      </a>
    </li>
  );
};

const Hero = () => {
  return (
    <div
      className="min-h-screen "
      style={{
        backgroundImage: `url(${BackgroundPng})`,
        backgroundSize: "cover",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
        {/* Navbar */}
        <nav className="flex h-28 items-center justify-between">
          <img
            src={LogoPng}
            alt="gp-logo"
            className="w-40 h-40 object-contain"
          />
          <ul className="hidden md:flex items-center">
            <Link title="HOME" addr="#" />
            <Link title="ABOUT" addr="#about" />
            <Link title="GALLERY" addr="#" />
            <Link title="TESTIMONIALS" addr="#" />
            <Link title="CONTACT" addr="#footer" />
          </ul>
        </nav>
        <div className=" mt-14  md:mt-40 font-normal">
          <p
            className="sm:text-sm  text-black"
            style={{
              fontSize: "1.3rem",
              lineHeight: "1.2",
            }}
          >
            Clinically effective Physical Therapy...{" "}
            <strong className="font-medium"> AT HOME! </strong>
          </p>
          <p
            className="my-5 text-black leading-normal"
            style={{
              fontSize: "2.65rem",
              letterSpacing: "0.02em",
              fontWeight: "700",
            }}
          >
            Physical therapy, Rehab, <br />
            and Wellness{" "}
          </p>
          <span className="text-lg underline text-gray-600">
            GoPhysio™ acts as an Extension of the clinic
          </span>
          <br />
          <button
            style={{ background: "#1770A6" }}
            className="text-white py-2 px-6 mt-8 rounded-lg font-semibold text-lg"
          >
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
