import styled from "styled-components"
import { ReactComponent as Logo } from "../../assets/building.svg"
import USDOH from '../../assets/usdoh-cert.png'


const StyledFooter = styled.footer`
    background-color: #213547;
    color: #ffffff;

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
                    {/* <div className="img-container"> */}
                        <Logo style={{width: '3em'}}/>
                    {/* </div> */}
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