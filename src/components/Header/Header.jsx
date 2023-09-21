import React, { useEffect, useRef } from 'react'
import './Header.css'
import { Container, Row } from 'reactstrap'
import { Link, NavLink, useNavigate } from 'react-router-dom';
import logo from "../../assets/images/eco-logo.png";
import userImg from "../../assets/images/user-icon.png";
import { motion } from 'framer-motion'; 
import { useSelector } from 'react-redux';

const nav__link = [
    {
        path:'home',
        display:'Home'
    },
    {
        path:'shop',
        display:'Shop'
    },    
    {
        path:'cart',
        display:'Cart'
    }
]

const Header = () => {

    const headerRef = useRef(null)
    const menuRef = useRef(null)
    const profileRef = useRef(null)
    const totalQuantity = useSelector(state => state.cart.totalQuantity)

    const stickyHeaderFunv = ()=>{
        window.addEventListener('scroll',()=>{
            if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
                headerRef.current.classList.add('Sticky_header')
            }else{
                headerRef.current.classList.remove('Sticky_header')
            }
        })
    }
    useEffect(()=>{
        stickyHeaderFunv()
        return ()=> window.removeEventListener('scroll',stickyHeaderFunv)
    })
    const navigate = useNavigate()

    const menuToggle = () => {
    menuRef.current.classList.toggle('active__menu')

    }

    const navigateToCart = () =>{
        navigate('/cart')
    }
    const profileScreen = () =>{
        profileRef.current.classList.toggle('active__profile')
    }
return (
    <header className="header" ref={headerRef}>
        <Container>
            <Row>
                <div className="nav__Wrapper">
                    <div className="logo" >
                    <Link to='/home'><img src={logo} alt="logo" /></Link>
                        <div>
                            <h1><Link to='/home'> Multimart</Link></h1>
                        </div>
                    </div>
                    <div className="navigation" ref={menuRef} onClick={menuToggle}>
                        <ul className='menu'>
                        {
                                nav__link.map((item, index)=>(
                                    <li className='nav__item' key={index}>
                                    <NavLink to={item.path} className={(navClass)=>navClass.isActive ? 'nav__active' : "" }>{item.display}</NavLink>
                                </li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className="nav__icons">
                        <span className='fav__icon'>
                            <i class="ri-heart-line"></i>
                            <span className='badge'>1</span>
                        </span>
                        <span className='cart__icon' onClick={navigateToCart}>
                            <i class="ri-shopping-bag-line"></i>
                            <span className='badge'>{totalQuantity}</span>
                            </span>
                        <span><motion.img whileTap={{scale:1.2}} src={userImg} alt="user" onClick={profileScreen} />
                        <div id='Profile' className='profile_display' ref={profileRef}>
                        <Link to='/login' onClick={profileScreen}><i class="ri-login-box-line"></i>Login</Link>
                        </div></span>
                        <div className="mob__menu" onClick={menuToggle}>
                        <span><i class="ri-menu-3-fill"></i></span>
                    </div>
                    </div>
                </div>
            </Row>
        </Container>
    </header>
    )
}

export default Header;