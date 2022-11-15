import { useState } from "react";
import Main from "./Main";
import logo from "../images/logo.png";
import "../App.css";

const Navbar = () => {
  const [search, setSearch] = useState("");

  return (
    <div>
      <div className="navbar">
        <div className="navbar__logo">
          <img
            src={logo}
            alt="samy-logo"
            style={{
              width: "6rem",
              height: "6.5rem",
            }}
          />
        </div>
        <div className="navbar__searchBar">
          <input
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            placeholder="You're looking for something?"
          />
        </div>
      </div>
      <Main search={search} />
    </div>
  );
};

export default Navbar;
