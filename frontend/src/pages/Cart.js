import React, { useState, useEffect } from 'react'
import ListItem from '../components/ListItem'


const Cart = () => {
  console.log("hi")
  const [cart, setCart] = useState([]);

  useEffect(() => {
    getCart();
  }, []);

  const getCart = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/api/cart/');
      console.log(response)
      const data = await response.json();
      console.log("CART")
      console.log(data)
      setCart(data);
    } catch (error) {
      console.error('Error retrieving cart:', error);
    }
  };

  if (Object.keys(cart).length === 0 && cart.constructor === Object) {
    return (
    <div className="cart">
      <h1>Ön jelenleg nincs bejelentkezve</h1>
    </div>
  );
  } else {
    return (
    <div className="cart">
      <div className="cart-header">
        <h2 className="cart-title">Kosár</h2>
        <p className="cart-count">Összes termék: {cart.length} darab</p>
      </div>

      <div className="row">

          {/*{cart.map((product) => (*/}
          {/*    <ListItem key={product.id} product={product} />*/}
          {/*))}*/}
      </div>
      {/*<AddButton />*/}
    </div>
  );
  }


};

export default Cart;
