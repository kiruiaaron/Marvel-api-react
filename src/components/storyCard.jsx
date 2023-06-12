import React from "react";
import { Link } from "react-router-dom";
import black from '../images/black-panther-hero-1920-x-1200-qecr3g1tuhmoia2n.jpg'

const StoryCard = ({ data }) => {
  return (
    <>
      {data
        ? data.map((storie) => {
            return (
              <div className="serieCard" key={storie.id}>
                <Link to={`/storie/${storie.id}`} className="Link">
                  <img
                    src={black}
                    alt=""
                  />
                  <div className="serie-title">
                    <h3>{storie.title}</h3>
                  </div>
                </Link>
              </div>
            );
          })
        : ""}
    </>
  );
};

export default StoryCard;
