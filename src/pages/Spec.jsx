import React from 'react'
import Footer from '../components/Footer'
import HeaderPage from '../components/HeaderPage'
import MainCard from '../components/MainCard'
import PhotoSpec1 from '../images/foto_1_spec.jpg'
import PhotoSpec2 from '../images/foto_2_spec.png'
import PhotoSpec3 from '../images/foto_3_spec.png'

function Spec() {
  return (
    <>
    <HeaderPage/>
    <div >
        <MainCard img={PhotoSpec1} title='Елена Дмитриева' text='Елена обладает многолетним опытом в области парикмахерского искусства. Она всегда находит индивидуальный подход к каждому клиенту, учитывая его пожелания и особенности волос.'/>
        <MainCard img={PhotoSpec2} title='Екатерина Федорова' text='Екатерина — талантливый колорист, способный создавать неповторимые образы, используя различные техники окрашивания. Её креативный подход и чувство стиля позволяют клиентам выглядеть ярко и модно.'/>
        <MainCard img={PhotoSpec3} title='Мария Азарова' text='Мария — настоящий гуру в области укладок и причёсок. Она умеет подчеркнуть естественную красоту волос и создавать уникальные образы, которые восхищают окружающих. Мария всегда готова экспериментировать и находить новые решения для своих клиентов.'/>
    </div>
    <Footer/>
    </>
  )
}

export default Spec