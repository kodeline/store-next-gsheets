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
        <button className="bg-green-600"> Completar Pedido ({cart.length}) </button>
      </Link>
      {/* Sección de Productos */}
      <div className="container grid gap-6 m-auto mt-[5%] align-items-center grid-cols-6">
        {products.map((product) =>
          <div className="card bg-gray-900" key={product.id}>
            <img src={product.image} />
            <h3>{product.title}</h3>
            <p>{parseCurrency(product.price)}</p>
            <button onClick={() => setCart(cart => cart.concat(product))} className="bg-red-500">Agregar</button>
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