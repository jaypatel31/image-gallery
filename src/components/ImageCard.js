import React, {useState} from 'react';


function ImageCard({image, theme,clickHandler}) {

  let cl = (theme == "light") ? "#f1f1f1" : "#242424" ; 

  let bs = (theme == "light") ? "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" : "0 10px 15px -3px rgba(255, 255, 255, 0.1), 0 4px 6px -2px rgba(255, 255, 255, 0.05)" ;

  let tags = image.tags.split(",");

  return (

    <div onClick={()=>clickHandler(image.id)} style={{background:cl, transition:"0.9s ease", boxShadow:bs}} className="imgContainer max-w-sm rounded overflow-hidden shadow-lg mb-2">
      <img className="w-full" src={image.webformatURL} alt="" />
      <div className="px-6 py-4">
        <div className="font-bold text-purple-500 text-base md:text-xl mb-2">
            Photo by {image.user}
        </div>
        <ul>
              <li>
                <strong>Views: </strong>
                {image.views}
              </li>
              <li>
                <strong>Downloads: </strong>
                {image.downloads}
              </li>
              <li>
                <strong>Likes: </strong>
                {image.likes}
              </li>
            </ul>
      </div>
      <div className="px-6 py-4">
        {
          tags.map((item,index) => {
            return (
                 <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 my-2">
                  #{item}
                </span>
              )
          })
        }
       
      </div>
    </div>
  )
}

export default ImageCard