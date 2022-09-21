import { Link } from "react-router-dom"
import Card from "../components/Card"

export default function AboutPage(){
    return (
        <Card reverse={true}>
            <h2>This is an feedback project made by Kunal Gangaramani</h2>
            <Link to='/' className="about-link"><p style={{color:'#fff'}}>Back to Home</p></Link>
        </Card>
    )
}