import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const firstBook = {
  author: "Jordan Moore",
  title: "Interesting Facts For Curious Minds",
  img: "./images/book-1.jpg",
};
const secondBook = {
  author: " Colleen Hoover",
  title: "It Starts with Us",
  img: "https://m.media-amazon.com/images/I/51VC+Vru96L._SY344_BO1,204,203,200_.jpg",
};

const thirdBook = {
  author: "Rick Rubin ",
  title: "The Creative Act: A Way of Being",
  img: "https://m.media-amazon.com/images/I/41AkIg2fDcL._SX339_BO1,204,203,200_.jpg",
};

function BookList() {
  return (
    <section className="booklist">
      <Book
        author={firstBook.author}
        title={firstBook.title}
        img={firstBook.img}
      />
      <Book
        author={secondBook.author}
        title={secondBook.title}
        img={secondBook.img}
      />
      <Book
        author={thirdBook.author}
        title={thirdBook.title}
        img={thirdBook.img}
      />
    </section>
  );
}
const Book = (props) => {
  console.log(props);
  return (
    <article className="book">
      <img src={props.img} alt={props.title} />
      <h2>{props.title}</h2>
      <h4>{props.author} </h4>
    </article>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
