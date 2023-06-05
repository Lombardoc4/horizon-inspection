import ServicePage from "./services"
import USDOH from '../assets/usdoh-cert.png'
import NSPIRE from '../assets/NSPIRE-logo.jpeg'

const HomePage = () => {
    return (
        <>
            <section>
                <div style={{backgroundColor: '#0e5797', color: '#ffffff'}}>
                    <div className="container">
                        <p style={{fontSize: '1.5em', lineHeight: '1.1', textAlign: 'center', margin: 'auto'}}>
                            Allow us to demonstrate the effective utilization of your preparation 
                            funds to achieve the highest possible score with minimal investment. 
                        </p>
                    </div>
                </div>
                <div className="container" >

                <h2 className="card-heading">Array of Inspection</h2>

                    <div className="card-group inspection-cards">
                        <div>
                            <img src={NSPIRE} style={{height: '6.5em'}}  alt="" />
                            <p style={{fontSize: '2em'}}>UPSC/NSPIRE (REAC)</p>
                        </div>
                        <div>
                            <img src={USDOH} style={{height: '6.5em'}}  alt="" />
                            <p style={{fontSize: '2em'}}>HQS</p>
                        </div>
                        <div>
                            <img src={USDOH} style={{width: '6.5em'}}  alt="" />
                            <p style={{fontSize: '2em'}}>Maintenance</p>
                        </div>
                    </div>
                </div>
            </section>


            <ServicePage/>
        </>
    )
}

export default HomePage