// import Card from "react-bootstrap/Card";
import { useState, useEffect } from "react";
import "../App.css";

const Cards = () => {
  const [users, setUsers] = useState([]);

  const fetchData = async () => {
    return fetch("http://localhost:3100/api/users/")
      .then((response) => response.json())
      .then((data) => {
        data.forEach((title) => {
          if (title.title !== "") {
            title.title = title.title.toUpperCase();
          }
        });
        // data.forEach((pic) => {
        //   console.log(pic.main_attachment.small);
        // });
        setUsers(data);
        console.log(data[0].main_attachment.small);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container">
      {users.map((curElem) => {
        return (
          <div className="card_item" key={curElem.id}>
            <div className="card_inner">
              <div>
                <div className="triangle">
                  <div className="price">
                    <p>{curElem.price}€</p>
                  </div>
                </div>

                <img src={"https://picsum.photos/id/100/300"} alt="small" />
              </div>

              <div className="userName">{curElem.title}</div>
              <div className="userUrl">
                by{" "}
                <span style={{ fontWeight: "400", color: "black" }}>
                  {curElem.author}
                </span>
              </div>
              <div className="detail-box">
                <div className="gitDetail">
                  <span>{curElem.likes_count}</span>
                  <span>Like button</span>
                </div>
                <div className="gitDetail">
                  <span>Reload button</span>
                  <span>Following</span>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
