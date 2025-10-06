import React, { useState } from 'react';
// ThemeToggle removed to disable dark mode functionality

function Navbar({ onSearch, searchValue, wishlistCount, onOpenWishlist }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isGenresOpen, setIsGenresOpen] = useState(false);
  const genres = ['Action', 'Drama', 'Comedy', 'Horror', 'Sci-Fi', 'Romance', 'Thriller', 'Adventure', 'Animation', 'Fantasy', 'Mystery', 'Documentary'];
  
  const handleSearch = (event) => {
    if (onSearch) {
      onSearch(event.target.value);
    }
  };
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const toggleGenres = () => {
    setIsGenresOpen(prev => !prev);
  };
  const handleSelectGenre = (g) => {
    if (onSearch) onSearch(g);
    setIsGenresOpen(false);
  };

  return (
    <nav className="bg-theme-secondary/95 backdrop-blur-xl border-b border-theme fixed top-0 left-0 right-0 z-40 shadow-sm transition-all duration-300 smooth-scroll">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0 md:space-x-6">
          {/* Logo and Title */}
          <div className="flex items-center justify-between w-full md:w-auto">
            <div className="flex items-center space-x-4">
              {/* Enhanced Logo */}
              <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-theme-tertiary rounded-xl">
                <img 
                  src="./assets/clapperboard.png" 
                  alt="Movie Finder Logo" 
                  className="w-6 h-6 sm:w-8 sm:h-8 object-contain"
                />
              </div>
              
              <div className="flex flex-col">
                {/* Enhanced Title */}
                <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-theme-primary tracking-tight">
                  Movie Finder
                </h1>
                
                {/* Enhanced Subtitle - Hidden on smallest screens */}
                <p className="hidden sm:block text-theme-tertiary text-sm sm:text-base">
                  Discover your next favorite film ✨
                </p>
              </div>
            </div>
            
            {/* Mobile menu button and wishlist */}
            <div className="flex items-center space-x-2 md:hidden">
              {/* Wishlist Button */}
              <button 
                onClick={onOpenWishlist}
                className="relative p-2 rounded-lg bg-theme-tertiary text-theme-primary focus:outline-none focus:ring-2 focus:ring-blue-500 hover:bg-theme-secondary transition-colors"
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
                  <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
                    {wishlistCount > 99 ? '99+' : wishlistCount}
                  </span>
                )}
              </button>
              
              <button 
                onClick={toggleMenu}
                className="p-2 rounded-lg bg-theme-tertiary text-theme-primary focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                className="relative flex items-center space-x-2 px-4 py-2 rounded-xl bg-theme-tertiary hover:bg-theme-secondary text-theme-primary transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                  <span className="bg-blue-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
                    {wishlistCount > 99 ? '99+' : wishlistCount}
                  </span>
                )}
              </button>
            </div>
          </div>

          {/* Enhanced Search Input - Responsive */}
          <div className={`${isMenuOpen ? 'block' : 'hidden'} md:block w-full md:max-w-2xl mx-auto mt-4 md:mt-0`}>
            <div className="relative group">
              {/* Search Icon */}
              <div className="absolute inset-y-0 left-0 pl-3 sm:pl-5 flex items-center pointer-events-none">
                <div className="w-5 h-5 sm:w-6 sm:h-6 bg-blue-50 rounded-full flex items-center justify-center p-1 transition-all duration-300">
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                className="w-full pl-12 sm:pl-16 pr-4 sm:pr-6 py-3 sm:py-4 text-theme-primary bg-theme-secondary backdrop-blur-sm border border-theme rounded-xl sm:rounded-2xl focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-300 transition-all duration-300 placeholder:text-theme-tertiary hover:shadow-sm"
              />
              
              {/* Glowing effect on focus */}
              <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-theme-tertiary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
            </div>
          </div>

          {/* Right-side controls */}
          <div className="flex items-center justify-between md:justify-end w-full md:w-auto gap-2">
            {/* Genres Dropdown */}
            <div className="relative">
              <button
                onClick={toggleGenres}
                aria-haspopup="listbox"
                aria-expanded={isGenresOpen}
                className="inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-blue-100 bg-white text-blue-700 hover:bg-blue-50 text-sm"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                Browse Genres
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isGenresOpen && (
                <div className="absolute right-0 mt-2 w-48 max-h-64 overflow-auto rounded-lg border border-blue-100 bg-white shadow-lg z-50" role="listbox">
                  {genres.map((g) => (
                    <button
                      key={g}
                      role="option"
                      onClick={() => handleSelectGenre(g)}
                      className="w-full text-left px-3 py-2 text-sm text-slate-700 hover:bg-blue-50"
                    >
                      {g}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
          </div>
        </div>
      
    </nav>
  );
}

export default Navbar;
