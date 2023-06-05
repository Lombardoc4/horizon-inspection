import { useState } from "react"
import { ReactComponent as Caret } from '../../assets/caret.svg'
import styled from "styled-components"

interface AccordianProps  {
    title: string,
    content: string,
}

const StyledAccordian = styled.div`
    background-color: #0e5797;;
    padding: 1em;
    margin: 0 0 1em 0;
    border-radius: 0.5em;

    .heading {
        display: flex;
        gap: 0.5em;
    }
    
    p{
        padding-top: 0.5em;
    }
`;

export const Accordian = ({title, content}: AccordianProps) => {
    const [open, setOpen] = useState(false);


    return (
        <StyledAccordian>
            <div className="heading" onClick={() => setOpen(!open)}>
                <Caret style={{width: '1em', transform: open ? 'rotate(90deg)' : ''}} />
                <h3>{title}</h3>
            </div>

            { open &&
                <p>
                    {content}
                </p>
            }

        </StyledAccordian>
    )
}