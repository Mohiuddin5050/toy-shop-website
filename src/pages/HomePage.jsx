import React from 'react';
import slider1Img from '../assets/slider1.jpg'
import slider2Img from '../assets/slider2.jpg'
import slider3Img from '../assets/slider3.jpg'
import slider4Img from '../assets/slider4.jpg'

const HomePage = () => {
    return (
        <div className=''>
            <div className="carousel w-full py-5">
                <div id="slide1" className="carousel-item relative w-full h-96 object-cover">
                    <img
                        src={slider1Img}
                        className="w-full" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full h-96 object-cover">
                    <img
                        src={slider2Img}
                        className="w-full" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full h-96 object-cover">
                    <img
                        src={slider3Img}
                        className="w-full" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full h-96 object-cover">
                    <img
                        src={slider4Img}
                        className="w-full" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
            <div>
                
            </div>
        </div>
    );
};

export default HomePage;