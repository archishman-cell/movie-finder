# 🎬 Movie Finder

**A sleek and modern web application for discovering and exploring films.**

Movie Finder provides an intuitive and visually appealing interface to search for movies, view detailed information, and keep track of films you want to watch.

[**View the live project here!**](https://movie-finder-xi-five.vercel.app) 🚀


## ✨ Features

*   **🔍 Smart Search:** Find movies by title, director, actor, or even plot keywords. The debounced search provides instant results as you type.
*   **🎬 Detailed Movie Information:** Get comprehensive details for each movie, including:
    *   Ratings (IMDb)
    *   Plot summary
    *   Cast and crew (director, writer, actors)
    *   Genre, runtime, language, and country
    *   Awards and accolades
*   **❤️ Wishlist:** Create a personal wishlist of movies you want to watch. Your wishlist is saved in your browser for your next visit.
*   **📱 Fully Responsive Design:** Enjoy a seamless experience on any device, from your desktop to your smartphone.
*   **🎨 Modern & Engaging UI:** A beautiful and interactive interface with smooth animations, hover effects, and a polished look and feel.
*   **💡 Smart Error Handling:** The application provides clear and user-friendly error messages for network issues or invalid API keys.
*   **⚡️ Fast & Efficient:** Built with Vite for a lightning-fast development experience and an optimized production build.
*   ** skeletons and loading spinners to ensure a smooth user experience while fetching data.

## 🛠️ Built With

*   **[React](https://reactjs.org/):** A JavaScript library for building user interfaces.
*   **[Vite](https://vitejs.dev/):** A next-generation front-end tooling for a faster and leaner development experience.
*   **[Tailwind CSS](https://tailwindcss.com/):** A utility-first CSS framework for rapid UI development.
*   **[OMDB API](http://www.omdbapi.com/):** The Open Movie Database API for fetching movie data.

## 🚀 Getting Started

### Prerequisites

*   Node.js (v18 or higher is recommended)
*   npm or yarn

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/movie-finder.git
    ```
2.  **Navigate to the project directory:**
    ```bash
    cd movie-finder
    ```
3.  **Install the dependencies:**
    ```bash
    npm install
    ```
    or
    ```bash
    yarn install
    ```
4.  **Set up your environment variables:**

    Create a `.env` file in the root of the project and add your OMDB API key:

    ```
    VITE_OMDB_API_KEY=your_omdb_api_key
    VITE_OMDB_API_URL=https://www.omdbapi.com/
    ```

    You can get a free API key from the [OMDB API website](http://www.omdbapi.com/apikey.aspx).

### Running the Application

```bash
npm run dev
```
or
```bash
yarn dev
```

Open [http://localhost:5173](http://localhost:5173) to view it in your browser.

## 📦 Build for Production

```bash
npm run build
```
or
```bash
yarn build
```

The production-ready files will be located in the `dist/` directory.

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## 🙏 Acknowledgments

*   A big thank you to the creators of the [OMDB API](http.www.omdbapi.com/) for providing the movie data.
*   This project was bootstrapped with [Vite](https://vitejs.dev/).