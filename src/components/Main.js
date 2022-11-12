import Cards from "./Cards";
import "../App.css";

const Main = ({ search, setSearch }) => {
  return (
    <div className="slider">
      <div className="slider-track">
        <div className="slide">
          <Cards search={search} setSearch={setSearch} />
        </div>
      </div>
    </div>
  );
};

export default Main;
