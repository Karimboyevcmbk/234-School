import "./Ariza.scss"
import { useState } from "react"

const Ariza = () => {
  const [name,setName]=useState("")
  const [surname,setSyrname]=useState("")
  const [date,setDate]=useState("")
  const [adres,setAdres]=useState("")
  const [telefon,setTelefon]=useState("")
  const [fish,setFish]=useState("")

  function inputClear(){
    setName("")
    setSyrname("")
    setDate("")
    setAdres("")
    setTelefon(0)
    setFish("")
}
  return (
    <div className='ariza'>
      <div className='arizaa'>
        <p>sinflar</p>
        <select>
          <option>1-sinf</option>
          <option>2-sinf</option>
          <option>3-sinf</option>
          <option>4-sinf</option>
          <option>5-sinf</option>
          <option>6-sinf</option>
          <option>7-sinf</option>
          <option>8-sinf</option>
          <option>9-sinf</option>
          <option>10-sinf</option>
          <option>11-sinf</option>
        </select>
        <p>ism</p>
        <input type="text" value={name} onChange={(e)=>setName(e.value)} placeholder="ism"/>
        <p>familiya</p>
        <input type="text" value={surname} onChange={(e)=>setSyrname(e.value)} placeholder="familya"/>
        <p>tug'ilgan kun</p>
        <input type="date" value={date} onChange={(e)=>setDate(e.value)} />
        <p>Ariza beruvchining F.I.SH</p>
        <input type="text" value={fish} onChange={(e)=>setFish(e.value)}  placeholder="ism/familya"/>
        <p>yashash manzili</p>
        <input type="text" value={adres} onChange={(e)=>setAdres(e.value)}  placeholder="adres"/>
        <p>telefon</p>
        <input type="number" value={telefon} onChange={(e)=>setTelefon(e.value)} placeholder="namuna:(998)987654321"/>
        <button onClick={inputClear}>arizani yopshirish</button>
      </div>
    </div>
  )
}

export default Ariza