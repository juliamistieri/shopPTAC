import React from "react";
import style from "./footer.module.css";
import Image from "next/image";

export default function Footer (){
  return (
    <footer className={style.footer}>
      <ul className={style.social}>
        <li>Instagram</li>
        <li>Facebook</li>
        <li>Twitter</li>
        <li>YouTube</li>
      </ul>
      <p>Desde 30 de março de 2007</p>
      <div className={style.logo}>
        <Image
          width={100}
          height={100}
          src={"https://static.nike.com.br/v10-390-0/images/brands/logo.svg"}
        />
      </div>
    </footer>
  );
};