import "./Footer.scss"
import { AiOutlineInstagram,AiFillYoutube, } from "react-icons/ai"
import { BiLogoFacebook,BiLogoTelegram } from "react-icons/bi"

const Footer = () => {
  return (
    <div className="footerContainer">
    <footer>
        <h2>Kantaktlar</h2>
        <div className="footerTitles">
            <div className="title1">
                <p>Telefon:</p>
                <div className="hoverSpan">
                    <span>+998 71 229 16 03</span>
                    <div className="Lien boshqa2"></div>
                </div>
            </div>
            <div className="title1">
                <p>pochta:</p>
                <div className="hoverSpan">
                    <span>salom@gmail.com</span>
                    <div className="Lien boshqacha boshqa2"></div>
                </div>
            </div>
            <div className="title1 title2">
                <p>Bizga qoshiling:</p>
                <div className="hoverSpan">
                    <span><AiOutlineInstagram/>Instagram </span>
                    <div className="Lien boshqa2"></div>
                </div>
                <div className="hoverSpan">
                    <span><BiLogoTelegram/>Telegram</span>
                    <div className="Lien boshqa2"></div>
                </div>
                <div className="hoverSpan ">
                    <span><BiLogoFacebook/>Facebook</span>
                    <div className="Lien boshqa2"></div>
                </div>
                <div className="hoverSpan ">
                    <span><AiFillYoutube/>Youtube</span>
                    <div className="Lien boshqa2"></div>
                </div>
            </div>
            <div className="title1">
                <p>Adres:</p>
                <div className="hoverSpan">
                    <span>Olmazor tumani Tepaguzar mahallasi</span>
                    <div className="Lien boshqa2"></div>
                </div>
            </div>
        </div>
    </footer>
    </div>
  )
}

export default Footer