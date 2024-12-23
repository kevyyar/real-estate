import { Link, Outlet } from "react-router-dom";
import { navLinks } from "../../utils";

const RootLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex-shrink-0">
              <Link to="/" className="text-xl font-bold text-gray-800">
                Real Estate
              </Link>
            </div>
            <div className="flex gap-4 items-center">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center">
            © 2024 Real Estate. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default RootLayout;

{
  /* Main Content */
}
