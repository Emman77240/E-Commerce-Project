import React from 'react'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'
import Announcements from '../components/Announcements'
import Categories from '../components/Categories'
import Products from '../components/Products'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import styled from 'styled-components'

const ProductsHeader = styled.h1`
    font-size: 45px;
    text-align: center;
    margin-top: 3%;
    margin-bottom: 1%;
`

const Home = () => {
  return (
    <div>
        <Navbar />
        <Announcements />
        <Slider />
        <Categories />
        <ProductsHeader>Best Buys</ProductsHeader>
        <Products />
        <Newsletter />
        <Footer />
    </div>
  )
}

export default Home
