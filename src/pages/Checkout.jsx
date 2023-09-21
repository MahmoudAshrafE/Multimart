

import React from 'react'
import Helemet from '../components/Helemet/Helemet';
import CommonSection from '../components/UI/commonSection';
import { Col, Container, Form, FormGroup, Row } from 'reactstrap';
import '../styles/checkout.css'
import { useSelector } from 'react-redux';


const Checkout = () => {
  const totalQty = useSelector(state=> state.cart.totalQuantity)
  const totalAmount = useSelector(state=> state.cart.totalAmount)
  return (
    <Helemet title='Checkout'>
      <CommonSection title='Checkout'/>
      <Container>
        <Row>
          <Col lg='8'>
            <h5 className='mt-5 mb-5 fw-bold'>Billing Information</h5>
            <Form>

              <FormGroup className='form_group'>
                <input type='text' placeholder='Enter your name'/>
              </FormGroup>

              <FormGroup className='form_group'>
                <input type='email' placeholder='Enter your email'/>
              </FormGroup>

              <FormGroup className='form_group'>
                <input type='number' placeholder='Phone number'/>
              </FormGroup>

              <FormGroup className='form_group'>
                <input type='text' placeholder='Street address'/>
              </FormGroup>

              <FormGroup className='form_group'>
                <input type='text' placeholder='City'/>
              </FormGroup>

              <FormGroup className='form_group'>
                <input type='text' placeholder='Postal code'/>
              </FormGroup>

              <FormGroup className='form_group'>
                <input type='text' placeholder='Country'/>
              </FormGroup>

            </Form>
          </Col>

          <Col lg='4'>
            <div className="checkout_cart">
              <h6>Total Qty: <span>{totalQty} items</span></h6>
              <h6>Subtotal: <span>{totalAmount}$</span></h6>
              <h6><span>Shipping:<br/>free shipping</span><span>0$</span></h6>
              <h4>Total Cost: <span>{totalAmount}$</span></h4>
              <button className="buy__btn m-btn w-100">Place an order</button>
            </div>
          </Col>
        </Row>
      </Container>
    </Helemet>
  )
}

export default Checkout