# News Bee

News Bee is a React-based news aggregator web app that delivers the latest headlines and in-depth stories from around the world. The project is bootstrapped with [Create React App](https://create-react-app.dev/) and leverages [The Guardian Open Platform API](https://open-platform.theguardian.com/) for fetching news articles.

## Features

- **Category-wise News**: Browse news by categories such as World, Business, Science, Sports, Technology, Environment, Culture, Politics, and Fashion.
- **Infinite Scroll**: Seamless infinite scrolling for news feeds using `react-infinite-scroll-component`.
- **Responsive UI**: Built with Bootstrap 5 for a modern, responsive interface.
- **Top Loading Bar**: Visual feedback for loading progress using `react-top-loading-bar`.
- **Routing**: Client-side routing with `react-router-dom` for smooth navigation.
- **About Page**: Learn more about News Bee and its mission.
- **Loading Spinner**: Custom loading indicator for better UX.
- **API Integration**: Fetches news from The Guardian API, with category-based endpoints.
- **Environment Variables**: API key managed securely via `.env.local`.

## Getting Started

### Prerequisites

- Node.js (v16 or later recommended)
- npm

### Installation

1. Clone the repository.
2. Install dependencies:
   ```sh
   npm install
   ```
3. Set up your Guardian API key in `.env.local`:
   ```
   REACT_APP_NEWS_API=your_guardian_api_key
   ```

### Available Scripts

In the project directory, you can run:

- `npm start`  
  Runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

- `npm test`  
  Launches the test runner in interactive watch mode.

- `npm run build`  
  Builds the app for production to the `build` folder.

## Project Structure

```
src/
  App.js                      # Main app component with routing and loading bar
  components/
    Navbar.js                 # Navigation bar with category dropdown
    News.js                   # Fetches and displays news articles by category
    NewsItem.js               # Renders individual news cards
    DropdownCategory.js       # Dropdown for selecting news categories
    Loading.js                # Loading spinner component
    About.js                  # About page
```

## Categories Supported

| Category Name | section= value |
| ------------- | -------------- |
| World News    | world          |
| Sports        | sport          |
| Technology    | technology     |
| Business      | business       |
| Science       | science        |
| Environment   | environment    |
| Culture       | culture        |
| Politics      | politics       |
| Fashion       | fashion        |

## API Used

- **The Guardian Open Platform**  
  News content is fetched from The Guardian API using the `/search` endpoint with category-based filtering.

## Upcoming Features

- **Search by Query**: Ability to search news articles by keywords (in progress).
- **Country Selection**: Option to filter news by country (UI partially present, logic to be implemented).
- **Language Selection**: Option to filter news by language.
- **User Preferences**: Save favorite categories and articles.
- **Improved Accessibility**: Enhance ARIA support and keyboard navigation.

## License

This project is for educational purposes.

---

*News Bee – Stay informed, stay ahead!*

