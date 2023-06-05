
import { ReactComponent as Building } from '../assets/building.svg'
import { ReactComponent as Clipboard } from '../assets/clipboard.svg'
import { ReactComponent as Graph } from '../assets/graph.svg'
import { ReactComponent as People } from '../assets/people.svg'
import HeaderImg from '../assets/header.jpg'


export const ServiceCards = () => {
    return (
       

                    <div className="card-container">
                        <div className="card-group">
                            <div className="card">
                                {/* <div className="img-container"> */}
                                    <Building style={{width: '3em'}}/>
                                {/* </div> */}
                                <h3>Inspections</h3>
                                <p>High-level reports detailing exact locations of any deficienies, adhering to HUD protocols</p>
                            </div>
                            <div className="card">
                                {/* <div className="img-container"> */}
                                    <Graph style={{width: '3em'}}/>
                                {/* </div> */}
                                <h3>Scoring</h3>
                                <p>Ensuring a passing grade, evelating your scores to the 90's while remaining <i>affordable</i></p>
                            </div>
                            <div className="card">
                                {/* <div className="img-container"> */}
                                <People style={{width: '3em'}}/>
                                   
                                {/* </div> */}
                                <h3>Sub-contracting</h3>
                                <p>Devise a strategic plan, implement it, accompaning the REAC inspector during the inspection</p>
                            </div>
                        </div>
                    </div>
    )
}

const ServicePage = () => {
    return (
        <section>
             <div style={{backgroundColor: '#0e5797', color: '#ffffff'}}>
                <div className="container">
                    
                    <div style={{marginBottom: '2em'}}>
                        <h2>Services</h2>
                        <p>
                            Have you ever wondered how your property would score if the HUD 
                            REAC inspection took place today? Keep in mind that HUD only 
                            provides a 14-day notice, which is not be sufficient time for 
                            preparation.
                        </p>
                    </div>
                    
                    <ServiceCards/>
                    
                    <p style={{ textAlign: 'center', margin: 'auto', padding: '2em 0'}}>
                        <Clipboard style={{width: '3em'}}/><br/>
                        With our report, you'll quickly discover the state of your property. 
                        It will serve as a guide for implementing necessary corrections, 
                        utilizing either your on-site staff, our skilled construction professionals, 
                        or a combination of both. By relying on our team to prepare the site, 
                        your staff can focus on their daily duties, preventing work orders from 
                        piling up while they tackle neglected and deferred maintenance tasks.
                    </p>
            </div>
            </div>
            <div className='container' style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr)', gap: '2em'}}>
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
                    <button style={{marginTop: '1em'}}>Request a Quote</button>
                </div>

                <div className="img-container">
                    <img src={HeaderImg} alt="" />
                </div>
            </div>


            <div>

            </div>
        </section>
    )
}

export default ServicePage