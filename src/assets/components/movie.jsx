import React from 'react';

const Movie = ({ movie, onClick, onToggleWishlist, isInWishlist }) => {
  // Handle missing poster with fallback
  const posterUrl = movie.Poster && movie.Poster !== 'N/A' 
    ? movie.Poster 
    : 'https://via.placeholder.com/300x450/f8fafc/64748b?text=No+Poster';

  // Handle missing rating with fallback
  const rating = movie.imdbRating && movie.imdbRating !== 'N/A' 
    ? movie.imdbRating 
    : 'N/A';

  // Handle missing year with fallback
  const year = movie.Year && movie.Year !== 'N/A' 
    ? movie.Year 
    : 'N/A';

  // Handle missing genre with fallback
  const genre = movie.Genre && movie.Genre !== 'N/A' 
    ? movie.Genre.split(', ')[0] // Take first genre if multiple
    : 'Unknown';

  // Handle missing plot with fallback
  const plot = movie.Plot && movie.Plot !== 'N/A' 
    ? movie.Plot 
    : 'No description available.';

  return (
    <div 
      className="group cursor-pointer transform transition-transform duration-300 hover:-translate-y-1 w-full animate-fadeInUp"
      onClick={() => onClick && onClick(movie)}
    >
      <div className="relative bg-white rounded-xl border border-blue-100 overflow-hidden transition-shadow duration-300 shadow-sm hover:shadow-md">
        {/* Movie Poster */}
        <div className="relative aspect-[2/3] overflow-hidden">
          <img 
            src={posterUrl} 
            alt={movie.Title || 'Movie Poster'}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            onError={(e) => {
              e.target.src = 'https://via.placeholder.com/300x450/f8fafc/64748b?text=No+Poster';
            }}
          />

          {/* Wishlist Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onToggleWishlist && onToggleWishlist(movie);
            }}
            className="absolute top-3 right-3 bg-white/90 text-blue-700 p-2 rounded-full border border-blue-100 shadow-sm hover:bg-blue-50 transition-colors"
            title={isInWishlist ? "Remove from wishlist" : "Add to wishlist"}
          >
            <svg 
              className={`w-5 h-5 transition-colors duration-200 ${isInWishlist ? 'text-blue-600' : 'text-blue-700'}`} 
              fill={isInWishlist ? 'currentColor' : 'none'} 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </button>

          {/* Rating Badge */}
          {rating !== 'N/A' && (
            <div className="absolute top-3 left-3 bg-blue-600 text-white px-2.5 py-1 rounded-full text-xs font-semibold shadow-sm">
              <div className="flex items-center space-x-1">
                <span>⭐</span>
                <span>{rating}</span>
              </div>
            </div>
          )}

          {/* Year Badge */}
          <div className="absolute bottom-3 left-3 bg-white/90 text-slate-900 px-2 py-1 rounded-md text-xs font-medium border border-blue-100">
            {year}
          </div>
        </div>

        {/* Movie Info */}
        <div className="p-4">
          {/* Title */}
          <h3 className="font-semibold text-slate-900 text-base mb-2 line-clamp-2">
            {movie.Title || 'Unknown Title'}
          </h3>
          
          {/* Meta Info */}
          <div className="flex items-center justify-between mb-3">
            <span className="text-slate-600 text-sm">{year}</span>
            <span className="bg-blue-50 text-blue-700 px-2.5 py-1 rounded-full text-xs font-medium border border-blue-100">
              {genre}
            </span>
          </div>

          {/* Plot */}
          <p className="text-slate-600 text-sm line-clamp-2 leading-relaxed mb-3">
            {plot}
          </p>

          {/* Runtime with icon */}
          {movie.Runtime && movie.Runtime !== 'N/A' && (
            <div className="flex items-center text-slate-500 text-xs">
              <div className="w-4 h-4 mr-2 bg-blue-50 rounded-full flex items-center justify-center border border-blue-100">
                <svg className="w-2.5 h-2.5 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              {movie.Runtime}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Movie;
