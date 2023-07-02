import React from "react";
import { Product } from "@/product/types";

interface Props {
  products: Product[];
}

const Cart: React.FC<Props> = ({products}) => {
  const [cart, setCart] = React.useState<Product[]>([])

  return(
    <button onClick={() => setCart(cart => cart.concat(products))} className="bg-red-500">Agregar</button>
  )
}

export default Cart;