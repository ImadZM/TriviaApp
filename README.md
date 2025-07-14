# Trivia App

[![Ask DeepWiki](https://devin.ai/assets/askdeepwiki.png)](https://deepwiki.com/ImadZM/TriviaApp)

A dynamic and engaging trivia quiz application built with React and Vite. Test your knowledge across various categories and difficulty levels. The app fetches questions from a live API, provides instant feedback, and tracks your score.

## Features

-   **Category Selection**: Choose from a variety of topics including General Knowledge, Geography, Music, Science, Sport & Leisure, or select 'Random' for a surprise mix.
-   **Difficulty Levels**: Tailor the challenge to your expertise by selecting Easy, Medium, or Hard difficulty.
-   **Live Questions**: Fetches trivia questions in real-time from [The Trivia API](https://the-trivia-api.com/).
-   **Interactive Gameplay**: Receive immediate visual feedback on your answers—correct answers are highlighted in green, and incorrect ones in red.
-   **Score Tracking**: Your score is updated and displayed after each question.
-   **Results Summary**: View a final summary page with your total score, the category, and the difficulty level of the completed quiz.
-   **Responsive Design**: A clean, modern interface styled with Tailwind CSS that works on various screen sizes.

## Tech Stack

-   **Frontend:** React
-   **Build Tool:** Vite
-   **Routing:** React Router
-   **Styling:** Tailwind CSS, Styled Components
-   **Linting:** ESLint

## Getting Started

Follow these instructions to get a local copy of the project up and running.

### Prerequisites

-   Node.js (v18 or later recommended)
-   npm or yarn

### Installation & Setup

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/imadzm/triviaapp.git
    ```

2.  **Navigate to the project directory:**
    ```sh
    cd triviaapp
    ```

3.  **Install the dependencies:**
    ```sh
    npm install
    ```

4.  **Start the development server:**
    ```sh
    npm run dev
    ```

The application will now be running on `http://localhost:5173`.

## Available Scripts

In the project directory, you can run the following commands:

-   `npm run dev`: Runs the app in development mode with hot-reloading.
-   `npm run build`: Builds the app for production to the `dist` folder.
-   `npm run lint`: Lints the source files using ESLint.
-   `npm run preview`: Serves the production build locally to preview it.

## Project Structure

The project follows a standard React application structure:

```
/
├── public/               # Static assets
├── src/
│   ├── components/       # Reusable React components (Header, AnswerCard, etc.)
│   ├── pages/            # Page-level components (Home, GamePage, ResultPage)
│   ├── App.jsx           # Main component with application routing
│   ├── main.jsx          # Application entry point
│   └── index.css         # Global styles and Tailwind CSS configuration
├── package.json          # Project dependencies and scripts
└── vite.config.js        # Vite configuration