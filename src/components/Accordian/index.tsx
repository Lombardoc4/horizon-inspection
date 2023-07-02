import { useState } from "react"
import { ReactComponent as Caret } from '../../assets/caret.svg'
import styled from "styled-components"
import { AnimatePresence, motion } from "framer-motion";

interface AccordianProps  {
    title: string,
    content: string,
}

const StyledAccordian = styled.div`
    background-color: #0e5797;
    color: #ffffff;
    padding: 1em;
    margin: 0 0 1em 0;
    border-radius: 0.5em;

    .heading {
        display: flex;
        gap: 0.5em;
        
        h3 {
            font-size: 1.5em;
            width: 90%;
        }
        
        svg {
                width: calc( 40px - 1em);
        }
    }
    
    .content{
        padding-top: 0.5em;
        overflow: hidden;
    }
    
    @media (min-width: 768px) {
        .heading {
            gap: 1em;
            h3 {width: 80%;}
            svg {
                width: calc( 60px - 1em);
            }
        }
        
        p {
            margin-left: 60px;
            font-size: 1.25em;
        }
    }
`;

export const Accordian = ({title, content}: AccordianProps) => {
    const [open, setOpen] = useState(false);


    return (
        <StyledAccordian>
            <div className="heading" onClick={() => setOpen(!open)}>
                <Caret style={{transform: open ? 'rotate(90deg)' : ''}} />
                <h3>{title}</h3>
            </div>

            <AnimatePresence initial={false}>
            { open &&
                <motion.p
                    initial="collapsed"
                    animate="open"
                    exit="collapsed"
                    variants={{
                        open: { opacity: 1, height: 'auto' },
                        collapsed: { opacity: 0, height: 0 }
                    }}
                    transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
                    className="content">
                    {content}
                </motion.p>
            }
            </AnimatePresence>

        </StyledAccordian>
    )
}