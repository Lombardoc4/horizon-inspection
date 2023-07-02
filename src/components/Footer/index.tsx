import styled from "styled-components"
import USDOH from '../../assets/usdoh-cert.png'
import NYCHA from '../../assets/nyc-ha.png'
import NSPIRE from '../../assets/NSPIRE-logo.jpeg'


const StyledFooter = styled.footer`
    padding-bottom: calc(2em + 60px);

    .container {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        justify-content: space-between;
        align-items: center;
        /* padding: 2em; */
        gap: 2em;
        min-height: 60px;
    }
    
    .logos {
        padding: 2em;
        background-color: #ffffff;
        border-radius: 0.5em;
        display: flex;
        flex-direction: column;
        gap: 2em;
        
        img {
            margin: auto;
        }
    }
    
    @media (min-width: 768px) {
        padding-bottom: 0;
        
        .logos { 
            flex-direction: row;
        }
    }
`;

export  const Footer = () => {
    return (
        <StyledFooter className="blue-bg">


            <div className="container">

                <div>
                    
                    <p><a href="tel:13479444492">347-944-4492</a></p>
                    <p><a href="mailto:HorizonInspection@gmail.com">HorizonInspection@gmail.com</a></p>
                    <p>New York & New Jersey</p>
                </div>
 
                <div className="logos" >
                    <img src={NSPIRE} height={50} alt="" />
                    <img src={NYCHA} height={50}   alt="" />
                    <img src={USDOH} height={50} alt="" />

                </div>
            </div>
        </StyledFooter>
    )

}