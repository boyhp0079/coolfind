import React from 'react'
import './Home.css'
export default function Home({images}) {
  
    return (
        <div className = "pic-container">
            {images.map((img,index)=>(<div key={index} className="pic"><img src = {img} alt = "asd"/></div>))}
        </div>
    )
}
