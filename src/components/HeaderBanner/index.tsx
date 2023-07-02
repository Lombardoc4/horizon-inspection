import styled from 'styled-components';
import HeaderImg from '../../assets/horizon-inspection-header.png'
import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Logo from '../../assets/horizon-inspection-logo-circle.png'
import { motion } from 'framer-motion';

const ImgBg = styled.div`
  min-height: 65vh;
  background-image:
    linear-gradient(0, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url('${HeaderImg}');
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;

  color: #ffffff;

  button{
    margin-top: 1em;
  }
  
  h1 {
    font-size: 4em;
  }
  
  h2 {
    line-height: 1.1;
  }
  
  @media screen and (max-width: 768px){
    min-height: 100vh;
  }
`;


const HeaderCopy = {
  home: {
    title: 'Horizon',
    subtitle: 'Professional Inspections &\u00A0Consulting Services'
  },
  services: {
    title: 'Services',
    subtitle: 'Our services are 100 stars of success'
  },
  contact: {
    title: 'Contact Us',
    subtitle: 'Getting a quote is easy, reach out today'
  },
  faq: {
    title: 'FAQ',
    subtitle: 'Learn the process and what separates us from the competition'
  },
  error: {
    title: 'Page not found',
    subtitle: 'Sorry this page does not exist'
  }
}

export const HeaderBanner = () => {
    const [content, setContent] = useState(HeaderCopy.home)
    const location = useLocation();


    useEffect(() => {
      console.log('loc', location)
      if (location.pathname === '/') {
        setContent(HeaderCopy.home)
      }
      else if (location.pathname === '/services') {
        setContent(HeaderCopy.services)
      }
      else if (location.pathname === '/faq') {
        setContent(HeaderCopy.faq)
      }
      else if (location.pathname === '/contact') {
        setContent(HeaderCopy.contact)
      }
      else {
        setContent(HeaderCopy.error)
      }
    }, [location])

    return(
      <ImgBg>
        <div className="container">
          { content === HeaderCopy.home &&
            <img src={Logo} alt="Horizon Inspection Logo" width={150} />
          }
          <motion.h1
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1 , x: 0 }}
            transition={{ duration: 0.6 }}
            
          >{content.title}</motion.h1>
          <motion.h2
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1 , x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            
          >{content.subtitle}</motion.h2>
          { content !== HeaderCopy.contact && 
            <Link to="/contact">
              <motion.button 
              initial={{ opacity: 0,}}
              animate={{ opacity: 1 , }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >Request a Quote</motion.button>
            </Link>
          }
        </div>
      </ImgBg>
    )
}