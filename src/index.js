import React from "react";
import ReactDOM from "react-dom";

// CSS
import "./index.css";

// vars
const books = [
  {
    id: 1,
    img: "https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL._AC_UL604_SR604,400_.jpg",
    title:
      "Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones",
    author: "James Clear",
  },
  {
    id: 2,
    img: "https://images-na.ssl-images-amazon.com/images/I/81l17H47TJL._AC_UL604_SR604,400_.jpg",
    title: "It Starts with Us: A Novel",
    author: "Colleen Hoover",
  },
];

function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        // const { img, title, author } = book;
        return <Book key={book.id} book={book} />;
      })}
    </section>
  );
}

const Book = (props) => {
  const { img, title, author } = props.book;
  return (
    <article className="book">
      <img src={img} alt=""></img>
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};

ReactDOM.render(<BookList />, document.getElementById("root"));
