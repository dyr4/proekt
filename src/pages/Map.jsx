import React from 'react'
import Footer from '../components/Footer'
import HeaderPage from '../components/HeaderPage'
import MainCard from '../components/MainCard'
import PhotoMap1 from '../images/foto_1_map.png'
import PhotoMap2 from '../images/foto_2_map.png'
import PhotoMap3 from '../images/foto_3_map.png'
import PhotoMap4 from '../images/foto_4_map.png'
import PhotoMap5 from '../images/foto_5_map.png'
import { Link } from 'react-router-dom'


function map() {
  return (
    <>
    <HeaderPage/>
    <div >
        <MainCard img={PhotoMap1} title={<Link to="/">Узнать о салоне</Link>} text=' Добро пожаловать в салон красоты Lime! Мы специализируемся на стрижках, окрашиваниях и укладках, предлагая нашим клиентам высококачественные услуги и индивидуальный подход.'/>
        <MainCard img={PhotoMap2} title={<Link to="/Spec">Посмотреть специалистов</Link>} text='Здесь вы сможете ознакомиться с специалистами и узнать немного о них'/>
        <MainCard img={PhotoMap3} title={<Link to="/Service">Заказать услуги</Link>} text='Здесь вы сможете увидеть какие услуги мы предоставляем'/>
        <MainCard img={PhotoMap4} title={<Link to="/Reviews">Посмотреть отзывы</Link>} text='Здесь вы сможете ознакомиться с отзывами наших довольных клиенток'/>
        <MainCard img={PhotoMap5} title={<Link to="/Contacts">Связаться с нами</Link>} text='Здесь вы сможете найти наши контакты'/>
    </div>
    <Footer/>
    </>
  )
}

export default map