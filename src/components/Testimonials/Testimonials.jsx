import { useState } from "react";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import starSvg from "../../assets/landing/star.svg";

const testimonials = [
  {
    id: 1,
    name: "K. Smith",
    quote:
      "After a recent surgery, I was unable to leave my home, and the thought of not being able to receive the necessary rehabilitation worried me...",
    comment:
      "GoPhysio designed a personalized treatment plan tailored to my unique needs and gradually helped me regain my strength and mobility. The convenience of receiving therapy in the comfort of my own home resolved any stress or barriers associated with transportation or scheduling conflicts.",
  },
  {
    id: 2,
    name: "Derek Massa",
    quote:
      "After a recent surgery, I was unable to leave my home, and the thought of not being able to receive the necessary rehabilitation worried me...",
    comment:
      "GoPhysio designed a personalized treatment plan tailored to my unique needs and gradually helped me regain my strength and mobility. The convenience of receiving therapy in the comfort of my own home resolved any stress or barriers associated with transportation or scheduling conflicts.",
  },

  // Add more testimonials here
];

function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const handlePrevious = () => {
    setCurrentTestimonial((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentTestimonial((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };
  return (
    <div className="">
      <div className="max-w-7xl relative  mx-auto px-4 sm:px-6 lg:px-28">
        <div
          className="w-full  flex justify-center items-center"
          style={{ height: "70vh" }}
        >
          {testimonials.map((testimonial, index) => (
            <div
              className={`flex flex-col justify-center gap-5 transition-opacity duration-300 ease-in-out absolute ${
                index === currentTestimonial ? "opacity-100" : "opacity-0"
              }`}
              key={index}
            >
              <h1
                className="font-bold text-2xl text-center"
                style={{ color: "#3180BE" }}
              >
                {testimonial.quote}
              </h1>
              <p className="text-center font-normal text-lg">
                {testimonial.comment}
              </p>
              <div className="flex items-center justify-center gap-2 mt-4">
                <img src={starSvg} alt="" className="w-6 h-6" />
                <img src={starSvg} alt="" className="w-6 h-6" />
                <img src={starSvg} alt="" className="w-6 h-6" />
                <img src={starSvg} alt="" className="w-6 h-6" />
                <img src={starSvg} alt="" className="w-6 h-6" />
              </div>
              <span className="text-center text-black font-medium text-lg">
                {testimonial.name}
              </span>
            </div>
          ))}
          <div className="absolute w-full flex justify-between items-center">
            <div
              onClick={handlePrevious}
              className=" w-12 h-12 rounded-full hover:bg-gray-500 bg-gray-400 cursor-pointer flex items-center justify-center "
            >
              <NavigateBeforeIcon style={{ color: "white" }} />
            </div>
            <div
              onClick={handleNext}
              className="w-12 h-12 rounded-full hover:bg-gray-500 bg-gray-400 cursor-pointer flex items-center justify-center"
            >
              <NavigateNextIcon style={{ color: "white" }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
