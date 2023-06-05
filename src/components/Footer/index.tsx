import styled from "styled-components"
import USDOH from '../../assets/usdoh-cert.png'


const StyledFooter = styled.footer`
    background-color: #0e5797;
    color: #ffffff;
    padding-bottom: calc(2em + 60px);

    .container {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        justify-content: space-between;
        align-items: center;
        padding: 2em;
        gap: 2em;
        min-height: 60px;
    }
`;

export  const Footer = () => {
    return (
        <StyledFooter>


            <div className="container">

                <div>
                    <p>973-555-5555</p>
                    <p>HorizonInspection@gmail.com</p>
                    <p>Location</p>
                </div>

                <div>
                    <img src={USDOH} style={{width: '3em'}}  alt="" />

                </div>
            </div>
        </StyledFooter>
    )

}