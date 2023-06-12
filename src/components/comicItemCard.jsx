import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const ComicCardPage = ({ data }) => {
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
        ? data.map((comic) => {
            return (
              <div>
                <div
                  className="ItemHero"
                  style={{
                    backgroundImage: `url(${comic.thumbnail.path}.${comic.thumbnail.extension})`,
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
                    <h1>{comic.title}</h1>
                    <h1>Modified</h1>
                    <p>{comic.modified}</p>
                    <button>
                      <a href={comic.resourceURI}>LEARN MORE</a>
                    </button>
                  </div>
                </div>
                <div className="cardItemDetails">
                  <div className="cardItem" key={comic.id}>
                    <div className="itemImage">
                      <img
                        src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
                        alt=""
                      />
                    </div>
                    <div className="ItemTitle">
                      <h3>{comic.title}</h3>
                      <p>{comic.description}</p>
                      <p>
                       Characters Available: <span>{comic.characters.available}</span>
                      </p>
                      <p>
                        Creators Available: <span>{comic.creators.available}</span>
                      </p>
                      <p>
                        Stories Available: <span>{comic.stories.available}</span>
                      </p>
                      <p>
                        Events Available: <span>{comic.events.available}</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="itemNew">
                  <div className="container">
                    <h1>CHARACTERS INVOLVED</h1>
                    
                    
                    
                    <div>
                      {comic.characters.items.length> 0 ?(
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
                       
                      
                        {comic.characters.items.map((event)=>(
                         
                         <li  className="coureselItem" >
                           <div>
                         <img
                         src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
                         alt=""
                       /><span key={event.id}>{event.name}</span>
                       </div></li>
                   
                        ))}
                        
                        </Carousel>
                      </ul>
                      </div>
                      ):(
                        <p>
                          No Characters available for this Item
                        </p>
                      )}
                     </div>
                  </div>
                </div>
                <div className="itemNew">
                  <div className="container">
                    <h1>STORIES</h1>
                    
                    
                     <div  >
                    
                      {comic.stories.items.length> 0 ?(
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
                      
                        {comic.stories.items.map((event)=>(
                         
                         <li className="coureselItem"> 
                         <img
                         src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
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
                    <h1>CREATORS INVOLVED</h1>
                    
                    
                     <div  >
                    
                      {comic.creators.items.length> 0 ?(
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
                      
                        {comic.creators.items.map((event)=>(
                         
                         <li className="coureselItem"> 
                         <img
                         src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
                         alt=""
                       /><span key={event.id}>{event.name}</span></li>
                   
                        ))}
                        </Carousel>
                      </ul>
                      </div>
                      ):(
                        <p>
                          No creators available for this Item
                        </p>
                      )}
                     </div>
                  </div>
                </div>
                <div className="itemNew">
                  <div className="container">
                    <h1> EVENTS</h1>
                    
                    
                     <div >
                    
                      {comic.events.items.length> 0 ?(
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
                      
                        {comic.events.items.map((event)=>(
                         
                         <li className="coureselItem"> 
                         <img
                         src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
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

export default ComicCardPage;
