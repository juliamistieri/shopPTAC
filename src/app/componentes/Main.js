"use client" //lado do cliente/usuário (a palavra async foi removida) não é mais assíncrono
import Image from "next/image";
import styles from "../page.module.css";
import { useEffect, useState } from "react";
import Spinner from "./Spinner";
import ErrorFetch from "./ErrorFetch";

export default function Main() {

  const [listProduct, setListProduct] = useState([]);
  const [listComplete, setListComplete] = useState([]);
  const [textSearch, setTextSearch] = useState('');
  const [isError, setIsError] = useState(false);
  
  useEffect( () => { 
    const getProduct = async() => {
      try{
        const response = await fetch("https://fakestoreapi.com/products/");
        const data = await response.json();
        setListProduct(data);
        setListComplete(data);
      }
      catch{
        setIsError(true);
      }
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

   const orderPriceAz = () => {
    const listaAux = [...listProduct].sort((a,b) => //vai construir uma nova lista de forma ordenada (alfabético)
       (a.price - b.price) );
       
       setProduct(listaAux);
   }

   
   const orderPriceZa = () => {
    let listaAux = [...listProduct].sort((a,b) => //vai construir uma nova lista de forma ordenada (alfabético)
       (a.price - b.price) );
       
       listaAux = listaAux.reverse();
       setProduct(listaAux);
   }

   const search = (text) => {
    setTextSearch(text);

    if (text == ''){
      setListProduct(listComplete);
      return
    }
    const newList = listProduct.filter((product) =>
      product.title.toUpperCase().trim().includes(textSearch.toUpperCase().trim())
    );
    setListProduct(newList); 
  }

  if (isError == true){
    return <ErrorFetch/>
  }

  if (listComplete[0] == null){
    <main className={styles.main}/>
    return <Spinner/>
   }  


  return (
    <> {/* frame agrupa os elementos, para não ter que utilizar um agrupamento de classes */}
    <div className={styles.filters}>
      <div>
        <button onClick={ orderAz }> Az</button>
        <button onClick={ orderZa }> Za</button>
        <button onClick={ orderPriceAz }> PriceAz</button>
        <button onClick={ orderPriceZa }> PriceZa</button>
        <input type="text" value={textSearch}
        placeholder="Pesquise um produto"
        onChange={(event) => search(event.target.value) }/>
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