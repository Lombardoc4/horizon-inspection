import ServicePage from "./services"
import USDOH from '../assets/usdoh-cert.png'

const HomePage = () => {
    return (
        <>
            <section>

                <h2>Professional Inspections &{"\u00A0"}Consulting Services</h2>
                <h3>We services the NJ and ALL Boros</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione nesciunt, sequi expedita modi, dolore esse consequuntur error laboriosam deserunt earum doloribus ea doloremque quisquam porro pariatur praesentium sapiente magnam! Sequi.</p>

                <div className="card-container">

                <h3 className="card-heading">We are fully certified!</h3>

                    <div className="card-group">
                        <div>
                            <img src={USDOH} style={{width: '5em'}}  alt="" />
                            <h4>US Department of Housing and Urban Developement</h4>
                        </div>
                        <div>
                            <img src={USDOH} style={{width: '5em'}}  alt="" />
                            <h4>US Department of Housing and Urban Developement</h4>
                        </div>
                        <div>
                            <img src={USDOH} style={{width: '5em'}}  alt="" />
                            <h4>US Department of Housing and Urban Developement</h4>
                        </div>
                    </div>
                </div>
            </section>


            <ServicePage/>
        </>
    )
}

export default HomePage