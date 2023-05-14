import { Accordian } from "../components/Accordian"

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

export const FAQ = () => (<>
    <h2>Frequently Asked Questions</h2>
    { QnA.map(({title, content}) => <Accordian key={title} title={title} content={content}/> )}
</>)

const FAQPage = () => {
    return (
    <section>
        <FAQ/>
    </section>
    )
}

export default FAQPage;