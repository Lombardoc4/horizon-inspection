import { Outlet } from 'react-router-dom'
import Nav from './components/Nav'
import styled from 'styled-components';
import HeaderImg from './assets/header.jpg'
import { Footer } from './components/Footer';
import { HeaderBanner } from './components/HeaderBanner';

const ImgBg = styled.div`
  min-height: 50vh;
  background-image:
    linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.3)),
    url('${HeaderImg}');
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;

  color: #ffffff;
`;

function Layout({children}: {children?: JSX.Element | JSX.Element[]}) {

  return (
    <>
    <header>
      <Nav/>
      <HeaderBanner/>
    </header>
    <div className="container flex-1">
      {children}
      <Outlet/>
    </div>

    <Footer/>

    </>
  )
}

export default Layout
