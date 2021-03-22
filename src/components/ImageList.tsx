import React from 'react';
import Image from './Image';

interface ImageData{
  id: string;
  alt_description: string;
  urls:{
    regular: string;
  }
}

export default function ImageList({imageData}:{imageData: ImageData[]}) {

  const Images = imageData.map( image => <Image style={{width: '100%'}} key={image.id} src={image.urls.regular} alt={image.alt_description}/>)

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gridAutoRows: '10px', gridGap: '0px 10px'}}>
      {Images}
    </div>
  )
}
