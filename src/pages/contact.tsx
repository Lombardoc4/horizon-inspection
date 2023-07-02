import { styled } from "styled-components";
import { Form } from "../components/Form"
import { FAQ } from "./faq";


const ContactSection = styled.section`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 4em;
    
    @media (min-width: 768px) {
        gap: 2em;
    }
`;

const StyledForm = styled.div`
    background-color: #0e5797;
    padding: 1em;
    border-radius: 0.5em;
    box-shadow: 0 0 10px rgba(0,0,0,0.3);
    
    select, input, textarea {
        background-color: #ffffff;
        color: #000000;
        border-radius: 0.5em;
    }
    
    button {
        background-color: #ffffff;
        color: #000000;
    }
    
    @media (min-width: 768px) {
        padding: 2em;
    }
`;

const ContactPage = () => {

    return (
        <ContactSection className="container">
            <StyledForm>

                <h2>We provide free consultations</h2>
                <p>You can complete the form or email us directly @ <a href="mailto:HorizonInspection@gmail.com">HorizonInspection@gmail.com</a></p>
                <Form/>
                
            </StyledForm>
            <div>
                <FAQ/>
            </div>
        </ContactSection>
    )
}

export default ContactPage;