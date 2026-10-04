"use client";

export default function Button() {
  return (
    <div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => alert("Button clicked!")}
      >
        Click Me
      </button>
    </div>
  );
}
