import { useState } from "react";

const VerifyCertificate = () => {
  const [code, setCode] = useState("");

  const handleSearch = () => {
    console.log("Searching for:", code);
  };

  return (
    <div className="flex items-center justify-center mt-56 bg-white">
      <div className="bg-gray-100 border-2 border-blue-200 p-6 rounded-lg  mb-20">
        <div className="flex border border-gray-300 rounded-md overflow-hidden">
          <input
            type="text"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="Enter Certificate Code"
            className="px-4 py-2 w-xl h-14 focus:outline-none bg-white border-2 border-red-200"
            required
          />
          <button
            onClick={handleSearch}
            className="bg-black text-white px-6 py-2 hover:bg-gray-600"
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default VerifyCertificate;
