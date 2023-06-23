import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function Footer() {
  return (
    <div
      className="h-full mt-8"
      id="footer"
      style={{ backgroundColor: "#116CB6" }}
    >
      <div className="max-w-7xl p-10 mx-auto px-4 sm:px-6 lg:px-16">
        {/* wrapper */}
        <div className="flex text-white items-center justify-between">
          <span className="text-lg font-normal">
            Copyright 2022 GoPhysio <br />
            All Rights Reserved
          </span>
          <div className="flex items-center gap-4 ">
            <FacebookIcon style={{ height: "28px", width: "28px" }} />
            <LinkedInIcon style={{ height: "28px", width: "28px" }} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
