import Image from "next/image"
import style from "../page.module.css"

export default async function Main() {

  const response = await fetch("https://fakestoreapi.com/products/")
  const data = await response.json();

  return (
    <main className={style.body}>
      {data.map((products) =>
        <div className={style.card} key={products.id}>
          <h1>{products.title}</h1>
          <Image width={300} height={300} src={products.image} />
          <h3 className={style.preco}>R$: {products.price}</h3>
          <p>{products.description}</p>
          <p>{products.category}</p>
        </div>
      )}
    </main>
  );
}