import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';

const MovieDetail = ({ movie, isOpen, onClose }) => {
  const { theme } = useTheme();
  if (!isOpen || !movie) return null;

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-2 sm:p-4 z-50 animate-fadeIn"
      onClick={handleBackdropClick}
    >
      <div className="modal-theme backdrop-blur-xl rounded-3xl shadow-2xl shadow-gray-400/20 max-w-5xl w-full max-h-[90vh] overflow-y-auto animate-slideUp border border-theme relative transition-all duration-300">
        {/* Enhanced Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 sm:top-6 right-4 sm:right-6 text-theme-secondary hover:text-red-500 transition-all duration-300 z-10 group"
        >
          <div className="bg-theme-primary/80 backdrop-blur-sm rounded-full p-2 shadow-lg border border-theme group-hover:bg-red-50 group-hover:border-red-200 transition-all duration-300">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
        </button>

        <div className="flex flex-col lg:flex-row">
          {/* Enhanced Poster Section */}
          <div className="lg:w-2/5 p-4 sm:p-8">
            <div className="relative group">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl shadow-gray-400/20">
                <img
                  src={movie.Poster && movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/400x600/f3f4f6/6b7280?text=No+Poster'}
                  alt={movie.Title}
                  className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/400x600/f3f4f6/6b7280?text=No+Poster';
                  }}
                />
                
                {/* Simple overlay */}
                <div className="absolute inset-0 bg-theme-tertiary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              
              {/* Enhanced Rating Badge */}
              {movie.imdbRating && movie.imdbRating !== 'N/A' && (
                <div className="absolute top-4 right-4 bg-theme-tertiary text-theme-primary px-4 py-2 rounded-full text-sm font-bold shadow-xl transform hover:scale-110 transition-all duration-300">
                  <div className="flex items-center space-x-2">
                    <span className="text-lg">⭐</span>
                    <span className="font-mono">{movie.imdbRating}</span>
                  </div>
                </div>
              )}

              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                <div className="bg-theme-primary/90 backdrop-blur-md rounded-full p-6 transform scale-75 group-hover:scale-100 transition-all duration-500 shadow-2xl">
                  <svg className="w-12 h-12 text-theme-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Content Section */}
          <div className="lg:w-3/5 p-4 sm:p-8 lg:pl-0">
            {/* Title and Year with enhanced styling */}
            <div className="mb-6">
              <h1 className="text-4xl font-bold text-theme-primary mb-3">
                {movie.Title}
              </h1>
              <div className="flex flex-wrap items-center gap-3 sm:gap-6 text-theme-secondary">
                {movie.Year && movie.Year !== 'N/A' && (
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-theme-tertiary rounded-full"></div>
                    <span className="text-xl font-medium">{movie.Year}</span>
                  </div>
                )}
                {movie.Runtime && movie.Runtime !== 'N/A' && (
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-theme-tertiary rounded-full"></div>
                    <span className="text-xl font-medium">{movie.Runtime}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Enhanced Genre Tags */}
            {movie.Genre && movie.Genre !== 'N/A' && (
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-700 mb-3">Genres</h3>
                <div className="flex flex-wrap gap-3">
                  {movie.Genre.split(', ').map((genre, index) => (
                    <span
                      key={index}
                      className="bg-theme-tertiary text-theme-primary px-4 py-2 rounded-full text-sm font-medium shadow-lg transform hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-gray-400/30"
                    >
                      {genre}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Enhanced Plot */}
            {movie.Plot && movie.Plot !== 'N/A' && (
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-theme-primary mb-3 flex items-center">
                  <div className="w-1 h-6 bg-theme-tertiary rounded-full mr-3"></div>
                  Plot Summary
                </h3>
                <p className="text-theme-secondary leading-relaxed text-base sm:text-lg bg-theme-accent p-4 rounded-xl border-l-4 border-theme transition-colors duration-300">
                  {movie.Plot}
                </p>
              </div>
            )}

            {/* Enhanced Additional Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {movie.Director && movie.Director !== 'N/A' && (
                <div className="bg-theme-secondary p-4 rounded-xl border border-theme hover:shadow-lg transition-all duration-300">
                  <h4 className="font-semibold text-theme-primary mb-2 flex items-center">
                    <div className="w-2 h-2 bg-theme-tertiary rounded-full mr-2"></div>
                    Director
                  </h4>
                  <p className="text-theme-secondary">{movie.Director}</p>
                </div>
              )}
              
              {movie.Writer && movie.Writer !== 'N/A' && (
                <div className="bg-theme-secondary p-4 rounded-xl border border-theme hover:shadow-lg transition-all duration-300">
                  <h4 className="font-semibold text-theme-primary mb-2 flex items-center">
                    <div className="w-2 h-2 bg-theme-tertiary rounded-full mr-2"></div>
                    Writer
                  </h4>
                  <p className="text-theme-secondary">{movie.Writer}</p>
                </div>
              )}
              
              {movie.Actors && movie.Actors !== 'N/A' && (
                <div className="bg-theme-secondary p-4 rounded-xl border border-theme hover:shadow-lg transition-all duration-300">
                  <h4 className="font-semibold text-theme-primary mb-2 flex items-center">
                    <div className="w-2 h-2 bg-theme-tertiary rounded-full mr-2"></div>
                    Cast
                  </h4>
                  <p className="text-theme-secondary">{movie.Actors}</p>
                </div>
              )}
              
              {movie.Language && movie.Language !== 'N/A' && (
                <div className="bg-theme-secondary p-4 rounded-xl border border-theme hover:shadow-lg transition-all duration-300">
                  <h4 className="font-semibold text-theme-primary mb-2 flex items-center">
                    <div className="w-2 h-2 bg-theme-tertiary rounded-full mr-2"></div>
                    Language
                  </h4>
                  <p className="text-theme-secondary">{movie.Language}</p>
                </div>
              )}
              
              {movie.Country && movie.Country !== 'N/A' && (
                <div className="bg-theme-secondary p-4 rounded-xl border border-theme hover:shadow-lg transition-all duration-300">
                  <h4 className="font-semibold text-theme-primary mb-2 flex items-center">
                    <div className="w-2 h-2 bg-theme-tertiary rounded-full mr-2"></div>
                    Country
                  </h4>
                  <p className="text-theme-secondary">{movie.Country}</p>
                </div>
              )}
              
              {movie.Awards && movie.Awards !== 'N/A' && (
                <div className="bg-theme-secondary p-4 rounded-xl border border-theme hover:shadow-lg transition-all duration-300">
                  <h4 className="font-semibold text-theme-primary mb-2 flex items-center">
                    <div className="w-2 h-2 bg-theme-tertiary rounded-full mr-2"></div>
                    Awards
                  </h4>
                  <p className="text-theme-secondary">{movie.Awards}</p>
                </div>
              )}
            </div>

            {/* Enhanced Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-theme">
              <button className="flex-1 bg-theme-tertiary text-theme-primary py-3 sm:py-4 px-6 sm:px-8 rounded-2xl font-semibold hover:bg-theme-tertiary/90 transition-all duration-300 hover:shadow-xl hover:shadow-gray-400/30 transform hover:scale-105">
                <div className="flex items-center justify-center space-x-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Watch Now</span>
                </div>
              </button>
              <button className="flex-1 bg-theme-secondary text-theme-primary py-3 sm:py-4 px-6 sm:px-8 rounded-2xl font-semibold hover:bg-theme-secondary/90 transition-all duration-300 hover:shadow-lg transform hover:scale-105 border border-theme">
                <div className="flex items-center justify-center space-x-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                  <span>Add to Watchlist</span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
