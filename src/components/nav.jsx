import logo from "../assets/shared/desktop/logo.svg";
import { Link } from "react-router-dom";
import Basket from "./Basket";
import { useData } from "../Context/DataContext";
function NavBar() {
  const { products, loading, error } = useData();

  if (loading) return null;
  if (error) return null;

  // Get unique categories from the products array
  const categories = [...new Set(products.map((product) => product.category))];

  // Define the desired order of categories
  const desiredOrder = ["headphones", "speakers", "earphones"];

  // Sort the categories based on the desired order
  const sortedCategories = categories.sort((a, b) => {
    return desiredOrder.indexOf(a) - desiredOrder.indexOf(b);
  });

  return (
    <nav className="nav">
      <img className="nav-link logo" src={logo} alt="Logo" />
      <Link to="/" className="nav-link">
        HOME
      </Link>

      {sortedCategories.map((category) => (
        <Link to={`/${category}`} key={category} className="nav-link">
          {category.toUpperCase()}
        </Link>
      ))}
      <Basket />
    </nav>
  );
}

export default NavBar;
