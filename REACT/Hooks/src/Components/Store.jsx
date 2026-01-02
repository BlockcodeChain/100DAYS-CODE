import React, { useState, useEffect } from 'react';

const Store = () => {
  const [name, setName] = useState(() => {
    const savedName = localStorage.getItem('name');
    return savedName? JSON.parse(savedName) :"";
  });

  const handleName = () => {
    setName("");
    localStorage.removeItem("name");
  };

  useEffect(() => {
    localStorage.setItem("name", JSON.stringify(name));
  }, [name]);

  return (
    <div>
      <h1>Your Name: {name}</h1>

      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <button onClick={handleName}>Clear Name</button>
    </div>
  );
};

export default Store;
