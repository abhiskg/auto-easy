import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";

const rootRouter = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    // children: [
    //   {
    //     index: true,
    //     element: <Home />,
    //   },
    // ],
  },
]);

export default rootRouter;
