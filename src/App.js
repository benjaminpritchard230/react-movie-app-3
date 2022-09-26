// import "./style.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Searchpage from "./components/Searchpage";
import { useState, useEffect } from "react";

function App() {
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    console.log(searchText);
  }, [searchText]);

  return (
    <div className="app">
      <Router>
        <Navbar setSearchText={setSearchText} />
        <Routes>
          <Route path={"/"} element={<Searchpage searchText={searchText} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
