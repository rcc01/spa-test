import { useState } from "react";
import likeBtn from "../images/likeBtn.png";
import reload from "../images/reload.png";
import "../App.css";

const Card = ({ image }) => {
  const [like, setLike] = useState(image.likes_count);
  const [isLike, setIsLike] = useState(false);

  const onLikeButtonClick = () => {
    fetch(`http://localhost:3100/images/${image.id}/likes`, {
      method: "POST",
    });

    if (!isLike) {
      setIsLike(true);
      setLike(like + 1);
    } else {
      setIsLike(false);
      setLike(like - 1);
    }
  };

  return (
    <div className="card" key={image.id}>
      <div className="card__inner">
        <div className="card__image__group">
          <img
            className="card__image"
            src={image.main_attachment.small}
            alt="small"
          />
          <div className="card__triangle">
            <div className="card__price">
              <p>{image.price}€</p>
            </div>
          </div>
        </div>

        <div className="card__title">{image.title}</div>
        <div className="card__author">
          by{" "}
          <span style={{ fontWeight: "400", color: "black" }}>
            {image.author}
          </span>
        </div>

        <div className="card__details">
          <div className="card__buttons">
            <button
              className={
                "card__like-button " +
                (isLike
                  ? "card__like-button--liked"
                  : "card__like-button--not-liked")
              }
              onClick={onLikeButtonClick}
            >
              <span className="likes-counter">{image.likes_count + like}</span>{" "}
              {""}
              {
                <img
                  src={likeBtn}
                  alt="like-btn"
                  className="like-btn"
                  style={{
                    width: "32px",
                    height: "32px",
                    position: "relative",
                    bottom: "8px",
                  }}
                />
              }
            </button>
          </div>
          |
          <div className="card__buttons">
            <button>
              <img
                src={reload}
                alt="like-btn"
                style={{
                  width: "30px",
                  height: "32px",
                  position: "relative",
                  bottom: "8px",
                }}
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
