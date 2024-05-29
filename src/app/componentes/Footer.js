import React from "react";
import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className="footer">
    <ul className="social-links">
      <li>Instagram</li>
      <li>Facebook</li>
      <li>Twiter</li>
      <li>TikTok</li>
    </ul>
    <p>data: [30/03/2007]</p>
    <div className="logo">Logo da empresa</div>
  </footer>
  );
}