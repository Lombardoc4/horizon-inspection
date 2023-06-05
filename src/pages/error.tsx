import { Link } from "react-router-dom"
import Layout from "../Layout"

const ErrorPage = () => {
    return (
        <Layout>
            <div className="container">
                <div className="card-group">
                    <Link to="/">
                        <div className="card">
                            <h3>Home</h3>
                            <p>Professional Inspections & Consulting Services</p>
                        </div>
                    </Link>
                    <Link to="services">
                        <div className="card">
                            <h3>Services</h3>
                            <p>Our services are 100 stars of success</p>
                        </div>
                    </Link>
                    <Link to="faq">
                        <div className="card">
                            <h3>FAQ</h3>
                            <p>Learn the process and explore common questions</p>
                        </div>
                    </Link>
                </div>
            </div>
        </Layout>
    )
}

export default ErrorPage