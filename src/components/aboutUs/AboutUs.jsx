import "./AboutUs.scss"
import Aos from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"

const AboutUs = () => {
    useEffect(()=>{
        Aos.init()
    })
  return (
    <div data-aos="fade-up" data-aos-duration="3000"  className='aboutUs'>
        <div className="bilmadms">
            <h2>234-MAKTAB</h2>
            <p>234-MAKTAB</p>
            <div className="line"></div>
            <img className="gooo" src="https://cityhighschool.pk/wp-content/uploads/2020/07/CHS-icon.svg" alt="" />
            <div className="aboutus">
                <div className="abotUsTitle">Maktab 1971-yilda qurilgan bo‘lib, 2017-yilda rekonstruksiya qilingan.Hozirgi kunda maktabda 38 nafar o‘qituvchi, 1751 nafar o‘quvchi va 52 ta 2 o‘rinli maktab faoliyat yuritmoqda. Maktab Tahkentda 97, tumanda 6-o‘rinda turadi. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nima bo'lishidan qat'iy nazar, vaqtinchalik korruptsiyaga yo'l qo'ymaydimi? Nam quo beatae, est sequi magni dolor autem blanditiis, possimus nemo ab ipsa ipsam. Ullam beatae ipsum aperiam iure rerum recusandae ab suscipit tempora saepe deleniti voluptas facilis odio nobis, dolor voluptatem. Voluptatibus.</div>
                <img src="https://cityhighschool.pk/wp-content/uploads/2020/07/CHS-icon.svg" alt="" />
            </div>
        </div>
    </div>
  )
}

export default AboutUs