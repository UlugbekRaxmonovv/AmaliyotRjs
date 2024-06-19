import { useState } from 'react'
import './App.css'
import Buyurtma from './components/Buyurtma/Buyurtma'
import Navbar from './components/Navbar/Navbar'
import Main from './components/Main/Main'
import Section from './components/Section/Section'
import Рассчитай from './components/Рассчитай/Рассчитай'
import Investitsiya from './components/Investitsiya/Investitsiya'
import Company from './components/Company/Company'
import IshModeli from './components/IshModeli/IshModeli'
import Онлайн from './components/Онлайн/Онлайн'
import InvestitsionMahsulotlar from './components/InvestitsionMahsulotlar/InvestitsionMahsulotlar'
function App() {

  return (
    <>
    <Navbar/>
    <Main/>
    <Section/>
    <Рассчитай/>
    <Investitsiya/>
    <InvestitsionMahsulotlar/>
    <Company/>
    <Buyurtma/>
    <IshModeli/>
    <Онлайн/>
   
    </>
  )
}

export default App
