import { useState, useEffect } from "react";
import "./App.css";
import api from "./Api/axiosConfig";
import { Layout } from "./component/Layout";
import { Route,Routes } from "react-router-dom";
function App() {
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    try {
      const response = await api.get("/api/v1/movies");
      setMovies(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className="App">
      <h1>Movies</h1>
      <Routes>
        <Route path="/" element={Layout}>

        </Route>
      </Routes>
    </div>
  );
}

export default App;