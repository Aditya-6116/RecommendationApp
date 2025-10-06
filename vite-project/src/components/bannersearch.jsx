import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./bannersearch.css";

const BannerWithSearch = ({
  title = "Your AI-Powered Shopping Genie",
  subtitle = "Smart Choices, Made Just for You",
  onStartShopping,
}) => {
  const [showLoginOptions, setShowLoginOptions] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      console.log("Searching for:", searchQuery);
      // Add search logic here if needed
    }
  };

  const toggleLoginOptions = () => {
    setShowLoginOptions(!showLoginOptions);
  };

  return (
    <section className="banner-with-search">
      {/* Brand Name */}
      <div className="banner-brand" onClick={() => navigate("/")}>
        BUYGENIE
      </div>

      <div className="banner-content">
        <h1>{title}</h1>
        <p>{subtitle}</p>

        <form className="search-form" onSubmit={handleSearch}>
          <div className="search-container">
            <input
              type="text"
              placeholder="Search for products, brands, or categories..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
            <button type="submit" className="search-button">
              🔍 Search
            </button>
          </div>
        </form>

        <div className="banner-actions">
          <button className="btn-primary" onClick={onStartShopping}>
            Start Shopping
          </button>
          <button className="btn-secondary">Learn How Our AI Works</button>
          <button className="btn-tertiary" onClick={toggleLoginOptions}>
            Login / Register
          </button>
        </div>

        {showLoginOptions && (
          <div className="login-options">
            <button
              className="btn-login-option"
              onClick={() => navigate("/login")}
            >
              Login
            </button>
            <button
              className="btn-login-option"
              onClick={() => navigate("/register")}
            >
              Register
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default BannerWithSearch;
