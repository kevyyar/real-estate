import { FaChevronRight, FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

interface BreadcrumbItem {
  label: string;
  path: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

const Breadcrumb = ({ items }: BreadcrumbProps) => {
  return (
    <nav className="flex items-center space-x-2 text-gray-500 text-sm">
      <Link
        to="/"
        className="flex items-center hover:text-blue-600 transition-colors"
      >
        <FaHome className="w-4 h-4" />
      </Link>
      {items.map((item, index) => (
        <div key={item.path} className="flex items-center">
          <FaChevronRight className="w-3 h-3 mx-2" />
          {index === items.length - 1 ? (
            <span className="text-gray-900 font-medium">{item.label}</span>
          ) : (
            <Link
              to={item.path}
              className="hover:text-blue-600 transition-colors"
            >
              {item.label}
            </Link>
          )}
        </div>
      ))}
    </nav>
  );
};

export default Breadcrumb;
