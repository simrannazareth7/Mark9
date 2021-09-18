import "./styles.css";
import { React, useState } from "react";

const booksDB = {
  Sports: [
    { name: "Playing it My way-Sachin Tendulkar", rating: "5/5" },
    { name: "Thye test of my life-Yuvraj Singh", rating: "5/5" }
  ],

  ScienceFiction: [
    { name: "Scinece and fiction", rating: "5/5" },
    {
      name: "The time machine",
      rating: "4/5"
    }
  ],
  Technology: [
    { name: "The Road to React", rating: "5/5" },
    { name: "Full Stack React,Typescript and node", rating: "5/5" }
  ]
};
function App() {
  const books = Object.keys(booksDB);
  const [selectedGenre, setGenre] = useState("Technology");
  function genreClickHandler(genre) {
    setGenre(genre);
    console.log(selectedGenre);
  }
  return (
    <div className="App">
      <h1>📚goodbooks</h1>
      <p>Checkout my favorite books. Select a genre to get started</p>
      {books.map((genre) => {
        return (
          <button
            style={{
              padding: "0.5rem 1rem",
              marginRight: "1rem",
              borderRadius: "0.5rem",
              cursor: "pointer",
              border: "1px solid black",
              margin: "1rem 0.3rem"
            }}
            onClick={() => genreClickHandler(genre)}
            key={genre}
          >
            {genre}
          </button>
        );
      })}
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0px" }}>
          {booksDB[selectedGenre].map((book) => (
            <li
              style={{
                listStyleType: "none",
                padding: "1rem",
                border: "1px solid #D1D5DB",
                borderRadius: "0.5rem",
                margin: "1rem 0rem",
                fontSize: "larger"
              }}
              key={book.name}
            >
              <div>{book.name}</div>
              <div>{book.rating}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
