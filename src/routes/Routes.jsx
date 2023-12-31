import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "contact",
        element: <h1>Hey</h1>,
      },
      {
        path: "home",
        element: <Home />,
      },
    ],
  },
]);

export default router;
