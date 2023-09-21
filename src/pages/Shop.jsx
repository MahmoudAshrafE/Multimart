import React, { useEffect, useState } from 'react';
import CommonSection from '../components/UI/commonSection'
import Helemet from '../components/Helemet/Helemet';
import { Col, Container, Row } from 'reactstrap';
import '../styles/shop.css'
import ProductsList from '../components/UI/ProductList'
import products from '../assets/data/products'


const Shop = () => {
  const [productsData, setProductsData] = useState(products);

  const handleProductsSearch = (e)=>{
    const searchProduct = e.target.value;
  const searchOfProducts = products.filter(item => item.productName.toLowerCase().includes(searchProduct.toLowerCase()))
  setProductsData(searchOfProducts)
  }

  const handleProductsFilter = (e)=>{
    const valueFilter = e.target.value;
    
    if(valueFilter === "all"){
      const filteredProducts = products.filter(item=> item.category === item.category);
      setProductsData(filteredProducts);
      }
    if(valueFilter === "sofa"){
    const filteredProducts = products.filter(item=> item.category === "sofa");
    setProductsData(filteredProducts);
    }
    if(valueFilter === "mobile"){
      const filteredProducts = products.filter(item=> item.category === "mobile");
      setProductsData(filteredProducts);
      }
      if(valueFilter === "watch"){
        const filteredProducts = products.filter(item=> item.category === "watch");
        setProductsData(filteredProducts);
        }
        if(valueFilter === "chair"){
          const filteredProducts = products.filter(item=> item.category === "chair");
          setProductsData(filteredProducts);
          }
          if(valueFilter === "wireless"){
            const filteredProducts = products.filter(item=> item.category === "wireless");
            setProductsData(filteredProducts);
            }
  }

  useEffect(() => {
    window.scrollTo(0,0)
  },[Shop])


  return (
    <Helemet title='shop'>
      <CommonSection title='Products' />
      <section>
        <Container>
          <Row>
            <Col lg='3' md='6'sm='6' >
              <div className="filter_widget">
                <select onChange={handleProductsFilter}>
                  <option>Filter By category</option>
                  <option value="all">All</option>
                  <option value="sofa">Sofa</option>
                  <option value="mobile">Mobile</option>
                  <option value="chair">Chair</option>
                  <option value="watch">Watch</option>
                  <option value="wireless">Wireless</option>
                </select>
              </div>
            </Col>
            <Col lg='3' md='6' sm='6'>
            <div className="filter_widget">
                <select>
                  <option>Sort By </option>
                  <option value="ascending">Ascending</option>
                  <option value="descinding">Descinding</option>
                </select>
              </div>
              </Col>           
              <Col lg='6' md='12'>
              <div className="search_box">
                <input type="text" placeholder='search' onChange={handleProductsSearch} />
                <span><i class="ri-search-line"></i></span>

              </div>
              </Col>
          </Row>
        </Container>
      </section>


      <section>
        <Container>
          <Row>
            {
              productsData.length === 0? <h1 className='text-center'>No product</h1>:<ProductsList data={productsData} />
            }
          </Row>
        </Container>
      </section>
    </Helemet>
  )

}
export default Shop