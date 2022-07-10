import React from 'react'
import "./App.css";
import Header from "./components/Header";
import Slider from "./components/Slider";
import Text from "./components/Text";
import Card from "./components/Card";
import Img from "./components/Img";
import Banner from "./components/Banner";
import Review from "./components/Review";
import Footer from "./components/Footer";
import Contents from './components/Contents';

function App() {
  return (
    <>
     <Header />
     <Contents>
       <Slider />
       <Text />
       <Card />
       <Img />
       <Banner />
       <Review />
     </Contents>
     <Footer />
    </>
  )
}

export default App;