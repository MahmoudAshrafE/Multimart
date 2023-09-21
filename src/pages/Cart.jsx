


import React, { useEffect } from 'react';
import '../styles/cart.css';
import Helemet from '../components/Helemet/Helemet';
import CommonSection from '../components/UI/commonSection';
import { Col, Container, Row } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import {cartActions} from '../redux/slices/cartSlice';
import { Link } from 'react-router-dom';
import cartEmpty from '../assets/images/preview.png'
const Cart = () => {

const cartItems = useSelector(state => state.cart.cartItems)
const totalAmount = useSelector(state => state.cart.totalAmount)

useEffect(() => {
  window.scrollTo(0,0)
},[Cart])

  return (
    <Helemet title='Product Cart'>
    <CommonSection title='Product Cart' />
    <section>
      <Container>
        <Row>
          <Col lg='9'>
            {
              cartItems.length === 0 ? <div className='fs-4 text-center'>
                <img className='cartEmpty' src={cartEmpty} alt="" />
              </div>
              : (<table className='table bordred'>
                <thead>
                  <th>Image</th>
                  <th className='productTitle'>Title</th>
                  <th>Price</th>
                  <th>Qty</th>
                  <th className='productDelete'>Delete</th>
                </thead>
                <tbody>
                {
                  cartItems.map((item, index) => (
                    <Tr item = {item}  key={index} />
                  ))
                  }
                </tbody>
                </table>
          )}
          </Col>

          <Col lg='3'>
            <div>
              <h6 className='d-flex align-items-center justify-content-between'>
                Subtotal:
              <span className='fs-4 fw-bold'>${totalAmount}</span>
              </h6>
              
            </div>
            <p className='mt-2 p_checkout'>taxes and shipping will calculate in checkout</p>
            <Link to='/checkout'><button className="buy__btn w-100">Checkout</button></Link>
            <Link to='/shop'><button className="buy__btn w-100 mt-3">Continue Shopping</button></Link>
          </Col>
        </Row>
      </Container>
    </section>
    </Helemet>
  )
}
const Tr  = ({item}) => {
  const dispatch = useDispatch()
  const deleteProduct = () =>{
    dispatch(cartActions.deleteItem(item.id))
  }
  return(
    <tr>
    <td>
      <img className='productImg' src={item.imgUrl} alt={item.productName} title={item.productName} />
      <td className='productDeleteImg'><i class="ri-close-circle-fill deleteInImg" onClick={deleteProduct}></i></td>
    </td>
    <td className='productName'>{item.productName}</td>
    <td className='productPrice'>{item.price}$</td>
    <td className='productQty'>{item.quantity}</td>
    <td className='productDeleteTable'><i class="ri-close-circle-fill" onClick={deleteProduct}></i></td>
  </tr>
  )
}

export default Cart