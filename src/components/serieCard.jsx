import React from "react";
import { Link } from "react-router-dom";

const SerieCard = ({ data }) => {
  return (
    <>
      {data
        ? data.map((serie) => {
            return (
              <div className="serieCard" key={serie.id}>
                <Link to={`/serie/${serie.id}`} className="Link">
                  <img
                    src={`${serie.thumbnail.path}.${serie.thumbnail.extension}`}
                    alt=""
                  />
                  <div className="serie-title">
                    <h3>{serie.title}</h3>
                  </div>
                </Link>
              </div>
            );
          })
        : ""}
    </>
  );
};

export default SerieCard;
