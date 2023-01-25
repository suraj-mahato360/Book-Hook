import React from 'react'
import '../App.css'
import book1 from '../assets/book1.png'
import book2 from '../assets/book2.png'
import book3 from '../assets/book3.png'
import book4 from '../assets/book4.png'


const ImgSlider = () => {
  const slides = [book1,book2,book3,book4];
  const delay = 3500;
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === slides.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {};
  }, [index]);
  


  return (
    <div className="slideshow">
      <div className="slideshowSlider" style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}>
        {slides.map((backImg, index) => (
          <img className="slide" src={ backImg } alt="" key={index} />
        ))}
      </div>
      </div>
  )
}

export default ImgSlider