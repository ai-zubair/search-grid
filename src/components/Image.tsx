import React, { Component, CSSProperties, createRef, RefObject } from 'react'

interface ImageProps{
  src: string;
  alt: string;
  style: CSSProperties;
}

export default class Image extends Component<ImageProps> {

  imgRef: RefObject<HTMLImageElement>;

  state = {
    imgHeight: 0
  }

  constructor(props: ImageProps){
    super(props);
    this.imgRef = createRef();
  }

  componentDidMount(){
    this.imgRef.current?.addEventListener("load",()=>{
      console.log(this.imgRef.current?.clientHeight);
      this.setState({
        imgHeight: this.imgRef.current?.clientHeight
      })
    })
  }

  render() {
    const {src, alt, style} = this.props;
    return (
      <div style={{ ...style,gridRowEnd : `span ${Math.ceil(this.state.imgHeight/10)}`}}>
        <img ref={this.imgRef} style={style} src={src} alt={alt}/>
      </div>
    )
  }
}
