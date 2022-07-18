import React from "react";
import ReactDOM from "react-dom";

// CSS
import "./index.css";

function BookList() {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article className="book">
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const Image = () => {
  return (
    <img
      src="https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL._AC_UL604_SR604,400_.jpg"
      alt=""
    ></img>
  );
};

const Title = () => {
  return (
    <h1>
      Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones
    </h1>
  );
};

const Author = () => {
  return (
    <h4 style={{ color: "#618d98", fontSize: "0.75rem", marginTop: "0.25rem" }}>
      James Clear
    </h4>
  );
};

ReactDOM.render(<BookList />, document.getElementById("root"));
