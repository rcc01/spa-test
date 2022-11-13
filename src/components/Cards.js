import { useState, useEffect } from "react";
import "../App.css";
import likeBtn from "../images/likeBtn.png";
import reload from "../images/reload.png";

const Cards = ({ search, setSearch }) => {
  const [users, setUsers] = useState([]);

  const [like, setLike] = useState(0);
  const [likeActive, setLikeActive] = useState(true);

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
        // console.log(data[0].main_attachment.small);
        console.log(data);
      });
  };

  useEffect(() => {
    fetchData();
    console.log(fetchData());
  }, []);

  const likeFunc = () => {
    if (likeActive) {
      console.log(likeActive);
      setLikeActive(false);
      setLike(like + 1);
    } else {
      setLikeActive(true);
      setLike(like - 1);
    }
  };

  return (
    <div className="container">
      {users
        .filter((item) => {
          return search.toLowerCase() === ""
            ? item
            : item.title.toLowerCase().includes(search);
        })
        .map((curElem) => {
          return (
            <div className="card_item" key={curElem.id}>
              <div className="card_inner">
                <div className="image-group">
                  <img src={curElem.main_attachment.small} alt="small" />
                  <div className="triangle-topleft">
                    <div className="price">
                      <p>{curElem.price}€</p>
                    </div>
                  </div>
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
                    {/* I want to add +1 to the below */}
                    {/* !!!!! IT's adding + 1 to all of them! */}
                    <span>{curElem.likes_count + like}</span>
                    <button onClick={likeFunc}>
                      <img
                        src={likeBtn}
                        alt="like-btn"
                        className="like-btn"
                        style={{ width: "32px", height: "32px" }}
                      />
                    </button>
                  </div>
                  <div className="gitDetail">
                    <button>
                      <img
                        src={reload}
                        alt="like-btn"
                        style={{ width: "30px", height: "32px" }}
                      />
                    </button>
                    <span>000</span>
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
