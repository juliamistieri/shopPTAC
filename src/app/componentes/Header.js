import React from "react";
import style from "./header.module.css";
import Image from "next/image";

const Header = () => {
  return (
    <header className={style.header}>
      <div className={style.logo}>
        <Image
          width={100}
          height={100}
          src={"https://static.nike.com.br/v10-390-0/images/brands/logo.svg"} 
          alt="Logo da loja"
        />
      </div>
      <p className={style.marketing}>Transforme o casual em essencial: descubra nossa coleção que une conforto e estilo para o seu dia a dia</p>
      <button className={style.addButton}>Adicionar produto</button>
      <div className={style.cartIcon}>
        <Image
          width={50}
          height={50}
          src={"https://cdn-icons-png.flaticon.com/512/6713/6713723.png"}
          alt="Ícone de Carrinho"
        />
      </div>
    </header>
  );
};

export default Header;