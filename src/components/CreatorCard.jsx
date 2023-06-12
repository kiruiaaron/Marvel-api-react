import React from "react";
import { Link } from "react-router-dom";

const CreatorCard = ({ data }) => {
  return (
    <>
      {data
        ? data.map((creator) => {
            return (
              <div className="serieCard" key={creator.id}>
                <Link to={`/creator/${creator.id}`} className="Link">
                  <img
                    src={`${creator.thumbnail.path}.${creator.thumbnail.extension}`}
                    alt=""
                  />
                  <div className="serie-title">
                    <h3>{creator.firstName}</h3>
                  </div>
                </Link>
              </div>
            );
          })
        : ""}
    </>
  );
};

export default CreatorCard;
