import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const AvengerCard = ({data}) => {
      const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 7,
          slidesToSlide: 7 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 6,
          slidesToSlide: 6 // optional, default to 1.
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
      {
        (data)?(data.map(item=>{
            return(
                <div className="card home-card" >
                    <img src={`${item.thumbnail.path}.${item.thumbnail.extension}`}alt="" />
                    <div className="title-avenger">
                        <h3>{item.title}</h3>
                    </div>
                </div>
            )
        })
        ):""
    }
    </Carousel>
    </>
  )
}

export default AvengerCard