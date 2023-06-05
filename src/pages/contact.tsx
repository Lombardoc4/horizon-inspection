import { styled } from "styled-components";
import { Form } from "../components/Form"
import { FAQ } from "./faq";


const ContactSection = styled.section`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 4em;
    padding: 2em;
`

const ContactPage = () => {

    return (
        <ContactSection>
            <div>

                <h2>We provide free consultations</h2>
                <p>You can complete the form or email us directly @ EMAIL</p>
                <Form/>
            </div>
            <div>
                <FAQ/>
            </div>
        </ContactSection>
    )
}

export default ContactPage;