import React, { useState } from 'react';
import './style.css';

export default function App() {
  const [data, setData] = useState({});

  const handleChangeInput = (e, type) => {
    setData((prevState) => ({
      ...prevState,
      [type]: e.target.value,
    }));
  };

  const fromSubmit = () => {
    console.log(data);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      <input
        type="text"
        placeholder="ad"
        onChange={(e) => handleChangeInput(e, 'ad')}
      />
      <input
        type="text"
        placeholder="soyad"
        onChange={(e) => handleChangeInput(e, 'soyad')}
      />
      <input
        type="text"
        placeholder="telefon"
        onChange={(e) => handleChangeInput(e, 'telefon')}
      />
      <input
        type="text"
        placeholder="adres"
        onChange={(e) => handleChangeInput(e, 'adres')}
      />
      <button onClick={() => fromSubmit()}>gönder</button>
    </div>
  );
}
