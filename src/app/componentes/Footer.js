import React from "react";
import style from "./footer.module.css";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className={style.footer}>
      <ul className={style.social}>
        <li>Mail</li>
        <li>Instagram</li>
        <li>WhatsApp</li>
        <li>Facebook</li>
      </ul>
      <p>JULIA MISTIERI</p>
      <div className={style.logo}>
        <Image
          width={100}
          height={100}
          src={"https://30praum.com/cdn/shop/files/733374D3-FB56-4348-A1C2-50F54ABE951B_500x499.png"} 
          alt="Logo da empresa"
        />
      </div>
    </footer>
  );
};

export default Footer;