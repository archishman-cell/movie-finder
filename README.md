# Movie Finder

A sleek, minimalist web application for discovering and exploring films. Movie Finder provides an intuitive interface to search for movies and view detailed information about them.

![Movie Finder Screenshot](screenshot.png)

## Features

- **Intuitive Search**: Find movies by title, director, or genre
- **Detailed Information**: View ratings, runtime, plot summaries, cast, and more
- **Responsive Design**: Seamless experience across all devices
- **Theme Toggle**: Switch between light and dark modes
- **Visual Cards**: Elegant, information-rich preview cards for movies

## Technologies Used

- **React**: Built with React 19 for a modern, component-based architecture
- **Tailwind CSS**: Styled with Tailwind CSS for a clean, minimalist design
- **Vite**: Leverages Vite for fast development and optimized production builds
- **OMDB API**: Fetches movie data from the Open Movie Database

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/movie-finder.git
   cd movie-finder
   ```

2. Install dependencies
   ```bash
   npm install
   # or
   yarn
   ```

3. Set up environment variables
   Create a `.env` file in the root directory with the following variables:
   ```
   VITE_OMDB_API_KEY=your_omdb_api_key
   VITE_OMDB_API_URL=https://www.omdbapi.com/
   ```
   You can get an API key from [OMDB API](http://www.omdbapi.com/apikey.aspx)

4. Start the development server
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open your browser and navigate to `http://localhost:5173`

## Build for Production

```bash
npm run build
# or
yarn build
```

The build artifacts will be stored in the `dist/` directory.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [OMDB API](http://www.omdbapi.com/) for providing movie data
- [Tailwind CSS](https://tailwindcss.com/) for the styling framework
- [React](https://reactjs.org/) for the UI library
- [Vite](https://vitejs.dev/) for the build tool
