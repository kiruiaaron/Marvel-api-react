import React from "react";
import { Link } from "react-router-dom";

const Card = ({ data }) => {
  return (
    <>
      {data
        ? data.map((item) => {
            return (
              <div className="card" key={item.id}>
                <Link to={`/item/${item.id}`} className="Link">
                  <img
                    src={`${item.thumbnail.path}.${item.thumbnail.extension}`}
                    alt=""
                  />
                  <div className="title">
                    <h3>{item.name}</h3>
                  </div>
                </Link>
              </div>
            );
          })
        : ""}
    </>
  );
};

export default Card;
