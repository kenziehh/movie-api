import { useEffect, useState } from "react";
import "./App.css";
import Person from "./Person";
import SearchField from "./components/SearchField";
import Navbar from "./components/Navbar";
//5b9a579d
// http://www.omdbapi.com/?i=tt3896198&apikey=5b9a579d
function App() {
  const apiUrl = "http://www.omdbapi.com/?i=tt3896198&apikey=5b9a579d";

  return <div className="">
    <Navbar/>
    <SearchField/>
  </div>;
}

export default App;
