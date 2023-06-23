import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "contact",
        element: <h1>Hey</h1>,
      },
    ],
  },
]);

export default router;
