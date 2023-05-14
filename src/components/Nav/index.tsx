import { NavLink } from "react-router-dom";
import styled from "styled-components";
import useMediaQuery from "../../utils/useMediaQuery";

const StyledNavBar = styled.div`
    min-height: 60px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 2em;

    nav {
        display: flex;
        gap: 2em;
    }

    @media screen and (max-width: 768px){
        nav{
            position: absolute;
            top: 60px;
            left: 0;
            width: 100%;
            height: calc(100vh - 60px);
            padding: 2em;
            background-color: #ffffff;
        }
    }
`;

const StyledNav = styled.nav`

`;

const Nav = () => {
    const isDesktop = useMediaQuery('(min-width: 768px)');

    return (
        <StyledNavBar className="container">
            <NavLink to="/">
                Horizon
            </NavLink>

            <nav>
                <NavLink to="/services">Services</NavLink>
                <NavLink to="/contact">Contact</NavLink>
                <NavLink to="/faq">FAQ</NavLink>
            </nav>
        </StyledNavBar>
    )
}

export default Nav;