import React from 'react'
import { useState, useEffect } from 'react'
// import { Link } from 'react-router-dom'
import './Navbar.scss'

const Navbar = () => {
    const [active, setActive] = useState(false);
    const [open, setOpen] = useState(false);
    const isActive = () => {
        window.scrollY > 0 ? setActive(true) : setActive(false)
    }

    useEffect(() => {
        window.addEventListener('scroll', isActive);

        return () => {
            window.removeEventListener('scroll', isActive);
        }
    }, [])

    const currentUser = {
        i: 1,
        username: 'John Doe',
        isSeller: false,
    }

    return (
        <div className={active ? "navbar active" : "navbar"}>
            <div className="container">
                <div className="logo">
                    {/* <Link to="/"> */}
                    <span className='text'>fiverr</span>
                    {/* </Link> */}
                    <span className='dot'>.</span>
                </div>
                <div className="links">
                    <span>Fiverr Business</span>
                    <span>Explore</span>
                    <span>English</span>
                    <span>Sign in</span>
                    {!currentUser?.isSeller && <span>Become a Seller</span>}
                    {!currentUser && <button>Join</button>}
                    {currentUser && (
                        <div className="user" onClick={() => setOpen(!open)}>
                            <img src="https://i1.sndcdn.com/avatars-000189693789-l43vgl-t500x500.jpg" alt="current user" />
                            <span>{currentUser.username}</span>
                            {open && <div className="options">
                                {!currentUser?.isSeller && (
                                    <>
                                        <span>Gigs</span>
                                        <span>Add New Gig</span>
                                    </>
                                )
                                }
                                <span>Orders</span>
                                <span>Messages</span>
                                <span>Logout</span>
                            </div>}
                        </div>

                    )}
                </div>
            </div>
            {active &&
                <>
                    <hr />
                    <div className="menu">
                        <Link className='link' to="/"> Graphics & Design</Link>
                        <Link className='link' to="/"> Video & Animation</Link>
                        <Link className='link' to="/"> Graphics</Link>
                        <Link className='link' to="/"> Writing & Translation</Link>
                        <Link className='link' to="/"> AI Services</Link>
                        <Link className='link' to="/"> Digital Marketing</Link>
                        <Link className='link' to="/"> Music & Audio</Link>
                        <Link className='link' to="/"> Programming & Tech</Link>
                        <Link className='link' to="/"> Business</Link>
                        <Link className='link' to="/"> Lifestyle</Link>
                    </div>
                </>
            }
        </div>
    )
}

export default Navbar