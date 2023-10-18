import "./Nav.scss"
import { AiOutlineInstagram,AiFillYoutube,AiOutlineClose } from "react-icons/ai"
import { BiLogoFacebook,BiLogoTelegram } from "react-icons/bi"
import { RiArrowDownSLine } from "react-icons/ri" 
import { RxHamburgerMenu } from "react-icons/rx"
import { Link } from "react-router-dom"
import { useState } from "react"
const Nav = () => {
    const [closeOrOpen,setCloseOrOpen]= useState(false)

    return (
        <nav>
            <div className="nav-wrapper">
                <img className="saytLogo" src="https://cityhighschool.pk/wp-content/uploads/2020/07/CHS-icon.svg" alt="" />
                <div className="saytPages">
                    <ul>
                    <li className="withOutArrow">
                            <a href="/">Home</a>
                            <div className="hoverLine"></div>
                        </li>
                        <li className="withOutArrow">
                            <a href="/teachers">Ustozlar</a>
                            <div className="hoverLine"></div>
                        </li>
                        <li className="withOutArrow">
                            <a href="/ariza">Ariza Topshirish</a>
                            <div className="hoverLine"></div>
                        </li>
                        <li className="withOutArrow">
                            <a href="/news">Yangiliklar</a>
                            <div className="hoverLine"></div>
                        </li>
                    </ul>
                </div>
                <div className="seeUs">
                    <a href="https://www.instagram.com/234_maktab/"><AiOutlineInstagram/></a>
                    <a href="https://www.facebook.com/"><BiLogoFacebook/></a>
                    <a href="https://t.me/maktabdowlaaa"><BiLogoTelegram/></a>
                    <a href="https://www.youtube.com/@234-maktabolmazortumani3"><AiFillYoutube/></a>
                </div>
                <div className="hamburger">
                    <RxHamburgerMenu style={closeOrOpen === true ? {display:"none"}:{display:"block"}} onClick={()=>setCloseOrOpen(true)}/>
                    <AiOutlineClose style={closeOrOpen === false ? {display:"none"}:{display:"block"}}  onClick={()=>setCloseOrOpen(false)}/>
                </div>
                <div style={closeOrOpen === true ? {marginLeft:"0"}:{marginLeft:"-400px"}} className="mediaNav">
                    <img src="https://cityhighschool.pk/wp-content/uploads/2020/07/CHS-icon.svg" alt=""/>
                        <div className="navWithOutArrow">
                            <Link onClick={()=>setCloseOrOpen(false)} to="/">Home</Link>
                        </div> 
                        <div className="navWithOutArrow">
                            <Link onClick={()=>setCloseOrOpen(false)} to='/teachers'>Ustozlar</Link>
                        </div>
                        <div className="navWithOutArrow">
                            <Link onClick={()=>setCloseOrOpen(false)} to='/ariza'>Ariza Topshirish</Link>
                        </div>
                        <div className="navWithOutArrow">
                            <Link onClick={()=>setCloseOrOpen(false)} to='/news'>Yangiliklar</Link>
                        </div>
                </div>
            </div>
        </nav>
    )
}

export default Nav