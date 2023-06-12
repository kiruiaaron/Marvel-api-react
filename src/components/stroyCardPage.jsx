import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import black from '../images/black-panther-hero-1920-x-1200-qecr3g1tuhmoia2n.jpg'
import cute from '../images/cute-black-panther-0seysw337bui873o.jpg'
import marvel from '../images/marvel-android-gacfrdxb2a1st5sa.jpg'

const StoryCardPage = ({ data }) => {
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
        ? data.map((storie) => {
            return (
              <div>
                <div
                  className="ItemHero"
                  style={{
                    backgroundImage: `url(${storie.thumbnail})`,
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
                    <h1 className="storyTitle">{storie.title}</h1>
                    <h1>Modified</h1>
                    <p>{storie.modified}</p>
                    <button>
                      <a href={storie.resourceURI}>LEARN MORE</a>
                    </button>
                  </div>
                </div>
                <div className="cardItemDetails">
                  <div className="cardItem" key={storie.id}>
                    <div className="itemImage">
                      <img
                        src={black}
                        alt=""
                      />
                    </div>
                    <div className="ItemTitle">
                      <h3>{storie.firstName}</h3>
                      <p>
                       Comics Available: <span>{storie.comics.available}</span>
                      </p>
                      <p>
                        Events Available: <span>{storie.events.available}</span>
                      </p>
                      <p>
                        Series Available: <span>{storie.series.available}</span>
                      </p>
                      <p>
                        Characters Available: <span>{storie.characters.available}</span>
                      </p>
                      <p>
                        Creators Available: <span>{storie.creators.available}</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="itemNew">
                  <div className="container">
                    <h1> LATEST COMICS</h1>
                    
                    
                    
                    <div>
                      {storie.comics.items.length> 0 ?(
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
                       
                      
                        {storie.comics.items.map((event)=>(
                         
                         <li  className="coureselItem" >
                           <div>
                         <img
                         src={cute}
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
                    <h1>CHARACTERS INVOLVED</h1>
                    
                    
                     <div  >
                    
                      {storie.characters.items.length> 0 ?(
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
                      
                        {storie.characters.items.map((event)=>(
                         
                         <li className="coureselItem"> 
                         <img
                         src={marvel}
                         alt=""
                       /><span key={event.id}>{event.name}</span></li>
                   
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
                    <h1>SERIES INVOLVED</h1>
                    
                    
                     <div  >
                    
                      {storie.series.items.length> 0 ?(
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
                      
                        {storie.series.items.map((event)=>(
                         
                         <li className="coureselItem"> 
                         <img
                         src={cute}
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
                    
                      {storie.events.items.length> 0 ?(
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
                      
                        {storie.events.items.map((event)=>(
                         
                         <li className="coureselItem"> 
                         <img
                         src={marvel}
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
                <div className="itemNew">
                  <div className="container">
                    <h1> CREATORS INVOLVED</h1>
                    
                    
                     <div >
                    
                      {storie.creators.items.length> 0 ?(
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
                      
                        {storie.creators.items.map((event)=>(
                         
                         <li className="coureselItem"> 
                         <img
                         src={cute}
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

export default StoryCardPage ;
