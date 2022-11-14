import "../App.css";

import Card from "./Card";

const Cards = ({ search, setSearch }) => {
  return (
    <div>
      <Card search={search} setSearch={setSearch} />
    </div>
  );
};

export default Cards;
