import { Link } from "react-router-dom"
import Layout from "../Layout"

const ErrorPage = () => {
    return (
        <Layout>
            <div className="card-container">
                <div className="card-group">
                    <Link to="/">
                        <div className="card">
                            <h3>Home</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                    </Link>
                    <Link to="services">
                        <div className="card">
                            <h3>Services</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                    </Link>
                    <Link to="faq">
                        <div className="card">
                            <h3>FAQ</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                    </Link>
                </div>
            </div>
        </Layout>
    )
}

export default ErrorPage