import Main from "./Main";
import logo from "../images/logo.png";
import "../App.css";

const Home = () => {
  return (
    <div>
      <div className="navbar">
        <div className="logo">
          <img
            src={logo}
            alt="samy-logo"
            style={{
              width: "6rem",
              height: "6.5rem",
            }}
          />
        </div>
        <div className="searchBar">
          <input type="text" placeholder="You're looking for something?" />
        </div>
      </div>
      <Main />
    </div>
  );
};

export default Home;
