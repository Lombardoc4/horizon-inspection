import { Form } from "../components/Form"
import { FAQ } from "./faq";

const ContactPage = () => {

    const handleSubmit = (data: any) => {
        console.log('data', data);
    }

    return (
        <section style={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '4em'}}>
            <div>

                <h2>We provide free consultations</h2>
                <p>You can complete the form or email us directly @ EMAIL</p>
                <Form/>
            </div>
            <div>
                <FAQ/>
            </div>
        </section>
    )
}

export default ContactPage;