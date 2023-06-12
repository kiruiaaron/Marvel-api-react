import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const EventCardPage = ({ data }) => {
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
        ? data.map((event) => {
            return (
              <div>
                <div
                  className="ItemHero"
                  style={{
                    backgroundImage: `url(${event.thumbnail.path}.${event.thumbnail.extension})`,
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
                    <h1>{event.title}</h1>
                    <p>{event.description}</p>
                    <h1>Modified</h1>
                    <p>{event.modified}</p>
                    <button>
                      <a href={event.resourceURI}>LEARN MORE</a>
                    </button>
                  </div>
                </div>
                <div className="cardItemDetails">
                  <div className="cardItem" key={event.id}>
                    <div className="itemImage">
                      <img
                        src={`${event.thumbnail.path}.${event.thumbnail.extension}`}
                        alt=""
                      />
                    </div>
                    <div className="ItemTitle">
                      <h3>{event.title}</h3>
                      <p>{event.description}</p>
                      <p>
                        Comics Available: <span>{event.comics.available}</span>
                      </p>
                      <p>
                        Series Available: <span>{event.series.available}</span>
                      </p>
                      <p>
                        Stories Available: <span>{event.stories.available}</span>
                      </p>
                      <p>
                        Characters Available: <span>{event.characters.available}</span>
                      </p>
                      <p>
                        Comics Available: <span>{event.comics.available}</span>
                      </p>
                      <p>
                        Next Event: <span>{event.next.name}</span>
                      </p>
                      <p>
                        Preveious Event: <span>{event.previous.name}</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="itemNew">
                  <div className="container">
                    <h1>LATEST COMICS</h1>
                    
                    
                    
                    <div>
                      {event.comics.items.length> 0 ?(
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
                       
                      
                        {event.comics.items.map((item)=>(
                         
                         <li  className="coureselItem" >
                           <div>
                         <img
                         src={`${event.thumbnail.path}.${event.thumbnail.extension}`}
                         alt=""
                       /><span key={item.id}>{item.name}</span>
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
                    <h1>LATEST SERIES</h1>
                    
                    
                     <div  >
                    
                      {event.series.items.length> 0 ?(
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
                      
                        {event.series.items.map((item)=>(
                         
                         <li className="coureselItem"> 
                         <img
                         src={`${event.thumbnail.path}.${event.thumbnail.extension}`}
                         alt=""
                       /><span key={item.id}>{item.name}</span></li>
                   
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
                    <h1>LATEST STORIES</h1>
                    
                    
                     <div  >
                    
                      {event.stories.items.length> 0 ?(
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
                      
                        {event.stories.items.map((item)=>(
                         
                         <li className="coureselItem"> 
                         <img
                         src={`${event.thumbnail.path}.${event.thumbnail.extension}`}
                         alt=""
                       /><span key={item.id}>{item.name}</span></li>
                   
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
                    <h1>CHARACTERS INVOLVED</h1>
                    
                    
                     <div >
                    
                      {event.characters.items.length> 0 ?(
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
                      
                        {event.characters.items.map((item)=>(
                         
                         <li className="coureselItem"> 
                         <img
                         src={`${event.thumbnail.path}.${event.thumbnail.extension}`}
                         alt=""
                       /><span key={item.id} className="newName">{item.name}</span></li>
                   
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
                    <h1>CREATORS INVOLVED</h1>
                    
                    
                     <div >
                    
                      {event.creators.items.length> 0 ?(
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
                      
                        {event.creators.items.map((item)=>(
                         
                         <li className="coureselItem"> 
                         <img
                         src={`${event.thumbnail.path}.${event.thumbnail.extension}`}
                         alt=""
                       /><span key={item.id} className="newName">{item.name}</span></li>
                   
                        ))}
                        </Carousel>
                      </ul>
                      </div>
                      ):(
                        <p>
                          No Creators available for this Item
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

export default EventCardPage;
