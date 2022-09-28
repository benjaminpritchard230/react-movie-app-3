// import "./style.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Searchpage from "./components/Searchpage";
import { useState, useEffect } from "react";
import MovieDetails from "./components/MovieDetails";

// Api key 9fb5564d1a088cb776b062fc755ea04e

function App() {
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    if (searchText) {
      console.log(searchText);
      fetch(
        `
        https://api.themoviedb.org/3/search/movie?api_key=9fb5564d1a088cb776b062fc755ea04e&language=en-US&query=${searchText}&include_adult=false`
      )
        .then((response) => response.json())
        .then((data) => {
          setSearchResults(data.results);
          console.log(`search results: ${searchResults}`);
        })
        .catch((err) => console.error(err));
    }
    console.log(searchResults);
  }, [searchText]);

  return (
    <div className="app">
      <Router>
        <Navbar setSearchText={setSearchText} />
        <Routes>
          <Route
            path={"/"}
            element={
              <Searchpage
                searchText={searchText}
                searchResults={searchResults}
              />
            }
          />
          <Route path="/moviedetails/:id" element={<MovieDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
