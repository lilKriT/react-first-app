import React from "react";
import ReactDOM from "react-dom";

// CSS
import "./index.css";

// vars
const firstBook = {
  img: "https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL._AC_UL604_SR604,400_.jpg",
  title:
    "Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones",
  author: "James Clear",
};

const secondBook = {
  img: "https://images-na.ssl-images-amazon.com/images/I/81l17H47TJL._AC_UL604_SR604,400_.jpg",
  title: "It Starts with Us: A Novel",
  author: "Colleen Hoover",
};

function BookList() {
  return (
    <section className="booklist">
      <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde
          voluptatibus earum dolor aperiam explicabo voluptas illum assumenda
          doloremque voluptatum atque.
        </p>
      </Book>
      <Book
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
      />
    </section>
  );
}

const Book = ({ img, title, author, children }) => {
  return (
    <article className="book">
      <img src={img} alt=""></img>
      <h1>{title}</h1>
      <h4>{author}</h4>
      {children}
    </article>
  );
};

ReactDOM.render(<BookList />, document.getElementById("root"));
