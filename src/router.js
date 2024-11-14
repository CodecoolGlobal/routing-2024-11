import { createBrowserRouter } from "react-router-dom";
import { About, Home, Layout, User } from "./App";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/about',
          element: <About />
        },
        {
          path: '/user/:username',
          element: <User />
        }
      ]
    }
  ]);

  export default router;