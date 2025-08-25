import React, { useState } from 'react';
// ThemeToggle removed to disable dark mode functionality

function Navbar({ onSearch, searchValue }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const handleSearch = (event) => {
    if (onSearch) {
      onSearch(event.target.value);
    }
  };
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-theme-primary backdrop-blur-xl border-b border-theme sticky top-0 z-40 shadow-lg transition-all duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 sm:py-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0 md:space-x-6">
          {/* Logo and Title */}
          <div className="flex items-center justify-between w-full md:w-auto">
            <div className="flex items-center space-x-4">
              {/* Enhanced Logo */}
              <div className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-theme-tertiary rounded-2xl shadow-xl shadow-theme/25 transform hover:scale-110 transition-all duration-300 hover:rotate-3">
                <svg className="w-6 h-6 sm:w-7 sm:h-7 text-theme-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 0h10m-10 0a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V6a2 2 0 00-2-2" />
                </svg>
              </div>
              
              <div className="flex flex-col">
                {/* Enhanced Title */}
                <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-theme-primary transition-all duration-500">
                  Movie Finder
                </h1>
                
                {/* Enhanced Subtitle - Hidden on smallest screens */}
                <p className="hidden sm:block text-theme-secondary text-sm sm:text-base font-medium">
                  Discover your next favorite film ✨
                </p>
              </div>
            </div>
            
            {/* Mobile menu button */}
            <div className="flex items-center space-x-4 md:hidden">
              <button 
                onClick={toggleMenu}
                className="p-2 rounded-lg bg-theme-secondary text-theme-primary focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <svg 
                  className="w-6 h-6" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  )}
                </svg>
              </button>
            </div>
            
            {/* Desktop theme toggle */}
            {/* Theme toggle removed */}
          </div>

          {/* Enhanced Search Input - Responsive */}
          <div className={`${isMenuOpen ? 'block' : 'hidden'} md:block w-full md:max-w-xl mx-auto mt-4 md:mt-0`}>
            <div className="relative group">
              {/* Search Icon */}
              <div className="absolute inset-y-0 left-0 pl-3 sm:pl-5 flex items-center pointer-events-none">
                <div className="w-5 h-5 sm:w-6 sm:h-6 bg-theme-tertiary rounded-full flex items-center justify-center p-1 transition-all duration-300">
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 text-theme-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
              
              {/* Input Field */}
              <input
                type="text"
                placeholder="Search movies, directors, genres..."
                value={searchValue}
                onChange={handleSearch}
                className="w-full pl-12 sm:pl-16 pr-4 sm:pr-6 py-3 sm:py-4 text-theme-primary bg-theme-secondary backdrop-blur-sm border border-theme rounded-xl sm:rounded-2xl focus:outline-none focus:ring-4 focus:ring-theme/20 focus:border-theme transition-all duration-300 placeholder:text-theme-tertiary hover:shadow-lg"
              />
              
              {/* Glowing effect on focus */}
              <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-theme-tertiary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
              </div>
            </div>
            
            {/* Search suggestions - Hidden on smallest screens */}
            <div className="hidden sm:flex mt-2 sm:mt-3 items-center justify-center flex-wrap gap-4 text-xs text-theme-tertiary">
              <span className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span>Popular: Action, Drama, Comedy</span>
              </span>
              <span className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                <span>Directors: Nolan, Tarantino</span>
              </span>
            </div>
          </div>
        </div>
      
    </nav>
  );
}

export default Navbar;
