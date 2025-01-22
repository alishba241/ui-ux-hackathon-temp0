'use client'

import React, { useState, useEffect } from "react";

export interface FilterBarProps {
  onFilterChange: (filters: { category: string; price_range: string; }) => void;
}

const FilterBar: React.FC<FilterBarProps> = ({ onFilterChange }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [selectedPriceRange, setSelectedPriceRange] = useState<string>("");

  //! Load filters from localStorage 
  useEffect(() => {
    const savedCategory = localStorage.getItem("selectedCategory");
    const savedPriceRange = localStorage.getItem("selectedPriceRange");

    if (savedCategory) {
      setSelectedCategory(savedCategory);
    }
    if (savedPriceRange) {
      setSelectedPriceRange(savedPriceRange);
    }
  }, []);

  const handleCategoryChange = (e: React.ChangeEvent<HTMLInputElement>, category: string) => {
    setSelectedCategory(category);
    localStorage.setItem("selectedCategory", category); // Save to localStorage
  };

  const handlePriceRangeChange = (e: React.ChangeEvent<HTMLInputElement>, range: string) => {
    setSelectedPriceRange(range);
    localStorage.setItem("selectedPriceRange", range); // Save to localStorage
  };

  const applyFilters = () => {
    onFilterChange({ category: selectedCategory, price_range: selectedPriceRange });
  };

  return (
    <div className="w-full bg-[#FAF4F4] p-4 flex flex-col md:flex-row justify-between items-center gap-4 shadow-[#FAF4F4] shadow-md rounded-md">
      {/* Category Filter */}
      <div>
        <label htmlFor="category" className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">
          Category
        </label>
        <div className="flex flex-wrap gap-2">
          {["Sofa", "Dinning", "Table", "Sideboard", "Chair"].map((category) => (
            <label key={category} className="flex items-center space-x-2 text-sm">
              <input
                type="checkbox"
                value={category}
                checked={selectedCategory === category}
                onChange={(e) => handleCategoryChange(e, category)}
                className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
              />
              <span>{category}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Price Range Filter */}
      <div>
        <label htmlFor="price_range" className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">
          Price Range
        </label>
        <div className="flex flex-wrap gap-2">
          {["20k - 30k", "10k - 20k", "70k and above"].map((range) => (
            <label key={range} className="flex items-center space-x-2 text-sm">
              <input
                type="checkbox"
                value={range}
                checked={selectedPriceRange === range}
                onChange={(e) => handlePriceRangeChange(e, range)}
                className="h-4 w-4 text-indigo-600 border-none rounded focus:ring-indigo-500"
              />
              <span>{range}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Apply Filters Button */}
      <div className="flex items-center mt-4 md:mt-0">
        <button
          onClick={applyFilters}
          className="px-4 py-2 bg-black text-white text-sm rounded-md hover:bg-gray-700 transition"
        >
          Apply Filters
        </button>
      </div>
    </div>
  );
};

export default FilterBar;
