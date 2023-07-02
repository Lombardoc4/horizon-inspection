import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Logo from "../../assets/horizon-inspection-logo-circle.png";
// import useMediaQuery from "../../utils/useMediaQuery";

interface StyledNavBarProps {
    open: boolean;
}

const StyledNavBar = styled.div<StyledNavBarProps>`
    width: 100%;
    padding: 0.75em 0;
    
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
    
    .heading {
        display: flex;
        align-items: center;
        gap: 1em;
        font-size: 1.5em;
    }
    
    .mobile-heading {
        display: none;
    }

    @media screen and (max-width: 768px){
        
            background-color: #ffffff;
            color: #0e5797;
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
                
                button {
                    width: 100%;
                }
            }
            
            a {
                font-size: 1.25em;
                text-align: center;
                color: inherit;
            }
            .heading {
                display: none;
            }
            .mobile-heading {
                display: block;
                text-align: center;
                /* margin-bottom: 2em; */
                
                img {
                    border-radius: 50%;
                    box-shadow: 0 0 10px rgba(0,0,0,0.5);
                    margin-bottom: 1em;
                }
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
    
    font-size: 2em;
    
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
                    <div className="heading">
                        <img src={Logo} alt="Horizon Inspection Logo" width='50'/>
                        <NavLink className='nav-link' to="/">
                            Horizon
                        </NavLink>
                    </div>
                    
                    <div className="mobile-heading">
                        <img src={Logo} alt="Horizon Inspection Logo" width='150'/>
                        <p>
                            <NavLink className='nav-link' to="/">
                                Horizon
                            </NavLink>
                        </p>
                        <p>Professional Inspections &{'\u00A0'}Consulting Services</p>
                    </div>
                    

                    <nav>
                        <NavLink to="/services" className='nav-link'><button>Services</button></NavLink>
                        <NavLink to="/contact" className='nav-link'><button>Contact</button></NavLink>
                        <NavLink to="/faq" className='nav-link'><button>FAQ</button></NavLink>
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