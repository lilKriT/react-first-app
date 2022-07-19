import React from "react";
import ReactDOM from "react-dom";

// CSS
import "./index.css";

// vars
const books = [
  {
    img: "https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL._AC_UL604_SR604,400_.jpg",
    title:
      "Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones",
    author: "James Clear",
  },
  {
    img: "https://images-na.ssl-images-amazon.com/images/I/81l17H47TJL._AC_UL604_SR604,400_.jpg",
    title: "It Starts with Us: A Novel",
    author: "Colleen Hoover",
  },
];

const lorem = ["lorem", "ipsum", "dolor"];
const newLorem = lorem.map((word) => {
  return <h1>{word}</h1>;
});

function BookList() {
  return <section className="booklist">{newLorem}</section>;
}

const Book = ({ img, title, author }) => {
  return (
    <article className="book">
      <img src={img} alt=""></img>
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};

ReactDOM.render(<BookList />, document.getElementById("root"));
