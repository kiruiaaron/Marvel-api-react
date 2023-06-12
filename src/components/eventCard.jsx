import React from "react";
import { Link } from "react-router-dom";

const EventCard = ({ data }) => {
  return (
    <>
      {data
        ? data.map((event) => {
            return (
              <div className="serieCard" key={event.id}>
                <Link to={`/event/${event.id}`} className="Link">
                  <img
                    src={`${event.thumbnail.path}.${event.thumbnail.extension}`}
                    alt=""
                  />
                  <div className="serie-title">
                    <h3>{event.title}</h3>
                  </div>
                </Link>
              </div>
            );
          })
        : ""}
    </>
  );
};

export default EventCard;
