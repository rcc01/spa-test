import { useState, useEffect } from "react";
import likeBtn from "../images/likeBtn.png";
import reload from "../images/reload.png";
import "../App.css";

const Card = ({ search, setSearch }) => {
  const [cards, setCards] = useState([]);

  const [like, setLike] = useState(0);
  const [isLike, setIsLike] = useState(false);

  const onLikeButtonClick = () => {
    fetch("http://localhost:3100/api/users/")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        //     data.forEach((element) => {
        //       console.log(element.id);
        //       for (let i = 2; i < data.length; i++) {
        //         if (element.id === data[i]) {
        //           setLike(like + 1);
        //         }
        //       }
        //     });
      });
    // setLike(like + (isLike ? -1 : 1));
    // setIsLike(!isLike);
  };

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
        .map((image) => {
          return (
            <div className="card" key={image.id}>
              <div className="card_inner">
                <div className="image-group">
                  <img
                    src={image.main_attachment.small}
                    alt="small"
                    className="card__image"
                  />
                  <div className="triangle-topleft">
                    <div className="price">
                      <p>{image.price}€</p>
                    </div>
                  </div>
                </div>

                <div className="userName">{image.title}</div>
                <div className="userUrl">
                  by{" "}
                  <span style={{ fontWeight: "400", color: "black" }}>
                    {image.author}
                  </span>
                </div>

                <div className="detail-box">
                  <div className="gitDetail">
                    <button
                      className={
                        "like-button " + (isLike ? "liked" : "no-liked")
                      }
                      onClick={onLikeButtonClick}
                    >
                      <span className="likes-counter">
                        {image.likes_count + like}
                      </span>{" "}
                      {""}
                      {
                        <img
                          src={likeBtn}
                          alt="like-btn"
                          className="like-btn"
                          style={{ width: "32px", height: "32px" }}
                        />
                      }
                    </button>
                  </div>
                  |
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

export default Card;
