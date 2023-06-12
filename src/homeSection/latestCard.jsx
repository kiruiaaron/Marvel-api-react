import React from 'react'

const LatestCard = ({data}) => {
  return (
    <>
      {
        (data)?(data.map(item=>{
            return(
                <div className="latest-card">
                    <div className='image'>
                    <img src={`${item.thumbnail.path}.${item.thumbnail.extension}`}alt="" />
                    </div>
                    <div className="latest-title">
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                        <h3>Start <br /> <span>{item.start}</span></h3>
                        <h3>End <br /> <span>{item.end}</span></h3>
                        <h3>Date Modified: <br /> <span>{item.modified}</span></h3>
                    </div>
                </div>
            )
        })
        ):""
    }
    </>
  )
}

export default LatestCard