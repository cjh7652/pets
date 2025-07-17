import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { IoIosArrowRoundBack } from "react-icons/io";
import { IoIosArrowRoundForward } from "react-icons/io";
import { RiPauseMiniFill } from "react-icons/ri";
import data from '../data/data'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './mainslider.scss';



// import required modules
import { Pagination, Navigation, Autoplay } from 'swiper/modules'; 

const Mainslider = () => {
    const [swiperIndex, setSwiperIndex]=useState(0)
    return (
        <div className='mainslider'>
            <div className='cont'>
                <Swiper
                    pagination={{
                    type: 'fraction',
                    }}
                    navigation={true}
                    autoplay={
                        {
                            delay: 3000,
                            disableOnInteraction: false,
                        }
                    }
                    loop={true}
                    modules={[Pagination, Navigation, Autoplay]}
                    className="mySwiper"
                >
                    <SwiperSlide><img src={process.env.PUBLIC_URL + 'img/mainslider1.png'} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={process.env.PUBLIC_URL + 'img/mainslider2.png'} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={process.env.PUBLIC_URL + 'img/mainslider3.png'} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={process.env.PUBLIC_URL + 'img/mainslider4.png'} alt="" /></SwiperSlide>
    
                </Swiper>
            </div>
            <div className="page_box">
                <div className="page">
                    <div className="swiper_progress_bar">
                        <div className="slider-bar">
                            <div className="fill"></div>
                        </div>
                    </div>
                    <div className="swiper-pagination">
                        <span>0{swiperIndex}</span>
                        <span>/</span>
                        <span>04</span>
                    </div>
                     <div className="swiper-btn">
                        <div className="swiperPrevBtn"><IoIosArrowRoundBack /></div>
                        <div className="btn-auto">
                            <div className="btn-stop">
                                <RiPauseMiniFill />
                            </div>
                        </div>
                        <div className="swiperNextBtn"><IoIosArrowRoundForward /></div>
                     </div>
                </div>
                
            </div>
        </div>
    );
};

export default Mainslider;