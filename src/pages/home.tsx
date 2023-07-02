import ServicePage from "./services"
import USDOH from '../assets/usdoh-cert.png'
import NYCHA from '../assets/nyc-ha.png'
import NSPIRE from '../assets/NSPIRE-logo.jpeg'

const HomePage = () => {
    return (
        <>
            <section>
                <div className="blue-bg">
                    <div className="container">
                        <p style={{fontSize: '1.5em', lineHeight: '1.1', textAlign: 'center', margin: 'auto', padding: '0 0.5em'}}>
                            Allow us to demonstrate the effective utilization of your preparation 
                            funds to achieve the highest possible score with minimal investment. 
                        </p>
                    </div>
                </div>
                <div className="container" >
                    <h2 className="card-heading h1">Array of Inspections</h2>
                    <div className="card-group inspection-cards">
                        <div>
                            <img src={NSPIRE} height={100}  alt="NSPIRE" />
                            <p>UPSC/NSPIRE (REAC)</p>
                        </div>
                        <div>
                            <img src={NYCHA} height={100}  alt="NYC Housing Authority" />
                            <p>HQS</p>
                        </div>
                        <div>
                            <img src={USDOH} height={100}  alt="US Department of Housing and Urban Development" />
                            <p>Maintenance</p>
                        </div>
                    </div>
                </div>
            </section>


            <ServicePage/>
        </>
    )
}

export default HomePage