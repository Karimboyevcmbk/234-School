import "./Guest.scss"
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const Films = () => {
  return (
    <div style={{background:"#0A0A0A"}} className="container2">
        <div className="films">
            <div className="kinoSearch">
                <h2>Togaraklar</h2>
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
                    <img className="imgTepa" src="data:image/jpeg;base64,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" alt="" />
                </SwiperSlide>
                <SwiperSlide className='mySwiperSections2'>
                    <img className="imgTepa" src="https://s-cdn.sportbox.ru/images/styles/upload/fp_fotos/be/49/aa4aa29de477dd8b8b7b11c8739e98ad62b592d0b9a6a727896039.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide className='mySwiperSections2'>
                    <img className="imgTepa" src="https://m.kunduz.com/media/wp/kimya-11.-sinif-e1605532970287-1024x512.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide className='mySwiperSections2'>
                    <img className="imgTepa" src="https://img.freepik.com/free-vector/chalkboard-with-math-elements_1411-88.jpg?w=2000" alt="" />
                </SwiperSlide>
                <SwiperSlide className='mySwiperSections2'>
                    <img className="imgTepa" src="https://www.vec.ca/wp-content/uploads/2019/03/English-Language-Level-System.jpg" alt="" />
                </SwiperSlide>

            </Swiper>
        </div>
    </div>
  )
}

export default Films