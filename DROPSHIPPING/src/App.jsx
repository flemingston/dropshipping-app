
import React, { useState } from "react";

const products = [
  { name: "Portable Blender", cost: 700, price: 1299 },
  { name: "LED Sensor Light", cost: 250, price: 499 }
];

export default function App() {
  const [contact, setContact] = useState("");
  const [orders, setOrders] = useState([]);

  const order = (p) => {
    const msg = `I want to order ${p.name} for ₹${p.price}`;
    window.open(`https://wa.me/91${contact}?text=${encodeURIComponent(msg)}`);
    setOrders([...orders, p]);
  };

  return (
    <div style={{padding:20}}>
      <h1>🚀 Dropshipping App</h1>

      <input
        placeholder="Enter WhatsApp Number"
        onChange={(e)=>setContact(e.target.value)}
      />

      <h2>Products</h2>
      {products.map((p,i)=>(
        <div key={i} style={{border:'1px solid #ccc', margin:10, padding:10}}>
          <h3>{p.name}</h3>
          <p>Profit: ₹{p.price - p.cost}</p>
          <button onClick={()=>order(p)}>Sell</button>
        </div>
      ))}

      <h2>Orders</h2>
      {orders.map((o,i)=><p key={i}>{o.name}</p>)}
    </div>
  );
}
