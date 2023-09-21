import products from '../assets/data/products' 
import React, { useEffect, useState } from 'react'
import Helemet from '../components/Helemet/Helemet'
import { Col, Container, Row } from 'reactstrap'
import "../styles/Home.css"
import heroImg from '../assets/images/hero-img.png'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Services from "../services/services"
import ProductList from '../components/UI/ProductList'
import counterImg from "../assets/images/counter-timer-img.png"
import Clock from '../components/UI/Clock'


const Home = () => {
  const [trendingProducts, setTrendingProducts] = useState([]);
  const [bestSalesProducts, setBestSalesProducts] = useState([]);
  const [mobileProducts, setMobileProducts] = useState([]);
  const [wirelessProducts, setWirelessProducts] = useState([]);
  const [popularProducts, setpopularProducts] = useState([]);

  const year = new Date().getFullYear();
  useEffect(()=>{

    const filteredTrendingProducts = products.filter(item=> item.category === 'chair');

    const filteredBestSalesProducts = products.filter(item=> item.category === 'sofa');

    const filteredMobileProducts = products.filter(item=> item.category === 'mobile');

    const filteredWirelessProducts = products.filter(item=> item.category === 'wireless');

    const filteredPopularProducts = products.filter(item=> item.category === 'watch');

    setTrendingProducts(filteredTrendingProducts);
    setBestSalesProducts(filteredBestSalesProducts);
    setMobileProducts(filteredMobileProducts);
    setWirelessProducts(filteredWirelessProducts);
    setpopularProducts(filteredPopularProducts);


  },[])
  return (
    <>
    
    <Helemet title={"Home"}>

{/* Start hero section */}
    <section className='hero__section'>
      <Container>
        <Row>
          <Col lg='6' md='6'>
            <div className="hero__content">
              <p className='hero__subtitle' aria-hidden="true">Trending product in {year}</p>
              <h2>Make Your Interior More Minimalistic & Modern</h2>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti iure et in deleniti nemo consequuntur. Perferendis reprehenderit distinctio veniam quae!</p>
              <Link to='/shop'><motion.button whileTap={{scale:1.2}} className='buy__btn'>SHOP NOW</motion.button></Link>
            </div>
          </Col>

          <Col lg='6' md='6'>
            <div className="hero__img">
              <img src={heroImg} alt="hero image" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
{/* End hero section */}


{/* Start Services section */}
    <Services/>
{/* End Services section */}


{/* Start trending__products section */}
    <section className='trending__products'>
      <Container>
        <Row>
          <Col lg="12" className='text-center'>
            <h2 className='section__title'>Trending Products</h2>
          </Col>
          <ProductList data={trendingProducts} />
        </Row>
      </Container>
    </section>
{/* End trending__products section */}


{/* Start best__sales section */}
    <section className="best__sales">
  <Container>
    <Row>
      <Col lg="12" className='text-center'>
        <h2 className='section__title'>Best Sales</h2>
      </Col>
      <ProductList data={bestSalesProducts} />
    </Row>
  </Container>
    </section>
{/* End best__sales section */}


{/* Start timer__count section */}
    <section className="timer__count">
  <Container>
    <Row>
      <Col lg='6' md='12' className='count__down'>

        <div className="clock__title">
          <h4 className='text-white fs-6 mb-2'>Limited Offers</h4>
          <h3 className='text-white fs-5 mb-3'>Quality Armchair</h3>
        </div>
        <Clock />
        <motion.button whileTap={{scale:1.2}} className='buy__btn store__btn'><Link to='/shop'>Visit Store</Link></motion.button>

      </Col>

      <Col lg='6' md='12' className='text-end counter_img'>
      <img src={counterImg} alt="counterImg" />

        </Col>
    </Row>
  </Container>
    </section>
{/* End timer__count section */}


{/* Start new__arrivals section */}
    <section className='new__arrivals'>
      <Container>
        <Row>
        <Col lg="12" className='text-center'>
        <h2 className='section__title'>New Arrivals</h2>
      </Col>
      <ProductList data={mobileProducts} />
      <ProductList data={wirelessProducts} />
        </Row>
      </Container>
    </section>
{/* End new__arrivals section */}


{/* Start new__arrivals section */}
<section className='popular__category'>
      <Container>
        <Row>
        <Col lg="12" className='text-center'>
        <h2 className='section__title'>Popular Category</h2>
      </Col>
      <ProductList data={popularProducts} />
        </Row>
      </Container>
    </section>
{/* End new__arrivals section */}

    </Helemet>

    </>
  )
}

export default Home