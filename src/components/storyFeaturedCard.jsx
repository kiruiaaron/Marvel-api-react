import React from "react";
import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import black from '../images/black-panther-hero-1920-x-1200-qecr3g1tuhmoia2n.jpg'
const StoriesFeaturedCard = ({ data }) => {

    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 5,
          slidesToSlide: 5 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 5,
          slidesToSlide: 5 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 3,
          slidesToSlide: 3 // optional, default to 1.
        }
      };
  return (
    <>
      <Carousel
  swipeable={true}
  draggable={true}
  showDots={true}
  responsive={responsive}
  ssr={true} // means to render carousel on server-side.
  infinite={true}
  autoPlaySpeed={1000}
  keyBoardControl={true}
  customTransition="all .5"
  transitionDuration={500}
  containerClass="carousel-container"
  removeArrowOnDeviceType={["tablet", "mobile"]}
  dotListClass="custom-dot-list-style"
  itemClass="carousel-item-padding-40-px"
>
      {data
        ? data.map((storie) => {
            return (
              <div className="sellingCard" key={storie.id}>
                <Link to={`/storie/${storie.id}`} className="Link">
                  <img
                    src={black}
                    alt=""
                  />
                  <div className="sellingTitle">
                    <h3>{storie.title}</h3>
                  </div>
                </Link>
              </div>
            );
          })
        : ""}
        </Carousel>
    </>
  );
};

export default StoriesFeaturedCard;
