import React from "react";

const Header = () => {
  return (
    <header style={styles.header}>
      <h2>Student Management App</h2>

      <nav>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/students" style={styles.link}>Students</Link>
        <Link to="/about" style={styles.link}>About</Link>
      </nav>
    </header>
  );
};

const styles = {
  header: {
    background: "#222",
    color: "#fff",
    padding: "15px",
  },
  link: {
    marginRight: "15px",
    color: "#fff",
    textDecoration: "none",
  },
};

export default Header;