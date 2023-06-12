import React from "react";
import { Link } from "react-router-dom";

const ComicCard = ({ data }) => {
  return (
    <>
      {data
        ? data.map((comic) => {
            return (
              <div className="Comiccard" key={comic.id}>
                <Link to={`/comic/${comic.id}`} className="Link">
                  <img
                    src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
                    alt=""
                  />
                  <div className="comicTitle">
                    <h3>{comic.title}</h3>
                  </div>
                </Link>
              </div>
            );
          })
        : ""}
    </>
  );
};

export default ComicCard;
