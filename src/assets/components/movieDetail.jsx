import React from 'react';

const MovieDetail = ({ movie, isOpen, onClose }) => {
  if (!isOpen || !movie) return null;

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-black/20 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 z-50 animate-fadeIn"
      onClick={handleBackdropClick}
    >
      <div className="bg-white rounded-2xl shadow-lg max-w-5xl w-full max-h-[90vh] overflow-y-auto no-scrollbar animate-slideUp border border-blue-100 relative transition-all duration-300 modal-content smooth-scroll">
        {/* Enhanced Close Button - Sticky Position */}
        <button
          onClick={onClose}
          className="fixed top-6 left-6 sm:top-8 sm:left-8 text-slate-500 hover:text-slate-700 transition-all duration-300 z-50"
          aria-label="Close"
        >
          <div className="bg-white rounded-full p-2 shadow border border-blue-100">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
        </button>

        <div className="flex flex-col lg:flex-row">
          {/* Enhanced Poster Section */}
          <div className="lg:w-2/5 p-4 sm:p-8">
            <div className="relative group">
              <div className="relative overflow-hidden rounded-xl border border-blue-100 shadow-sm">
                <img
                  src={movie.Poster && movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/400x600/f3f4f6/6b7280?text=No+Poster'}
                  alt={movie.Title}
                  className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/400x600/f3f4f6/6b7280?text=No+Poster';
                  }}
                />
                
                {/* Simple overlay */}
                <div className="absolute inset-0 bg-blue-950/0 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              </div>
              
              {/* Rating Badge */}
              {movie.imdbRating && movie.imdbRating !== 'N/A' && (
                <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1.5 rounded-full text-sm font-semibold shadow">
                  <div className="flex items-center space-x-1">
                    <span>⭐</span>
                    <span className="font-mono">{movie.imdbRating}</span>
                  </div>
                </div>
              )}

              {/* Play Button */}
              
            </div>
          </div>

          {/* Enhanced Content Section */}
          <div className="lg:w-3/5 p-4 sm:p-8 lg:pl-0">
            {/* Title and Year with enhanced styling */}
            <div className="mb-6">
              <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-2">
                {movie.Title}
              </h1>
              <div className="flex flex-wrap items-center gap-3 sm:gap-6 text-slate-600">
                {movie.Year && movie.Year !== 'N/A' && (
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-200 rounded-full"></div>
                    <span className="text-lg font-medium">{movie.Year}</span>
                  </div>
                )}
                {movie.Runtime && movie.Runtime !== 'N/A' && (
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-200 rounded-full"></div>
                    <span className="text-lg font-medium">{movie.Runtime}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Enhanced Genre Tags */}
            {movie.Genre && movie.Genre !== 'N/A' && (
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Genres</h3>
                <div className="flex flex-wrap gap-2.5">
                  {movie.Genre.split(', ').map((genre, index) => (
                    <span
                      key={index}
                      className="bg-blue-50 text-blue-700 px-3 py-1.5 rounded-full text-sm font-medium border border-blue-100"
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
                <h3 className="text-xl font-semibold text-slate-900 mb-3">Plot Summary</h3>
                <p className="text-slate-700 leading-relaxed text-base sm:text-lg bg-blue-50 p-4 rounded-xl border border-blue-100">
                  {movie.Plot}
                </p>
              </div>
            )}

            {/* Enhanced Additional Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {movie.Director && movie.Director !== 'N/A' && (
                <div className="bg-white p-4 rounded-xl border border-blue-100 hover:shadow-md transition-all duration-300">
                  <h4 className="font-semibold text-slate-900 mb-2">Director</h4>
                  <p className="text-slate-600">{movie.Director}</p>
                </div>
              )}
              
              {movie.Writer && movie.Writer !== 'N/A' && (
                <div className="bg-white p-4 rounded-xl border border-blue-100 hover:shadow-md transition-all duration-300">
                  <h4 className="font-semibold text-slate-900 mb-2">Writer</h4>
                  <p className="text-slate-600">{movie.Writer}</p>
                </div>
              )}
              
              {movie.Actors && movie.Actors !== 'N/A' && (
                <div className="bg-white p-4 rounded-xl border border-blue-100 hover:shadow-md transition-all duration-300">
                  <h4 className="font-semibold text-slate-900 mb-2">Cast</h4>
                  <p className="text-slate-600">{movie.Actors}</p>
                </div>
              )}
              
              {movie.Language && movie.Language !== 'N/A' && (
                <div className="bg-white p-4 rounded-xl border border-blue-100 hover:shadow-md transition-all duration-300">
                  <h4 className="font-semibold text-slate-900 mb-2">Language</h4>
                  <p className="text-slate-600">{movie.Language}</p>
                </div>
              )}
              
              {movie.Country && movie.Country !== 'N/A' && (
                <div className="bg-white p-4 rounded-xl border border-blue-100 hover:shadow-md transition-all duration-300">
                  <h4 className="font-semibold text-slate-900 mb-2">Country</h4>
                  <p className="text-slate-600">{movie.Country}</p>
                </div>
              )}
              
              {movie.Awards && movie.Awards !== 'N/A' && (
                <div className="bg-white p-4 rounded-xl border border-blue-100 hover:shadow-md transition-all duration-300">
                  <h4 className="font-semibold text-slate-900 mb-2">Awards</h4>
                  <p className="text-slate-600">{movie.Awards}</p>
                </div>
              )}
            </div>


          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
