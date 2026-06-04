import React from 'react';
function Cart({ cart, removeFromCart, finalizeOrder }) {
  return (
    <div>
      <h1>Carrinho</h1>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            <span>{item.name}</span>
            <span>R${item.price}</span>
            <button onClick={() => removeFromCart(item)}>Remover do carrinho</button>
          </li>
        ))}
      </ul>
      <button onClick={finalizeOrder}>Finalizar pedido</button>
    </div>
  );
}
export default Cart;
