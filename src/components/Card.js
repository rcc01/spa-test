import { useState } from "react";
import likeBtn from "../images/likeBtn.png";
import reload from "../images/reload.png";
import "../App.css";

const Card = ({ image }) => {
  const [like, setLike] = useState(image.likes_count);
  const [isLike, setIsLike] = useState(false);

  const onLikeButtonClick = () => {
    if (!isLike) {
      fetch(`http://localhost:3100/api/users/${image.id}/likes`, {
        method: "POST",
      }).then((response) => response.json());
      setIsLike(true);
      setLike(like + 1);
    }
  };

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
              className={"like-button " + (isLike ? "liked" : "no-liked")}
              onClick={onLikeButtonClick}
            >
              <span className="likes-counter">{image.likes_count + like}</span>{" "}
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
};

export default Card;
