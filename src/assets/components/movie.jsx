import React from 'react';

const Movie = ({ movie, onClick }) => {
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
      className="group cursor-pointer transform transition-all duration-500 hover:scale-105 hover:-translate-y-2 w-full"
      onClick={() => onClick && onClick(movie)}
    >
              <div className="relative card-theme backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl border border-theme overflow-hidden transition-all duration-500 group-hover:shadow-theme/25">
        {/* Subtle highlight effect */}
        <div className="absolute inset-0 rounded-2xl bg-theme-tertiary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        {/* Movie Poster */}
        <div className="relative aspect-[2/3] overflow-hidden">
          <img 
            src={posterUrl} 
            alt={movie.Title || 'Movie Poster'}
            className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
            onError={(e) => {
              e.target.src = 'https://via.placeholder.com/300x450/f8fafc/64748b?text=No+Poster';
            }}
          />
          
          {/* Simple Overlay */}
          <div className="absolute inset-0 bg-theme-tertiary/40 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
          
          {/* Floating Rating Badge */}
          {rating !== 'N/A' && (
            <div className="absolute top-3 right-3 bg-black text-white px-3 py-1.5 rounded-full text-sm font-bold shadow-lg transform scale-0 group-hover:scale-100 transition-all duration-500 delay-200 border border-theme">
              <div className="flex items-center space-x-1">
                <span className="text-yellow-500">⭐</span>
                <span>{rating}</span>
              </div>
            </div>
          )}

          {/* Year Badge */}
          <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-md text-white px-2 py-1 rounded-lg text-xs font-medium transform -translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100 sm:opacity-100 sm:translate-y-0">
            {year}
          </div>

          {/* Play Button Overlay */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
            <div className="bg-theme-primary/90 backdrop-blur-md rounded-full p-4 transform scale-75 group-hover:scale-100 transition-all duration-500">
              <svg className="w-8 h-8 text-theme-primary" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </div>
          </div>
        </div>

        {/* Movie Info */}
        <div className="p-6 relative z-10">
          {/* Title */}
          <h3 className="font-bold text-theme-primary text-lg mb-3 line-clamp-2 transition-all duration-500">
            {movie.Title || 'Unknown Title'}
          </h3>
          
          {/* Meta Info */}
          <div className="flex items-center justify-between mb-4">
            <span className="text-theme-secondary font-medium text-sm">{year}</span>
            <span className="bg-theme-tertiary text-theme-primary px-3 py-1.5 rounded-full text-xs font-semibold shadow-md transform scale-95 group-hover:scale-100 transition-all duration-300">
              {genre}
            </span>
          </div>

          {/* Plot */}
          <p className="text-theme-secondary text-sm line-clamp-2 leading-relaxed mb-4 group-hover:text-theme-primary transition-colors duration-300">
            {plot}
          </p>

          {/* Runtime with icon */}
          {movie.Runtime && movie.Runtime !== 'N/A' && (
            <div className="flex items-center text-theme-secondary text-xs group-hover:text-theme-primary transition-colors duration-300">
              <div className="w-4 h-4 mr-2 bg-theme-tertiary rounded-full flex items-center justify-center">
                <svg className="w-2.5 h-2.5 text-theme-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              {movie.Runtime}
            </div>
          )}

          {/* Hover indicator */}
          <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-300">
            <div className="bg-theme-tertiary text-theme-primary px-3 py-1 rounded-full text-xs font-medium shadow-lg">
              Click to view
            </div>
          </div>
        </div>

        {/* Subtle shimmer effect on hover */}
        <div className="absolute inset-0 bg-theme-tertiary/10 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
      </div>
    </div>
  );
};

export default Movie;
