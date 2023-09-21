import React, { useEffect, useRef, useState } from 'react'
import Helemet from '../components/Helemet/Helemet'
import CommonSection from '../components/UI/commonSection'
import { Col, Container, Row } from 'reactstrap'
import { useParams } from 'react-router-dom'
import products from '../assets/data/products'
import ProductsList from '../components/UI/ProductList'
import '../styles/product-detalis.css'
import { motion } from 'framer-motion'
import { useDispatch } from 'react-redux'
import { cartActions } from '../redux/slices/cartSlice'
import { toast } from 'react-toastify';


const ProductDeatils = () => {
  const [tap, setTap] = useState('desc');
  const [rating, setRating] = useState(null);
  const {id} = useParams();

  const reviewUser = useRef('')
  const reviewMsg = useRef('')

const dispatch = useDispatch()

  const product = products.find(item => item.id === id);
  const {imgUrl, productName, price, avgRating, reviews, description, shortDesc, category} = product;

const submitHandler = (e) =>{
  e.preventDefault()

  const reviewUserName = reviewUser.current.value
  const reviewUserMsg = reviewMsg.current.value

  const reviewObj = {
    userName: reviewUserName,
    text: reviewUserMsg,
    rete: rating,
  };
  console.log(reviewObj);
  toast.success('Your review added successfully')
}

const addToCart = () =>{
  dispatch(cartActions.addItem({
    id,
    image: imgUrl,
    productName,
    price,
  }))
  toast.success('Product added successfully')
}

useEffect(() => {
  window.scrollTo(0,0)
},[product])


  const relatedproducts = products.filter((item) => item.category === category)
  




  return (
    <Helemet title={productName}>
      <CommonSection title={productName} />
      <section className='pt-0'>
        <Container>
        <Row>
          <Col lg='6'>
          <img src={imgUrl} alt={productName} />
          </Col>
          <Col lg='6'>
            <div className="product_info">
              <h2 className='product_name'>{productName}</h2>
              <div className="product_rating d-flex align-item-center gap-5 mb-4">
                <div>
                  <span><i class="ri-star-s-fill"></i></span>
                  <span><i class="ri-star-s-fill"></i></span>
                  <span><i class="ri-star-s-fill"></i></span>
                  <span><i class="ri-star-s-fill"></i></span>
                  <span><i class="ri-star-half-s-fill"></i></span>
                </div>
                <p className='avg_rating'>(<span>{avgRating}</span> ratings)</p>
              </div>
              <div className='d-flex align-items-center gap-5'>
              <span className='price'>price: {price}$</span>
              <span className='category'>{category}</span>
              </div>
              <p className='short_desc'>{shortDesc}</p>
              <motion.button whileTap={{scale:1.2}} className='buy__btn' onClick={addToCart}>Add To Cart</motion.button>
            </div>
          </Col>
        </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg='12'>
              <div className="tap_wrapper d-flex align-items-center gap-5">
                <h6 className={`${tap === 'desc'? 'active_tap' : ''}`} onClick={() => setTap('desc')}>Description</h6>
                <h6 className={`${tap === 'rev'? 'active_tap' : ''}`} onClick={() => setTap('rev')}>Reviews ({reviews.length})</h6>
              </div>

              {tap === 'desc' ? <div className="tab_content mt-5">
                <p>{description}</p>
                </div> 
              : <div className='review mt-5'>
                <div className="review_wrapper">
                  <ul>
                    {
                      reviews?.map((item, index) => (
                        <li key={index}>
                          <h6>Mamo enna</h6>
                          <span>{item.rating} (rating)</span>
                          <p>{item.text}</p>
                        </li>
                        
                      ))
                    }
                  </ul>

                  <div className="review_form">
                    <h5>let your review</h5>
                    <form action="" onSubmit={submitHandler}>
                      <div className="form_group">
                        <input type="text" placeholder='Enter Your Name' ref={reviewUser} required/>
                      </div>
                      <div className="form_group d-flex align-items-center gap-4 group_rating">
                        <span className='star' onClick={() => setRating(1)}>1 <i class="ri-star-s-fill"></i></span>
                        <span className='star' onClick={() => setRating(2)}>2 <i class="ri-star-s-fill"></i></span>
                        <span className='star' onClick={() => setRating(3)}>3 <i class="ri-star-s-fill"></i></span>
                        <span className='star' onClick={() => setRating(4)}>4 <i class="ri-star-s-fill"></i></span>
                        <span className='star' onClick={() => setRating(5)}>5 <i class="ri-star-s-fill"></i></span>
                      </div>
                      <div className="form_group">
                        <textarea rows={4} placeholder='Enter Message' ref={reviewMsg} required />
                      </div>
                      <button type='submit' className='buy__btn'>Submit</button>
                    </form>
                  </div>
                </div>
              </div>
              }
            </Col>

            <Col lg='12' className='mt-5 another_likes'>
              <h3 className='related_title'>You might also like</h3>
            </Col>
            <ProductsList data = {relatedproducts} />
          </Row>
        </Container>
      </section>
    </Helemet>
  )
}

export default ProductDeatils