import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
// import useMediaQuery from "../../utils/useMediaQuery";

interface StyledNavBarProps {
    open: boolean;
}

const StyledNavBar = styled.div<StyledNavBarProps>`
    width: 100%;
    background-color: #0e5797;
    
    .container {
        min-height: 60px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 2em;
    }

    nav {
        display: flex;
        gap: 2em;
    }
    
    .mobile-heading {
        display: none;
    }

    @media screen and (max-width: 768px){
            position: fixed;
            top: 100%;
            left: 0;
            height: 100%;
            width: 100%;
            transform: ${({open}) => open ? 'translateY(-100%)' : 'translateY(0)'};
            transition: transform 0.3s ease-in-out;
            /* height: calc(100vh - 60px); */
            /* background-color: #ffffff; */
            
            .container {
                height: 100%;
                flex-direction: column;
                justify-content: center;
                padding: 2em;
            }
                
            nav {
                padding-top: 2em;
                flex-direction: column;
            }
            
            a {
                font-size: 1.5em;
                text-align: center;
            }
            
            .mobile-heading {
                display: block;
                text-align: center;
                margin-bottom: 2em;
            }
    }
`;

const MobileNavButton = styled.button`
    position: fixed;
    top: calc(100% - 60px);
    left: 0;
    right: 0;
    height: 60px;
    background-color: #0e5797;
    border-radius: 1em 1em 0 0;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 0 10px rgba(0,0,0,0.5);
    
    @media screen and (min-width: 768px){
        display: none;
    }
`;

const Nav = () => {
    // const isDesktop = useMediaQuery('(min-width: 768px)');
    const [open, setOpen] = useState(false);
    const closeMenu = () => {
        window.scrollTo({top: 0, behavior: 'smooth'});
        setOpen(false);
    }
    useEffect(() => {
        if (open) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [open])

    useEffect(() => {
        const links = document.querySelectorAll('.nav-link');
        links.forEach(link => {
            link.addEventListener('click', closeMenu);
        })
        
        return () => {
            links.forEach(link => {
                link.removeEventListener('click', closeMenu);
            })
        }
    }, [])
    
    return (
        <>
        
            <StyledNavBar open={open}>
                <div className="container">
                    
                    <div className="mobile-heading">
                        <p>Logo Goes HERE</p>
                        <p>Professional Inspections & Consulting Services</p>
                    </div>
                    
                    <NavLink className='nav-link' to="/">
                        Horizon
                    </NavLink>

                    <nav>
                        <NavLink to="/services" className='nav-link'>Services</NavLink>
                        <NavLink to="/contact" className='nav-link'>Contact</NavLink>
                        <NavLink to="/faq" className='nav-link'>FAQ</NavLink>
                    </nav>
                </div>
                
            </StyledNavBar>
            <MobileNavButton onClick={() => setOpen(!open)}>
                    Menu
            </MobileNavButton>
        </>
    )
}

export default Nav;