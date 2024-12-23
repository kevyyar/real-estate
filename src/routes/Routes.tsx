import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "../components/layout/RootLayout";
import Agents from "../pages/Agents";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import Properties from "../pages/Properties";
import PropertyDetails from "../pages/PropertyDetails";

// Create routes configuration
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "properties",
        element: <Properties />,
      },
      {
        path: "properties/:id",
        element: <PropertyDetails />,
      },
      {
        path: "agents",
        element: <Agents />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "*",
        element: (
          <div className="flex items-center justify-center h-[50vh]">
            <h1 className="text-2xl font-bold text-gray-900">
              404 - Page Not Found
            </h1>
          </div>
        ),
      },
    ],
  },
]);

const Routes = () => {
  return <RouterProvider router={router} />;
};

export default Routes;
