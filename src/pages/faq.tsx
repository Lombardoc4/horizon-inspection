import { styled } from "styled-components"
import { Accordian } from "../components/Accordian"
import { ServiceCards } from "./services"

interface QAProps {
    title: string,
    content: string,
}

const QnA : QAProps[] = [
    {
        title: 'Question 1',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi temporibus distinctio aliquam quos, laborum repellendus qui maiores odio iste! Id commodi unde, pariatur dignissimos eligendi vitae. Nesciunt ratione consequatur sunt?'
    },
    {
        title: 'Question 2',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi temporibus distinctio aliquam quos, laborum repellendus qui maiores odio iste! Id commodi unde, pariatur dignissimos eligendi vitae. Nesciunt ratione consequatur sunt?'
    },
    {
        title: 'Question 3',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi temporibus distinctio aliquam quos, laborum repellendus qui maiores odio iste! Id commodi unde, pariatur dignissimos eligendi vitae. Nesciunt ratione consequatur sunt?'
    },
    {
        title: 'Question 4',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi temporibus distinctio aliquam quos, laborum repellendus qui maiores odio iste! Id commodi unde, pariatur dignissimos eligendi vitae. Nesciunt ratione consequatur sunt?'
    }
]

const FAQSection = styled.section`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
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
        <FAQSection>
            <div>
                <FAQ/>

            </div>
            <div style={{borderRadius: '0.5em', overflow: 'hidden'}}>
                <h2>Services</h2>
                <ServiceCards/>
            </div>
        </FAQSection>
    )
}

export default FAQPage;