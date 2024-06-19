"use client" //lado do cliente/usuário (a palavra async foi removida) não é mais assíncrono
import Image from "next/image";
import styles from "../page.module.css";
import { useEffect, useState } from "react";
import Spinner from "./Spinner";

export default function Main() {

  const [listProduct, setProduct] = useState([]);
  
  useEffect( () => { 
    const getProduct = async() => {
      const response = await fetch("https://fakestoreapi.com/products/");
      const data = await response.json();
      setProduct(data);
    }
    getProduct();
   },[]); //toda vez que a lista estiver vazia, ele vai disparar a função de pegar as informações

   const orderAz = () => {
    const listaAux = [...listProduct].sort((a,b) => //vai construir uma nova lista de forma ordenada (alfabético)
       a.title.localeCompare(b.title) );
       
       setProduct(listaAux);
   }

   const orderZa = () => {
    let listaAux = [...listProduct].sort((a,b) =>
      a.title.localeCompare(b.title) );
    
    listaAux = listaAux.reverse();
    setProduct(listaAux);
   }

   const orderPrice = () => {
    const listaAux = [...listProduct].sort((a,b) => //vai construir uma nova lista de forma ordenada (alfabético)
       (a.price - b.price) );
       
       setProduct(listaAux);
   }

   if( listProduct[0] == null){
    return <Spinner/>
   }

  return (
    <> {/* frame agrupa os elementos, para não ter que utilizar um agrupamento de classes */}
    <div className={styles.filters}>
      <div>
        <button onClick={ orderAz }> Az</button>
        <button onClick={ orderZa }> Za</button>
        <button onClick={ orderPrice }> Price</button>
      </div>
    </div>
    <main className={styles.body}>
      {listProduct.map((produto) => (
        <div className={styles.card} key={produto.id}>
          <h1>{produto.title}</h1>
          <Image width={300} height={300} src={produto.image} alt={produto.title} />
          <h3 className={styles.preco}>R$: {produto.price}</h3>
          <p>{produto.description}</p>
          <p>{produto.category}</p>
          <p>Quantidade de Avaliações: {produto.rating.count}</p>
        </div>
      ))}
    </main>
    </>
  );
}