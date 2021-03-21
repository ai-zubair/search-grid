import React from 'react';

interface Image{
  alt_description: string;
  urls:{
    regular: string;
  }
}

export default function ImageList({imageData}:{imageData: Image[]}) {

  const Images = imageData.map( image => <img src={image.urls.regular} alt={image.alt_description}/>)

  return (
    <div>
      {Images}
    </div>
  )
}
