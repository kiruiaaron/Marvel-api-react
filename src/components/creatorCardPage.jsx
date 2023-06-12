import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const CreatorCardPage = ({ data }) => {
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
        ? data.map((creator) => {
            return (
              <div>
                <div
                  className="ItemHero"
                  style={{
                    backgroundImage: `url(${creator.thumbnail.path}.${creator.thumbnail.extension})`,
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
                    <h1>{creator.firstName}</h1>
                    <h1>Modified</h1>
                    <p>{creator.modified}</p>
                    <button>
                      <a href={creator.resourceURI}>LEARN MORE</a>
                    </button>
                  </div>
                </div>
                <div className="cardItemDetails">
                  <div className="cardItem" key={creator.id}>
                    <div className="itemImage">
                      <img
                        src={`${creator.thumbnail.path}.${creator.thumbnail.extension}`}
                        alt=""
                      />
                    </div>
                    <div className="ItemTitle">
                      <h3>{creator.firstName}</h3>
                      <p>
                       Comics Available: <span>{creator.comics.available}</span>
                      </p>
                      <p>
                        Events Available: <span>{creator.events.available}</span>
                      </p>
                      <p>
                        Stories Available: <span>{creator.stories.available}</span>
                      </p>
                      <p>
                        Series Available: <span>{creator.series.available}</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="itemNew">
                  <div className="container">
                    <h1> LATEST COMICS</h1>
                    
                    
                    
                    <div>
                      {creator.comics.items.length> 0 ?(
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
                       
                      
                        {creator.comics.items.map((event)=>(
                         
                         <li  className="coureselItem" >
                           <div>
                         <img
                         src={`${creator.thumbnail.path}.${creator.thumbnail.extension}`}
                         alt=""
                       /><span key={event.id}>{event.name}</span>
                       </div></li>
                   
                        ))}
                        
                        </Carousel>
                      </ul>
                      </div>
                      ):(
                        <p>
                          No Comics available for this Item
                        </p>
                      )}
                     </div>
                  </div>
                </div>
                <div className="itemNew">
                  <div className="container">
                    <h1>STORIES</h1>
                    
                    
                     <div  >
                    
                      {creator.stories.items.length> 0 ?(
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
                      
                        {creator.stories.items.map((event)=>(
                         
                         <li className="coureselItem"> 
                         <img
                         src={`${creator.thumbnail.path}.${creator.thumbnail.extension}`}
                         alt=""
                       /><span key={event.id}>{event.name}</span></li>
                   
                        ))}
                        </Carousel>
                      </ul>
                      </div>
                      ):(
                        <p>
                          No Stories available for this Item
                        </p>
                      )}
                     </div>
                  </div>
                </div>
                <div className="itemNew">
                  <div className="container">
                    <h1>SERIES INVOLVED</h1>
                    
                    
                     <div  >
                    
                      {creator.series.items.length> 0 ?(
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
                      
                        {creator.series.items.map((event)=>(
                         
                         <li className="coureselItem"> 
                         <img
                         src={`${creator.thumbnail.path}.${creator.thumbnail.extension}`}
                         alt=""
                       /><span key={event.id}>{event.name}</span></li>
                   
                        ))}
                        </Carousel>
                      </ul>
                      </div>
                      ):(
                        <p>
                          No Series available for this Item
                        </p>
                      )}
                     </div>
                  </div>
                </div>
                <div className="itemNew">
                  <div className="container">
                    <h1> EVENTS</h1>
                    
                    
                     <div >
                    
                      {creator.events.items.length> 0 ?(
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
                      
                        {creator.events.items.map((event)=>(
                         
                         <li className="coureselItem"> 
                         <img
                         src={`${creator.thumbnail.path}.${creator.thumbnail.extension}`}
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

export default CreatorCardPage ;
