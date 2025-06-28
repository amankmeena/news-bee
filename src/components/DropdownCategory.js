// DropdownCategory.jsx
import React from 'react';
import { Link } from 'react-router-dom';

class DropdownCategory extends React.Component {
  categories = [
    // { path: "/", label: "General" },
    { path: "/", label: "World" },
    { path: "/business", label: "Business" },
    // { path: "/entertainment", label: "Entertainment" },
    // { path: "/health", label: "Health" },
    { path: "/science", label: "Science" },
    { path: "/sports", label: "Sports" },
    { path: "/technology", label: "Technology" },
    // { path: "/nation", label: "Nation" },
    { path: "/environment", label: "Environment" },
    { path: "/culture", label: "Culture" },
    { path: "/politics", label: "Politics" },
    { path: "/fashion", label: "Fashion" },
  ];

  getCurrentLabel = () => {
    const { pathname } = this.props.location;
    const current = this.categories.find(cat => cat.path === pathname);
    return current ? current.label : "Change Category";
  };

  render() {
    return (
      <li className="nav-item dropdown">
        <Link
          className="nav-link dropdown-toggle"
          to="/"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          {this.getCurrentLabel()}
        </Link>
        <ul className="dropdown-menu">
          {this.categories.map(({ path, label }) => (
            <li key={path}>
              <Link className="dropdown-item" to={path}>
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </li>
    );
  }
}

export default DropdownCategory;
