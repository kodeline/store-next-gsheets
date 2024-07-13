import { GetStaticProps } from "next";
import React from "react";
import { Product } from "../product/types";
import api from "../product/api";
import Link from "next/link";

interface Props {
  products: Product[];
}

function parseCurrency(value: number): string {
  return value.toLocaleString('es-AR', {
    style: "currency",
    currency: "ARS",
  });
}

const IndexRoute: React.FC<Props> = ({ products }) => {

  const [cart, setCart] = React.useState<Product[]>([]);
  const text = React.useMemo(() => {
    return cart
      .reduce((message, product) => message.concat(`* ${product.title} - ${parseCurrency(product.price)} ARS\n`), ``,)
      .concat(`\nTotal: ${parseCurrency(cart.reduce((total, product) => total + product.price, 0))}`);
  }, [cart]); 
   

  return (
    <>
      {/* Sección de Pedidos */}
      <Link href={`https://wa.me/5491158988500?text=${encodeURIComponent(text)}`} className="container cart flex justify-end m-0">
        <button className="bg-green-600 hover:bg-green-700 m-1 p-2 rounded-3xl text-white"> Completar Pedido ({cart.length}) </button>
      </Link>
      {/* Sección de Productos */}
      <div className="container grid gap-6 m-auto mt-[5%] grid-cols-5">
        {products.map((product) =>
          <div className="card grid w-11/12" key={product.id}>
            <img className="rounded-md h-80 w-[100%] " src={product.image} loading="lazy" />
            <h3>{product.title}</h3>
            <p className="text-right text-lg text-black">{parseCurrency(product.price)}</p>
            <button 
              onClick={() => setCart(cart => cart.concat(product))} 
              className="bg-blue-500 hover:bg-blue-700 m-1 p-1 w-10/12 justify-self-center rounded-2xl text-white">Agregar</button>
          </div>
        )}
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const products = await api.list();

  return {
    revalidate: 10,
    props: {
      products,
    },
  };
};

export default IndexRoute;