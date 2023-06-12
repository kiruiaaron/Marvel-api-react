import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const CardPage = ({ data }) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
      slidesToSlide: 5, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 5,
      slidesToSlide: 5, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
  };
  return (
    <>
      {data
        ? data.map((item) => {
            return (
              <div>
                <div
                  className="ItemHero"
                  style={{
                    backgroundImage: `url(${item.thumbnail.path}.${item.thumbnail.extension})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    width: "100%",
                    height: "60vh",
                    padding: "0",
                    position: "relative",
                    border: "2px solid #151111",
                    marginBottom: "2em",
                  }}
                >
                  <div className="ItemDetails">
                    <h1>{item.name}</h1>
                    <p>{item.description}</p>
                    <h1>Modified</h1>
                    <p>{item.modified}</p>
                    <button>
                      <a href={item.resourceURI}>LEARN MORE</a>
                    </button>
                  </div>
                </div>
                <div className="cardItemDetails">
                  <div className="cardItem" key={item.id}>
                    <div className="itemImage">
                      <img
                        src={`${item.thumbnail.path}.${item.thumbnail.extension}`}
                        alt=""
                      />
                    </div>
                    <div className="ItemTitle">
                      <h3>{item.name}</h3>
                      <p>{item.description}</p>
                      <p>
                        Comics Available: <span>{item.comics.available}</span>
                      </p>
                      <p>
                        Series Available: <span>{item.series.available}</span>
                      </p>
                      <p>
                        Stories Available: <span>{item.stories.available}</span>
                      </p>
                      <p>
                        Events Available: <span>{item.events.available}</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="itemNew">
                  <div className="container">
                    <h1>LATEST COMICS</h1>
                    
                    
                    
                    <div>
                      {item.comics.items.length> 0 ?(
                        <div>
                       <ul>
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
                        className="couresel">
                       
                      
                        {item.comics.items.map((event)=>(
                         
                         <li  className="coureselItem" >
                           <div>
                         <img
                         src={`${item.thumbnail.path}.${item.thumbnail.extension}`}
                         alt=""
                       /><span key={event.id}>{event.name}</span>
                       </div></li>
                   
                        ))}
                        
                        </Carousel>
                      </ul>
                      </div>
                      ):(
                        <p>
                          No events available for this Item
                        </p>
                      )}
                     </div>
                  </div>
                </div>
                <div className="itemNew">
                  <div className="container">
                    <h1>LATEST SERIES</h1>
                    
                    
                     <div  >
                    
                      {item.series.items.length> 0 ?(
                        <div>
                       <ul>
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
                        className="couresel">
                      
                        {item.series.items.map((event)=>(
                         
                         <li className="coureselItem"> 
                         <img
                         src={`${item.thumbnail.path}.${item.thumbnail.extension}`}
                         alt=""
                       /><span key={event.id}>{event.name}</span></li>
                   
                        ))}
                        </Carousel>
                      </ul>
                      </div>
                      ):(
                        <p>
                          No events available for this Item
                        </p>
                      )}
                     </div>
                  </div>
                </div>
                <div className="itemNew">
                  <div className="container">
                    <h1>LATEST STORIES</h1>
                    
                    
                     <div  >
                    
                      {item.stories.items.length> 0 ?(
                        <div>
                       <ul>
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
                        className="couresel">
                      
                        {item.stories.items.map((event)=>(
                         
                         <li className="coureselItem"> 
                         <img
                         src={`${item.thumbnail.path}.${item.thumbnail.extension}`}
                         alt=""
                       /><span key={event.id}>{event.name}</span></li>
                   
                        ))}
                        </Carousel>
                      </ul>
                      </div>
                      ):(
                        <p>
                          No events available for this Item
                        </p>
                      )}
                     </div>
                  </div>
                </div>
                <div className="itemNew">
                  <div className="container">
                    <h1>LATEST EVENTS</h1>
                    
                    
                     <div >
                    
                      {item.events.items.length> 0 ?(
                        <div>
                       <ul>
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
                        className="couresel">
                      
                        {item.events.items.map((event)=>(
                         
                         <li className="coureselItem"> 
                         <img
                         src={`${item.thumbnail.path}.${item.thumbnail.extension}`}
                         alt=""
                       /><span key={event.id} className="newName">{event.name}</span></li>
                   
                        ))}
                        </Carousel>
                      </ul>
                      </div>
                      ):(
                        <p>
                          No events available for this Item
                        </p>
                      )}
                     </div>
                  </div>
                </div>
              </div>
            );
          })
        : ""}
    </>
  );
};

export default CardPage;
