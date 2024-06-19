import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Main from './components/Main/Main'
import Section from './components/Section/Section'
import Рассчитай from './components/Рассчитай/Рассчитай'
import Investitsiya from './components/Investitsiya/Investitsiya'
import Company from './components/Company/Company'
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
   
    </>
  )
}

export default App
