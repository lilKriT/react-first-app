import React from "react";

const Book = ({ img, title, author }) => {
  const clickHandler = () => {
    alert("Hello World");
  };

  const complexFunction = (author) => {
    console.log(author);
  };

  return (
    <article
      className="book"
      onMouseOver={() => {
        console.log(title);
      }}
    >
      <img src={img} alt=""></img>
      <h1>{title}</h1>
      <h4>{author}</h4>
      <button type="button" onClick={clickHandler}>
        Click
      </button>
      <button onClick={() => complexFunction(author)}>More complex</button>
    </article>
  );
};

export default Book;
