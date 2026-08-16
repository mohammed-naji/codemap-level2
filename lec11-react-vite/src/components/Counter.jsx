import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(10);

  return (
    <div className="bg-gray-200 p-4 rounded-lg text-center">
      <h1 className="text-2xl font-bold">Counter {count}</h1>
      <p className="text-gray-600">This is a simple counter component.</p>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded mt-4 hover:bg-blue-600"
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>
    </div>
  );
}
