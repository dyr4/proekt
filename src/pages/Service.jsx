import React from 'react'
import Footer from '../components/Footer'
import HeaderPage from '../components/HeaderPage'
import MainCard from '../components/MainCard'
import FormService from '../components/FormService'
import PhotoService1 from '../images/foto_1_serv.png'
import PhotoService2 from '../images/foto_2_serv.png'
import PhotoService3 from '../images/foto_3_serv.png'
import PhotoService4 from '../images/foto_4_serv.jpg'
import PhotoService5 from '../images/foto_5_serv.jpg'

function Service() {
  return (
    <>
    <HeaderPage/>
    <div >
        <MainCard img={PhotoService1} title='Стрижки' text='Классическая стрижка — создание аккуратной причёски с чёткими линиями; Асимметричная стрижка — создание оригинального образа с разной длиной волос; Каре — стрижка с прямыми линиями и одинаковой длиной волос; Каскад — создание многоуровневой причёски с постепенным увеличением длины волос.'/>
        <MainCard img={PhotoService2} title='Окрашивание' text='Однотонное окрашивание — равномерное изменение цвета всех волос; Мелирование — осветление отдельных прядей; Колорирование — использование нескольких оттенков для создания яркого и многогранного образа; Омбре — плавный переход от тёмных корней к светлым кончикам; Балаяж — окрашивание отдельных прядей с акцентом на кончиках.'/>
        <MainCard img={PhotoService3} title='Укладки' text='Классическая укладка — создание гладких и прямых волос; Текстурная — придание волосам объёма и текстуры; Локоны — создание романтичных локонов с помощью плойки или утюжка;'/>
        <MainCard img={PhotoService4} title='Ламинирование волос' text='Восстановите красоту и блеск ваших волос с помощью ламинирования! Процедура разглаживает кутикулу, придавая волосам здоровый вид и сияние.'/>
        <MainCard img={PhotoService5} title='Маникюр' text='В нашем салоне мы предлагаем широкий спектр услуг маникюра: классический, аппаратный, гелевый и дизайн ногтей. Профессиональные мастера используют только качественные материалы, чтобы ваши ногти выглядели безупречно и радовали вас долгое время. Уютная атмосфера и индивидуальный подход к каждому клиенту создадут настроение для расслабления и отдыха'/>
        <FormService/>
        <Footer/>
    </div>
    </>
  )
}

export default Service