import { FaChevronRight, FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

interface BreadcrumbProps {
  items: {
    label: string;
    path: string;
  }[];
  className?: string;
}

const Breadcrumb = ({ items, className = "" }: BreadcrumbProps) => {
  return (
    <nav className={className}>
      <ol className="flex items-center gap-2">
        <li>
          <Link
            to="/"
            className="flex items-center gap-1 hover:text-blue-600 transition-colors"
          >
            <FaHome className="w-4 h-4" />
            <span>Home</span>
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={item.path} className="flex items-center gap-2">
            <FaChevronRight className="w-3 h-3 text-gray-400" />
            {index === items.length - 1 ? (
              <span className="text-gray-600">{item.label}</span>
            ) : (
              <Link
                to={item.path}
                className="hover:text-blue-600 transition-colors"
              >
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
