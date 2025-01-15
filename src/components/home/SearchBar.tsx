import React from 'react';

const SearchBar: React.FC = () => {
  return (
    <div className="hidden sm:flex items-center justify-end w-full sm:w-auto">
      <input
        type="text"
        placeholder="Search..."
        className="w-full sm:w-48 p-1 rounded-full shadow-lg border border-[#FF9F0D] bg-black text-white focus:outline-none focus:ring-2 focus:ring-[#FF9F0D] text-sm"
      />
    </div>
  );
};

export default SearchBar;
