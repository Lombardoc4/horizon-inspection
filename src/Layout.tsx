import { Outlet } from 'react-router-dom'
import Nav from './components/Nav'
import { Footer } from './components/Footer';
import { HeaderBanner } from './components/HeaderBanner';


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
