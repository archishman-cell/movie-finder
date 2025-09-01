import React, { useState } from 'react';
// ThemeToggle removed to disable dark mode functionality

function Navbar({ onSearch, searchValue, wishlistCount, onOpenWishlist }) {
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
    <nav className="bg-theme-primary backdrop-blur-xl border-b border-theme fixed top-0 left-0 right-0 z-40 shadow-lg transition-all duration-300 smooth-scroll">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 sm:py-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0 md:space-x-6">
          {/* Logo and Title */}
          <div className="flex items-center justify-between w-full md:w-auto">
            <div className="flex items-center space-x-4">
              {/* Enhanced Logo */}
              <div className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-transparent rounded-2xl ">
                <img 
                  src="./assets/clapperboard.png" 
                  alt="Movie Finder Logo" 
                  className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
                />
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
            
            {/* Mobile menu button and wishlist */}
            <div className="flex items-center space-x-2 md:hidden">
              {/* Wishlist Button */}
              <button 
                onClick={onOpenWishlist}
                className="relative p-2 rounded-lg bg-theme-secondary text-theme-primary focus:outline-none focus:ring-2 focus:ring-red-500 hover:bg-red-50 transition-colors"
                title="View wishlist"
              >
                <svg 
                  className="w-6 h-6" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                {wishlistCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
                    {wishlistCount > 99 ? '99+' : wishlistCount}
                  </span>
                )}
              </button>
              
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
            
            {/* Desktop wishlist button */}
            <div className="hidden md:flex items-center">
              <button 
                onClick={onOpenWishlist}
                className="relative flex items-center space-x-2 px-4 py-2 rounded-xl bg-theme-secondary hover:bg-red-50 text-theme-primary transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-500"
                title="View wishlist"
              >
                <svg 
                  className="w-5 h-5" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                <span className="font-medium">Wishlist</span>
                {wishlistCount > 0 && (
                  <span className="bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
                    {wishlistCount > 99 ? '99+' : wishlistCount}
                  </span>
                )}
              </button>
            </div>
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
            
            {/* Search suggestions - Now visible on all screens */}
            <div className="flex mt-2 sm:mt-3 items-center justify-center flex-wrap gap-1.5 sm:gap-2 text-xs">
              <span className="text-theme-tertiary mr-1 sm:mr-2 text-xs sm:text-sm">Popular genres:</span>
              {['Action', 'Drama', 'Comedy', 'Horror', 'Sci-Fi', 'Romance', 'Thriller', 'Adventure'].map((genre) => (
                <button
                  key={genre}
                  onClick={() => onSearch && onSearch(genre)}
                  className="px-2 sm:px-3 py-1 bg-theme-secondary/50 hover:bg-theme-secondary text-theme-primary rounded-full border border-theme/30 hover:border-theme transition-all duration-300 hover:scale-105 text-xs font-medium"
                >
                  {genre}
                </button>
              ))}
            </div>
          </div>
        </div>
      
    </nav>
  );
}

export default Navbar;
