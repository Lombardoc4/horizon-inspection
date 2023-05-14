import styled from 'styled-components';
import HeaderImg from '../../assets/header.jpg'
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

const ImgBg = styled.div`
  min-height: 50vh;
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
`;


const HeaderCopy = {
  home: {
    title: 'Horizion Inspections',
    subtitle: 'Passing inspection across the tri-state'
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
          <h1>{content.title}</h1>
          <h2>{content.subtitle}</h2>
          <button>Request a Quote</button>
        </div>
      </ImgBg>
    )
}