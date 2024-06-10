import Image from "next/image";
import style from "../page.module.css";

export default async function Main() {
  const resposta = await fetch("https://fakestoreapi.com/products/");
  const dados = await resposta.json();

  return (
    <main className={style.body}>
      {dados.map((produto) => (
        <div className={style.card} key={produto.id}>
          <h1>{produto.title}</h1>
          <Image width={300} height={300} src={produto.image} alt={produto.title} />
          <h3 className={style.preco}>R$: {produto.price}</h3>
          <p>{produto.description}</p>
          <p>{produto.category}</p>
          <p>Quantidade de Avaliações: {produto.rating.count}</p>
        </div>
      ))}
    </main>
  );
}