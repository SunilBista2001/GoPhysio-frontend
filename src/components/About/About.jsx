import AboutBackgroundPng from "../../assets/landing/about_bg.png";
import AboutMain1Png from "../../assets/landing/about_main.png";
import GuidancePng from "../../assets/landing/guidance_img.png";
import FeedbackPng from "../../assets/landing/feedback_img.png";
import ReportingPng from "../../assets/landing/reporting_img.png";

const aboutImages = [
  {
    id: 1,
    img: GuidancePng,
    title: "Guidance",
  },
  {
    id: 2,
    img: FeedbackPng,
    title: "Feedback",
  },
  {
    id: 3,
    img: ReportingPng,
    title: "Reporting",
  },
];

const About = () => {
  return (
    <div
      className="h-full "
      id="about"
      style={{
        backgroundImage: `url(${AboutBackgroundPng})`,
        backgroundSize: "cover",
      }}
    >
      <div className="max-w-7xl p-10 mx-auto px-4 sm:px-6 lg:px-16">
        {/* wrapper */}
        <div className="flex flex-col ">
          <div className="w-full flex justify-between items-center gap-8 ">
            <div className="flex flex-col gap-6 text-white font-semibold">
              <span className="text-3xl text-center  ">
                EFFECTIVE AND EFFICIENT
              </span>
              <p className="font-normal  text-lg">
                GoPhysio is an advanced, intelligent and interactive system
                designed for home, office, or remote use. The system assists the
                patients and clinicians in arriving rapidly at the correct
                treatment of their condition. It also allows clinicians to
                monitor progress, change protocols and treat more patients,
                concurrently without giving up oversight.
              </p>
            </div>
            <img
              src={AboutMain1Png}
              alt=""
              style={{ width: "420px", height: "350px" }}
            />
          </div>
          <div className="mt-16 grid grid-cols-3 text-white">
            {aboutImages.map((item, index) => (
              <div className="text-center text-xl font-normal" key={index}>
                <span>{item.title}</span>
                <img src={item.img} alt="" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
