import "./Films.scss"
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "aos/dist/aos.css"

const Films = () => {
  return (
    <div data-aos="fade-up" data-aos-duration="3000"  className='container2'>
        <div className="">
        <div className="films">
            <div className="kinoSearch2">
                <h2>Kitoblar</h2>
            </div>
            <Swiper
                breakpoints={{
                10: {
                    slidesPerView:2,
                    spaceBetween:10,
                },
                1000:{
                    slidesPerView:3,
                    spaceBetween:15,
                },
                1280: {
                    slidesPerView:4,
                    spaceBetween:30,
                }
                }}
                className="mySwiper2"
            >
                <SwiperSlide className='mySwiperSections2'>
                    <img src="https://e-library.sammu.uz/books/image/1655541935.png" alt="" />
                </SwiperSlide>
                <SwiperSlide className='mySwiperSections2'>
                    <img src="https://m.media-amazon.com/images/I/51wHUtCaVVL._AC_UF1000,1000_QL80_.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide className='mySwiperSections2'>
                    <img src="https://barakot.uz/image/get-image?imageName=Ona%20tili%20Mavzuli%20testlar%20va%20ularning%20tahlili%20II%20kitob.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide className='mySwiperSections2'>
                    <img src="https://m.media-amazon.com/images/I/51lIzSDKXlL._AC_UF1000,1000_QL80_.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide className='mySwiperSections2'>
                    <img src="http://el.tfi.uz/images/2022/02/Ozbekiston-tarixi.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide className='mySwiperSections2'>
                    <img src="https://barakot.uz/image/get-image?imageName=Tarbiya%20kitobi%201.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide className='mySwiperSections2'>
                    <img src="https://kitoblardunyosi.uz/image/cache/catalog/bolalar/ingiliz-tili-500x750.jpg" alt="" />
                </SwiperSlide>
            </Swiper>
        </div>
    </div>    
    </div>
  )
}

export default Films;