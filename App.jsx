import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter,Link, Route, Routes } from "react-router-dom";
import homepage from "./pages/homepage";


function App() {
  const url = "https://api.tvmaze.com/search/shows?q=all";
  const [data, setData] = useState([]);

  const fetchInfo = () => {
    return fetch(url)
      .then((res) => res.json())
      .then((d) => setData(d))
  }


  useEffect(() => {
    fetchInfo();
  }, []);

  return (

    

    <div className="App">
      <h1 style={{ color: "white" }}>All Shows</h1>
        {
            data.map((dataObj) => {
            return (
              <div
              style={{
                width: "20em",
                backgroundColor: "blue",
                padding: 2,
                borderRadius: 10,
                marginBlock: 10,
              }}
              >
                <p>Name of the show: {dataObj.show.name}</p>
                <p>Score: {dataObj.score}</p>
                <p>language: {dataObj.show.language}</p>
                <p>status: {dataObj.show.status}</p>
                <p>Premiered: {dataObj.show.premiered}</p>
                <p>Ended: {dataObj.show.ended}</p>
                <p>Average rating : {dataObj.show.rating.average} out of 10</p>
                <button style={{color:"white"}}><a href="/homepage">Summary</a></button>
              </div>
            );
          })
        }
    </div>
  );
}

export default App;