
import { ReactComponent as Building } from '../assets/building.svg'
import { ReactComponent as Clipboard } from '../assets/clipboard.svg'
import { ReactComponent as Graph } from '../assets/graph.svg'
import HeaderImg from '../assets/header.jpg'


const ServicePage = () => {
    return (
        <section>
            <div>
                <h2>Services</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia veniam, cum distinctio, voluptatibus saepe eveniet tempore sed porro molestias quam, illum reiciendis pariatur at laboriosam. Temporibus neque aliquid eligendi at!</p>
            </div>

            <div className="card-container">
                <div className="card-group">
                    <div className="card">
                        {/* <div className="img-container"> */}
                            <Building style={{width: '3em'}}/>
                        {/* </div> */}
                        <h3>Inspections</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    <div className="card">
                        {/* <div className="img-container"> */}
                            <Graph style={{width: '3em'}}/>
                        {/* </div> */}
                        <h3>Scoring</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    <div className="card">
                        {/* <div className="img-container"> */}
                            <Clipboard style={{width: '3em'}}/>
                        {/* </div> */}
                        <h3>Success</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>
            </div>

            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr)', paddingTop: '4em', gap: '2em'}}>
                <div>

                    <h3>SubHeader</h3>
                    <h2>Fully Certified</h2>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, laborum officiis exercitationem quos quibusdam numquam fugiat debitis atque omnis illum? Obcaecati nihil ipsam voluptas, reprehenderit hic quidem soluta sit distinctio!
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