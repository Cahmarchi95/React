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
  return (
    <section className="booklist">
      <EventExemples />
      {books.map((book) => {
        return <Book {...book} key={book.id} />;
      })}
    </section>
  );
}

const EventExemples = () => {
  return (
    <section>
      <form>
        <h2>Typical form</h2>
        <input type="text" name="product" onChange={(e)=> console.log(e.target.value)} style={{ margin: "1rem 0" }} />
        <button type="submit">submit</button>
        <div>
          <button onClick={() => console.log("clikou")} type="button">
            click me
          </button>
        </div>
      </form>
    </section>
  );
};

const Book = (props) => {
  const { img, title, author } = props;
  console.log(props);
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author} </h4>
    </article>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
