import React from 'react'
import Footer from '../components/Footer'
import HeaderPage from '../components/HeaderPage'
import MainCard from '../components/MainCard'
import PhotoReviews1 from '../images/foto_1_rev.jpg'
import PhotoReviews2 from '../images/foto_2_rev.jpg'
import PhotoReviews3 from '../images/foto_3_rev.jpg'


function reviews() {
  return (
    <>
    <HeaderPage/>
    <div >
        <MainCard img={PhotoReviews1} title='Клиент Софья' text='Хочу отметить мастера Елене за её профессионализм и умение создать неповторимый образ. Она учла все мои пожелания и сделала мою стрижку идеальной. Елена обладает настоящим талантом и любовью к своему делу. Рекомендую всем посетить ваш салон и насладиться качественным обслуживанием!'/>
        <MainCard img={PhotoReviews2} title='Клиент Ольга' text='Не могу не отметить работу стилиста Екатерины. Стилист подобрал для меня идеальную стрижку и окрашивание, которые подчеркнули мою индивидуальность и добавили шарма.'/>
        <MainCard img={PhotoReviews3} title='Клиент Кристина' text='Хочу выразить огромную благодарность вашему салону красоты за то, что вы делаете женщин красивыми и счастливыми! Здесь работают настоящие волшебницы, которые превращают нас в настоящих королев. Рекомендую всем посетить ваш салон и убедиться в этом самим!'/>
    </div>
    <Footer/>
    </>
  )
}

export default reviews