import React from 'react';

interface Image{
  id: string;
  alt_description: string;
  urls:{
    regular: string;
  }
}

export default function ImageList({imageData}:{imageData: Image[]}) {

  const Images = imageData.map( image => <img key={image.id} src={image.urls.regular} alt={image.alt_description}/>)

  return (
    <div>
      {Images}
    </div>
  )
}
