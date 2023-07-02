import { styled } from "styled-components"
import { Accordian } from "../components/Accordian"
import { ServiceCards } from "./services"

interface QAProps {
    title: string,
    content: string,
}

const QnA : QAProps[] = [
    {
        title: 'How will we receive a list of deficiencies that were found?',
        content: 'An all inclusive report will be provided at the end of the inspection with locations, detailed descriptions, and photos of all deficiencies.'
    },
    {
        title: 'What makes Horizon the most efficient and reliable inspection team for public and multi-family housing?',
        content: 'Our inspectors are up-to-date on all HUD protocols and have extensive experience in the industry. We are able to provide an accurate comprehensive report in a timely manner, allowing you to focus on the necessary corrections that will elevate your property score.'
    }
]

const FAQSection = styled.section`
    display: grid;
    /* grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); */
    gap: 2em;
    padding: 2em;
`

export const FAQ = () => {
    return (
        <>
            <h2>Frequently Asked Questions</h2>
            <div style={{padding: '2em 0 0'}}>
                { QnA.map(({title, content}) => <Accordian key={title} title={title} content={content}/> )}
            </div>
        </>
    )
}

const FAQPage = () => {
    return (
        <FAQSection className="container">
            <div><FAQ/></div>
            <div style={{borderRadius: '0.5em', overflow: 'hidden'}}>
                <h2>Services</h2>
                <ServiceCards/>
            </div>
        </FAQSection>
    )
}

export default FAQPage;