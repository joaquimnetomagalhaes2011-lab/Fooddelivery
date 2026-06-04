import React from 'react';
function Menu({ menu, addToCart }) {
  return (
    <div>
      <h1>Cardápio</h1>
      <ul>
        {menu.map((item) => (
          <li key={item.id}>
            <span>{item.name}</span>
            <span>R${item.price}</span>
            <button onClick={() => addToCart(item)}>Adicionar ao carrinho</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Menu;
