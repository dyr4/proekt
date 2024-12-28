import React from 'react'
import Footer from '../components/Footer'
import MainHeader from '../components/MainHeader'
import FormContact from '../components/FormContact'
import mainphoto1 from '../images/foto_1_main.png'
import mainphoto2 from '../images/foto_2_main.png'
import MainCardReversed from '../components/MainCardReversed'
import FullImage from '../components/FullImage'

function Main() {
  return (
    <>
      <MainHeader />
      <MainCardReversed img={mainphoto1} title='О САЛОНЕ' text='Добро пожаловать в салон красоты Lime! Мы специализируемся на стрижках, окрашиваниях и укладках, предлагая нашим клиентам высококачественные услуги и индивидуальный подход. Наша миссия — сделать вас красивыми и уверенными в себе. В нашем салоне работают опытные мастера, которые постоянно совершенствуют свои навыки и следят за последними тенденциями в мире красоты.'/>
      <FullImage img={mainphoto2}/>
      <FormContact />
      <Footer/>
    </>
  )
}

export default Main