import React from 'react'

export default function ProductCards({image,title,description,price}) {
  return (
    <>
    <div className="container" style={{width: 250,padding: 15,margin: 10,boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px"}} >
        <img src={image} alt="" style={{width: "100%",height: 200,}}/>
        <h2>{title}</h2>
        <p>{description}</p>
        <h5>{price}</h5>
        <button>
            detail
        </button>

    </div>
    </>
  )
}
