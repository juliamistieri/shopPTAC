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
          src={"https://30praum.com/cdn/shop/files/733374D3-FB56-4348-A1C2-50F54ABE951B_500x499.png"} 
          alt="Logo da loja"
        />
      </div>
      <p className={style.marketing}>VISTA O RITMO, SINTA A MÚSICA NO SEU ESTILO!</p>
      <button className={style.addButton}>Adicionar produto</button>
      <div className={style.cartIcon}>
        <Image
          width={70}
          height={48}
          src={"https://static.vecteezy.com/system/resources/previews/011/234/647/non_2x/red-shopping-cart-free-vector.jpg"}
          alt="Ícone de Carrinho"
        />
      </div>
    </header>
  );
};

export default Header;