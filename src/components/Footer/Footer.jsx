import React from 'react'
import './Footer.css'
import { Col, Container, ListGroup, ListGroupItem, Row } from 'reactstrap'
import { Link } from 'react-router-dom';
import googlePlay from "../../assets/images/googleStore.png";



const Footer = () => {

const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg='4' className='mb-4' md='6'>
          <div className="logo">
                        <div>
                            <h1 className='text-white'>Multimart</h1>
                        </div>
          </div>
          <p className="footer_text mt-3">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non dicta vel, labore ipsa, et amet consequatur enim eligendi laboriosam commodi provident temporibus voluptas hic cupiditate unde voluptatem eum ducimus quasi.
            </p>
            <div className='install_app'>
              <img className='googlePlay' src={googlePlay} alt="" />
            </div>
          </Col>
          <Col lg='3' className='mb-4' md='3'>
            <div className="footer_links">
              <h4 className="links_title">Top Categories</h4>
              <ListGroup>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to='#'>Mobile Phone</Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0'>
                  <Link to='#'>Modern Sofa</Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0'>
                  <Link to='#'>Arm Chair</Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0'>
                  <Link to='#'>Smart Watch</Link>
                </ListGroupItem >

              </ListGroup>
            </div>
          </Col>
          <Col lg='2' className='mb-4' md='3'>
          <div className="footer_links">
              <h4 className="links_title">Useful Links</h4>
              <ListGroup>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to='/shop'>Shop</Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0'>
                  <Link to='/cart'>Cart</Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0'>
                  <Link to='/login'>Login</Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0'>
                  <Link to='#'>Privacy Policy</Link>
                </ListGroupItem >
              </ListGroup>
            </div>
          </Col>
          <Col lg='3' md='4'>
          <div className="footer_links">
              <h4 className="links_title">Contact</h4>
              <ListGroup className='footer_contact'>
                <ListGroupItem className='ps-0 border-0 d-flex align-item-center gap-2'>
                  <span to='#'><i class="ri-map-pin-2-line"></i></span>
                  <p>20,Salam,Gaza,Palestine</p>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0 d-flex align-item-center gap-2'>
                <span to='#'><i class="ri-phone-line"></i></span>
                  <p>+97051234565766</p>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0 d-flex align-item-center gap-2'>
                <span to='#'><i class="ri-mail-star-line"></i></span>
                  <p>mamo056999@gmail.com</p>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg='12'>
            <p className='footer_copyright'>Copyright © {year} developed by: Mahmoud Ennaba. All right reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer