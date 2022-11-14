import { useState, useEffect } from "react";
import "../App.css";

import Card from "./Card";

const Cards = ({ search, setSearch }) => {
  const [cards, setCards] = useState([]);

  const fetchData = async () => {
    return fetch("http://localhost:3100/api/users/")
      .then((response) => response.json())
      .then((data) => {
        data.forEach((title) => {
          if (title.title !== "") {
            title.title = title.title.toUpperCase();
          }
        });
        setCards(data);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container">
      {cards
        .filter((item) => {
          return search.toLowerCase() === ""
            ? item
            : item.title.toLowerCase().includes(search);
        })
        .map((image) => (
          <Card image={image} />
        ))}
    </div>
  );
};

export default Cards;
