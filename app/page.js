'use client';

import { useState } from 'react';
import axios from 'axios';

export default function Home() {
  const [bin, setBin] = useState('');
  const [result, setResult] = useState(null);

  const checkBin = async () => {
    const response = await axios.get(`/api/check-bin?bin=${bin}`);
    setResult(response.data);
  };

  return (
    <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
      <h1 className="text-2xl font-bold mb-4">BIN Checker</h1>
      <input 
        type="text"
        value={bin}
        onChange={(e) => setBin(e.target.value)}
        placeholder="Enter BIN"
        className="w-full p-2 border rounded mb-4"
      />
      <button 
        onClick={checkBin}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Check
      </button>
      {result && (
        <div className="mt-4 bg-gray-100 p-4 rounded">
          <pre>{JSON.stringify(result, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}
