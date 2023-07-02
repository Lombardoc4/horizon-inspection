
import { ReactComponent as Building } from '../assets/building.svg'
import { ReactComponent as Clipboard } from '../assets/clipboard.svg'
import { ReactComponent as Graph } from '../assets/graph.svg'
import { ReactComponent as People } from '../assets/people.svg'
import HeaderImg from '../assets/header.jpg'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { styled } from 'styled-components'


export const ServiceCards = () => {
    return (
        <div className="card-container">
            <div className="card-group">
                <div className="card">
                    {/* <div className="img-container"> */}
                        <Building width={80} />
                    {/* </div> */}
                    <h3>Inspections</h3>
                    <p>High-level reports detailing exact locations of any deficienies, adhering to HUD protocols</p>
                </div>
                <div className="card">
                    {/* <div className="img-container"> */}
                        <Graph width={80}/>
                    {/* </div> */}
                    <h3>Scoring</h3>
                    <p>Ensuring a passing grade, evelating your scores to the 90's while remaining <i>affordable</i></p>
                </div>
                <div className="card">
                    {/* <div className="img-container"> */}
                    <People width={80}/>
                        
                    {/* </div> */}
                    <h3>Sub-contracting</h3>
                    <p>By relying on our team to prepare the site, your staff can focus on their daily duties, preventing work orders from overflowing.</p>
                </div>
            </div>
        </div>
    )
}


const reportVariants = {
    hidden: {
        opacity: 0,
        y: 100
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6
        }
    }
}

const StyledServices = styled.section`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2em;
    
    @media (min-width: 768px) {
        p {
            font-size: 1.2em;
        }
    }
`;

const StyledWorkingWith = styled.section`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2em;
    
    @media (min-width: 768px) {
        p {
            font-size: 1.2em;
        }
        
        .img-container {
            order: 2;
        }
    }
`;

const ServicePage = () => {
    return (
        <>
        <StyledServices className="container blue-bg">
                <div> 
                    <div>
                        <h2 className='h1'>Services</h2>
                        <p>
                            Have you ever wondered how your property would <b>score</b> if the HUD 
                            REAC inspection took place <b>today?</b> <br/>
                            Keep in mind that HUD only provides a <b>14-day notice</b>, which is not be sufficient time for 
                            preparation.
                        </p>
                    </div>
                    
                    
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        variants={reportVariants}
                        style={{ marginTop: '2em'}}
                        >

                        
                        <p style={{ textAlign: 'center',padding: '2em 0'}}>
                            <Clipboard width={120}/>
                        </p>
                        <h3>The Report</h3>
                        <p>
                            <b>With our report</b>, you'll quickly learn the details of your property. 
                            It will serve as a guide for: 
                            <ul>
                                <li>
                                    Devising a strategic plan to address all deficiencies
                                </li>
                                <li>
                                    Implementing necessary corrections
                                </li>
                                <li>
                                    Utilizing your preparation funds efficiently
                                </li>
                            </ul>
                        </p>
                    </motion.div>
                </div>
                <ServiceCards/>
        </StyledServices>
                
            <StyledWorkingWith className='container'>
                
                <div className="img-container">
                    <img src={HeaderImg} alt="" />
                </div>
                <div>
                    <h2>Working with Horizon</h2>
                    <p>
                    Let us conduct a comprehensive assessment of all 
                    units or a representative sample, as well as 100% 
                    evaluation of common areas, site, exterior, and 
                    building systems. Our inspection will adhere to 
                    HUD protocols, and we will provide you with a detailed 
                    report highlighting all identified 
                    deficiencies, including their exact locations.
                    </p>
                    <Link to="/contact">
                        <motion.button
                            style={{marginTop: '1em'}}
                            initial={{opacity: 0}}
                            whileInView={{opacity: 1}}
                            transition={{duration: 0.6}}
                        >
                            Request a Quote
                        </motion.button>
                    </Link>
                </div>

            </StyledWorkingWith>
            </>
    )
}

export default ServicePage