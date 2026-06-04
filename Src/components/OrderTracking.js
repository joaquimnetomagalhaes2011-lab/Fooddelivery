import React, { useState, useEffect } from 'react';
function OrderTracking({ order }) {
  const [status, setStatus] = useState('');
  useEffect(() => {
    const intervalId = setInterval(() => {
      fetch(`https://api.fooddeliver.com/orders/${order.id}`)
        .then(response => response.json())
        .then(data => setStatus(data.status));
    }, 10000);
    return () => clearInterval(intervalId);
  }, [order]);
  return (
    <div>
      <h1>Rastreamento de pedido</h1>
      <p>Status: {status}</p>
    </div>
  );
}
export default OrderTracking;
