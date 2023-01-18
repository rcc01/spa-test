import { useState, useEffect } from "react";
import "../App.css";
import Card from "./Card";

const Cards = ({ search }) => {
  const [cards, setCards] = useState([]);

  const fetchData = async () => {
    fetch("http://localhost:3100/images/")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setCards(json);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="cards__container">
      {cards
        .filter((item) => {
          return search.toLowerCase() === ""
            ? item
            : item.title.toLowerCase().includes(search);
        })
        .map((image, i) => (
          <Card image={image} key={i} />
        ))}
    </div>
  );
};

export default Cards;
