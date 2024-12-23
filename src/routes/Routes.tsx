import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "../components/layout/RootLayout";
import Agents from "../pages/Agents";
import Home from "../pages/Home";
import Properties from "../pages/Properties";

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
        path: "agents",
        element: (
          <div className="p-8">
            <Agents />
          </div>
        ),
      },
      {
        path: "contact",
        element: <div className="p-8">Contact Page (Coming Soon)</div>,
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
