import React from 'react';

const Navbar = ({ setCategory }) => {
  // Define a handler function to call setCategory with the right category
  const handleCategoryChange = (category) => {
    return () => setCategory(category);
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Home</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <div className="nav-link" onClick={handleCategoryChange("technology")}>Technology</div>
            </li>
            <li className="nav-item">
              <div className="nav-link" onClick={handleCategoryChange("business")}>Business</div>
            </li>
            <li className="nav-item">
              <div className="nav-link" onClick={handleCategoryChange("health")}>Health</div>
            </li>
            <li className="nav-item">
              <div className="nav-link" onClick={handleCategoryChange("sports")}>Sports</div>
            </li>
            <li className="nav-item">
              <div className="nav-link" onClick={handleCategoryChange("entertainment")}>Entertainment</div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
