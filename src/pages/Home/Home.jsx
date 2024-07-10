import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/footer/Footer'
import Banner from '../../components/banner/Banner'
import RowList from '../../components/rows/rowlist/RowList'


const Home = () => {
  return (
    <>
      <Header />
      <Banner />
   <RowList />
      <Footer />
    </>
  );
}

export default Home