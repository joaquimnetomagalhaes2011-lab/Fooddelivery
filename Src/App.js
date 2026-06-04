import React, { useState, useEffect } from 'react';
import Menu from './components/Menu';
import Cart from './components/Cart';
import OrderTracking from './components/OrderTracking';
import Reviews from './components/Reviews';
function App() {
  const [menu, setMenu] = useState([]);
  const [cart, setCart] = useState([]);
  const [order, setOrder] = useState({});
  useEffect(() => {
    fetch('https://api.fooddeliver.com/menu')
      .then(response => response.json())
      .then(data => setMenu(data));
  }, []);
  const handleAddToCart = (item) => {
    setCart([...cart, item]);
  };
  const handleRemoveFromCart = (item) => {
    setCart(cart.filter((i) => i.id !== item.id));
  };
  const handleFinalizeOrder = () => {
    // Implementar lógica para finalizar o pedido
  };
  return (
    <div>
      <Menu menu={menu} addToCart={handleAddToCart} />
      <Cart cart={cart} removeFromCart={handleRemoveFromCart} finalizeOrder={handleFinalizeOrder} />
      <OrderTracking order={order} />
      <Reviews />
    </div>
  );
}
export default App;
