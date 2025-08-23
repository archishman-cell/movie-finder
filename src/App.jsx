import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './assets/components/navbar';
import Movie from './assets/components/movie';
import MovieDetail from './assets/components/movieDetail';
import { ThemeProvider } from './contexts/ThemeContext';

function AppContent() {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const API_KEY = import.meta.env.VITE_OMDB_API_KEY;
  const BASE_URL = import.meta.env.VITE_OMDB_API_URL;

  // Check if environment variables are loaded
  useEffect(() => {
    if (!API_KEY) {
      console.error('VITE_OMDB_API_KEY is not set in environment variables');
      setError('API key not configured. Please check your environment configuration.');
    }
    if (!BASE_URL) {
      console.error('VITE_OMDB_API_URL is not set in environment variables');
      setError('API URL not configured. Please check your environment configuration.');
    }
  }, []);

  // Search movies by title
  const searchMovies = async (query) => {
    if (!query.trim()) {
      setMovies([]);
      return;
    }

    setLoading(true);
    setError(null);

    try {
      console.log('Searching for:', query);
      console.log('API Key:', API_KEY ? `${API_KEY.substring(0, 4)}...` : 'NOT SET');
      console.log('Base URL:', BASE_URL);

      const response = await fetch(`${BASE_URL}?s=${encodeURIComponent(query)}&apikey=${API_KEY}`);
      
      console.log('Response status:', response.status);
      console.log('Response ok:', response.ok);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log('API Response:', data);

      if (data.Response === 'True') {
        // Fetch detailed info for each movie
        const detailedMovies = await Promise.all(
          data.Search.slice(0, 12).map(async (movie) => {
            const detailResponse = await fetch(`${BASE_URL}?i=${movie.imdbID}&apikey=${API_KEY}`);
            const detailData = await detailResponse.json();
            return detailData;
          })
        );
        setMovies(detailedMovies);
      } else {
        setMovies([]);
        // Check if it's an API key error
        if (data.Error && data.Error.includes('API key')) {
          setError('Invalid API key. Please check your OMDB API key configuration.');
        } else {
          setError(data.Error || 'No movies found');
        }
      }
    } catch (err) {
      console.error('Error fetching movies:', err);
      
      // Provide more specific error messages
      if (err.message.includes('API key')) {
        setError('Invalid API key. Please check your OMDB API key configuration.');
      } else if (err.message.includes('fetch')) {
        setError('Network error. Please check your internet connection and try again.');
      } else if (err.message.includes('HTTP error')) {
        setError(`Server error (${err.message}). Please try again later.`);
      } else {
        setError('Failed to fetch movies. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  // Debounced search effect
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (searchQuery) {
        searchMovies(searchQuery);
      } else {
        setMovies([]);
      }
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [searchQuery]);

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedMovie(null);
  };

  return (
    <div className="min-h-screen gradient-theme relative overflow-hidden transition-colors duration-300">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl transition-all duration-500"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-pink-400/20 to-blue-400/20 rounded-full blur-3xl transition-all duration-500"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-3xl transition-all duration-500"></div>
      </div>

      <Navbar onSearch={handleSearch} searchValue={searchQuery} />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-16 relative z-10">
        {/* Enhanced Search Results Header */}
        {searchQuery && (
          <div className="mb-12 text-center">
            {loading ? (
              <div className="flex items-center justify-center space-x-4">
                <div className="relative">
                  <div className="w-8 h-8 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
                  <div className="absolute inset-0 w-8 h-8 border-4 border-transparent border-t-purple-600 rounded-full animate-spin" style={{animationDirection: 'reverse', animationDuration: '1.5s'}}></div>
                </div>
                <p className="text-gray-600 text-xl font-medium">Searching for movies...</p>
              </div>
            ) : error ? (
              <div className="bg-gradient-to-r from-red-50 to-pink-50 border border-red-200 rounded-2xl p-6 max-w-md mx-auto shadow-lg">
                <div className="flex items-center justify-center space-x-3 mb-3">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <p className="text-red-600 font-semibold text-lg">No Results</p>
                </div>
                <p className="text-red-600 font-medium">{error}</p>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 shadow-lg border border-blue-100">
                  <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-900 via-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                    {movies.length} movie{movies.length !== 1 ? 's' : ''} found
                  </h2>
                  <p className="text-gray-600 text-lg">Results for "{searchQuery}"</p>
                  <div className="mt-4 flex items-center justify-center space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                    <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                    <div className="w-2 h-2 bg-pink-500 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
        
        {/* Enhanced Movies Grid */}
        {loading ? (
          <div className="text-center py-20">
            <div className="inline-block relative">
              <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
              <div className="absolute inset-0 w-16 h-16 border-4 border-transparent border-t-purple-600 rounded-full animate-spin" style={{animationDirection: 'reverse', animationDuration: '1.5s'}}></div>
            </div>
            <p className="mt-6 text-gray-600 text-xl font-medium">Loading movies...</p>
            <p className="text-gray-500 text-sm mt-2">Fetching the best cinematic experiences</p>
          </div>
        ) : movies.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {movies.map((movie, index) => (
              <div 
                key={movie.imdbID}
                className="transform transition-all duration-700"
                style={{
                  animationDelay: `${index * 100}ms`,
                  animation: 'fadeInUp 0.8s ease-out forwards'
                }}
              >
                <Movie 
                  movie={movie} 
                  onClick={handleMovieClick}
                />
              </div>
            ))}
          </div>
        ) : searchQuery && !loading ? (
          <div className="text-center py-20">
            <div className="w-32 h-32 mx-auto mb-8 text-gray-300 relative">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-full h-full">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.47-.881-6.08-2.33" />
              </svg>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-xl"></div>
            </div>
            <h3 className="text-2xl font-bold text-theme-primary mb-3">No movies found</h3>
            <p className="text-theme-secondary text-lg max-w-md mx-auto">Try searching with different keywords or check your spelling. Maybe try a different genre or director name.</p>
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="w-32 h-32 mx-auto mb-8 text-gray-300 relative">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-full h-full">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-xl"></div>
            </div>
            <h3 className="text-3xl font-bold bg-gradient-to-r from-gray-900 via-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
              Ready to discover movies?
            </h3>
            <p className="text-theme-secondary text-lg max-w-md mx-auto mb-8">Use the search bar above to find your next favorite film. Explore different genres, directors, and discover hidden gems.</p>
            
            {/* Feature highlights */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
              <div className="card-theme backdrop-blur-sm rounded-xl p-4 border shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg mx-auto mb-3 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-theme-primary mb-1">Smart Search</h4>
                <p className="text-theme-secondary text-sm">Find movies by title, genre, or director</p>
              </div>
              
              <div className="card-theme backdrop-blur-sm rounded-xl p-4 border shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg mx-auto mb-3 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-theme-primary mb-1">Instant Results</h4>
                <p className="text-theme-secondary text-sm">Get detailed movie information instantly</p>
              </div>
              
              <div className="card-theme backdrop-blur-sm rounded-xl p-4 border shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-red-500 rounded-lg mx-auto mb-3 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-theme-primary mb-1">Discover More</h4>
                <p className="text-theme-secondary text-sm">Explore new genres and hidden gems</p>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Enhanced Slim Sticky Footer */}
      <footer className="bg-theme-primary backdrop-blur-xl border-t border-theme sticky bottom-0 z-30 shadow-lg transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex flex-col sm:flex-row items-center justify-between text-xs sm:text-sm text-theme-secondary">
            <div className="flex items-center space-x-2 sm:space-x-4 mb-2 sm:mb-0">
              <span className="font-medium">© 2024 Movie Finder</span>
              <span className="w-1 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></span>
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-semibold">Powered by OMDB API</span>
            </div>
            <div className="flex items-center space-x-2 sm:space-x-4">
              <a href="#" className="hover:text-blue-600 transition-colors duration-200 font-medium">Privacy</a>
              <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
              <a href="#" className="hover:text-blue-600 transition-colors duration-200 font-medium">Terms</a>
              <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
              <a href="#" className="hover:text-blue-600 transition-colors duration-200 font-medium">Contact</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Movie Detail Modal */}
      <MovieDetail
        movie={selectedMovie}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </div>
  );
}

// Wrap the app with ThemeProvider
function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
