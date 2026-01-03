import React, { useEffect, useState } from 'react';

const Todo = () => {
  const [Inputs, setInputs] = useState('');
  const [Items, setItems] = useState(() => {
    const savedItems = localStorage.getItem('Items');
    return savedItems ? JSON.parse(savedItems) : [];
  });

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem('Items', JSON.stringify(Items));
  }, [Items]);

  // Add Todo
  const handleAdd = () => {
    if (Inputs.trim() === '') return;
    setItems([...Items, Inputs]);
    setInputs('');
  };

  // Delete Todo
  const handleRemove = (index) => {
    const newItems = Items.filter((_, id) => id !== index);
    setItems(newItems);
  };

  return (
    <div className="container mx-auto flex flex-col items-center">
      <h1 className="p-7 text-5xl font-bold my-5 font-sans">
        TO DO LIST
      </h1>

      <div className="border border-gray-700 w-full max-w-lg px-5 py-6 rounded-2xl overflow-x-hidden">

        {/* Input Section */}
        <div className="flex justify-between items-center gap-4 mb-10">
          <input
            type="text"
            value={Inputs}
            onChange={(e) => setInputs(e.target.value)}
            placeholder="Enter TO-DO LIST"
            className="w-4/5 h-14 text-xl border border-gray-400 text-center rounded-3xl outline-none"
          />

          <button
            onClick={handleAdd}
            className="bg-green-500 rounded-2xl px-4 h-12 w-20 font-extrabold cursor-pointer hover:bg-green-600 transition"
          >
            ADD
          </button>
        </div>

        {/* Todo List */}
        <ul className="text-lg w-full font-medium">
          {Items.length === 0 && (
            <p className="text-center text-gray-400">
              No todos yet ✨ Add one!
            </p>
          )}

          {Items.map((itm, idx) => (
            <li
              key={idx}
              className="flex justify-between items-center mb-6 bg-gray-800 px-4 py-3 rounded-xl"
            >
              <p className="text-lg font-semibold text-white ">
                <span className="px-3 py-1 rounded-full bg-gray-600 mr-4">
                  {idx + 1}
                </span>
                {itm}
              </p>

              <button
                onClick={() => handleRemove(idx)}
                className="bg-red-600 px-4 py-1 rounded text-white cursor-pointer hover:bg-red-700 transition"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Todo;
