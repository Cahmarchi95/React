import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const books = [
  {
    author: "Jordan Moore",
    title: "Interesting Facts For Curious Minds",
    img: "./images/book-1.jpg",
    id: 1,
  },
  {
    author: " Colleen Hoover",
    title: "It Starts with Us",
    img: "https://m.media-amazon.com/images/I/51VC+Vru96L._SY344_BO1,204,203,200_.jpg",
    id: 2,
  },
  {
    author: "Rick Rubin ",
    title: "The Creative Act: A Way of Being",
    img: "https://m.media-amazon.com/images/I/41AkIg2fDcL._SX339_BO1,204,203,200_.jpg",
    id: 3,
  },
];
function BookList() {
  const getBook = (id) => {
    const book = books.find((book) => book.id === id);
    console.log(book);
  };
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book {...book} key={book.id} getBook={getBook} />;
      })}
    </section>
  );
}

const Book = (props) => {
  const { img, title, author, getBook, id } = props;

  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <button onClick={() => getBook(id)}>click me</button>
      <h4>{author} </h4>
    </article>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
