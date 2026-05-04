import React from "react";


const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p>© 2026 Student App | React Project</p>
    </footer>
  );
};

const styles = {
  footer: {
    marginTop: "20px",
    padding: "10px",
    textAlign: "center",
    background: "#f4f4f4",
  },
};

export default Footer;