import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div className="">
      <span className="text-red-500 font-semibold">Root</span>
      <Outlet />
    </div>
  );
};

export default Root;
