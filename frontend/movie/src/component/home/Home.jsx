import Hero from "../hero/Hero.jsx.jsx";

const Home = ({ movies, isLoading, error }) => {
  if (isLoading) {
    return <section className="status-message">Loading movies...</section>;
  }

  if (error) {
    return <section className="status-message">{error}</section>;
  }

  return <Hero movies={movies} />;
};

export default Home;