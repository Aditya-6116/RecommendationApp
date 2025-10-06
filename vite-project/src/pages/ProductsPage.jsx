import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const productsData = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 49.99,
    image: "https://via.placeholder.com/250x200.png?text=Headphones",
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 79.99,
    image: "https://via.placeholder.com/250x200.png?text=Smart+Watch",
  },
  {
    id: 3,
    name: "Bluetooth Speaker",
    price: 39.99,
    image: "https://via.placeholder.com/250x200.png?text=Speaker",
  },
  {
    id: 4,
    name: "Fitness Tracker",
    price: 59.99,
    image: "https://via.placeholder.com/250x200.png?text=Tracker",
  },
  {
    id: 5,
    name: "Gaming Mouse",
    price: 29.99,
    image: "https://via.placeholder.com/250x200.png?text=Mouse",
  },
  {
    id: 6,
    name: "Mechanical Keyboard",
    price: 89.99,
    image: "https://via.placeholder.com/250x200.png?text=Keyboard",
  },
];

const ProductsPage = () => {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
    alert(`${product.name} added to cart!`);
  };

  const handleViewCart = () => {
    navigate("/cart", { state: { cart } });
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>🛒 <span style={styles.highlight}>Products</span></h1>

      <div style={styles.grid}>
        {productsData.map((product) => (
          <div key={product.id} style={styles.card}>
            <img src={product.image} alt={product.name} style={styles.image} />
            <h3 style={styles.productName}>{product.name}</h3>
            <p style={styles.price}>${product.price.toFixed(2)}</p>
            <button
              style={styles.addToCartButton}
              onClick={() => handleAddToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      <button style={styles.viewCartButton} onClick={handleViewCart}>
        View Cart ({cart.length})
      </button>
    </div>
  );
};

const styles = {
  container: {
    padding: "50px 30px",
    textAlign: "center",
    background: "#f9f9ff",
    minHeight: "100vh",
    fontFamily: "Poppins, sans-serif",
  },
  title: {
    fontSize: "2.5rem",
    marginBottom: "40px",
  },
  highlight: {
    color: "#667eea",
    fontWeight: "700",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "30px",
    justifyContent: "center",
  },
  card: {
    background: "#fff",
    borderRadius: "15px",
    boxShadow: "0 5px 20px rgba(0,0,0,0.1)",
    padding: "20px",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
  },
  image: {
    width: "100%",
    height: "180px",
    borderRadius: "10px",
    objectFit: "cover",
    marginBottom: "15px",
  },
  productName: {
    fontSize: "1.2rem",
    fontWeight: "600",
    marginBottom: "10px",
    color: "#333",
  },
  price: {
    fontSize: "1rem",
    fontWeight: "700",
    marginBottom: "15px",
    color: "#ff5252",
  },
  addToCartButton: {
    background: "#ff6b6b",
    color: "#fff",
    border: "none",
    padding: "10px 20px",
    borderRadius: "8px",
    fontSize: "1rem",
    cursor: "pointer",
    transition: "0.3s",
  },
  viewCartButton: {
    marginTop: "40px",
    background: "#667eea",
    color: "#fff",
    border: "none",
    padding: "12px 25px",
    borderRadius: "10px",
    cursor: "pointer",
    fontWeight: "600",
    fontSize: "1rem",
  },
};

export default ProductsPage;
