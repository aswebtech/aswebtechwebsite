import React from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import ScrollUp from "../../element/ScrollUp";
import CopyrightFooter from "./CopyrightFooter";
function Footer() {
    return (
        <>
           <Container fluid className="footerWrapper">
               <Container>
                <Row>
                    <Col>
                        <img src={process.env.PUBLIC_URL + "/Assets/white-logo.png"} className="App-logo"  alt="logo" />
                        <p>
                            Welcome to ASWeb.Tech, where innovation meets design excellence. We are a leading website designing company committed to crafting digital experiences that captivate, engage, and inspire with the motto of developing a 'Website For Everyone'. 
                        </p>
                    </Col>
                    <Col>
                        <h3>IT Services</h3>
                        <ul>
                            <li><Link className="linkWrapper" to="/websiteDesign">Website Designing</Link></li>
                            <li><Link className="linkWrapper" to="/logo-design">Logo Design</Link></li>
                            <li><Link className="linkWrapper" to="/graphic-design">Graphic Designing</Link></li>
                            <li><Link className="linkWrapper" to="/ui-ux">UI/UX</Link></li>
                            <li><Link className="linkWrapper" to="/figma-design">Figma/Adobe UI Design</Link></li>
                            <li><Link className="linkWrapper" to="/social-media">Social Media Post</Link></li>
                        </ul>
                    </Col> 
                    <Col>
                        <h3>Quick Access</h3>
                            <ul>
                                <li><Link className="linkWrapper_anc" to="/portfolio">Portfolio</Link></li>
                                <li><Link className="linkWrapper_anc" to="/contact-us">Contact Us</Link></li>
                                <li><Link className="linkWrapper_anc" to="/about-us">About Us</Link></li>
                                <li><Link className="linkWrapper_anc" to="/terms-and-Condition">Terms & Condition</Link></li>
                                <li><a className="linkWrapper_anc" target="_blank" href='../../../assets/Fyndora_COMPANY_PROFILE.pdf'>View Buisness Pdf</a></li>
                            </ul>
                    </Col>
                    <Col>
                        <h3>Contact Info</h3>
                        <ul>
                            <li>
                                Email Id: info@aswebtech.online<br></br>
                                Contact No : 8676006175 <br></br>
                                Address : Noida Sec 15 Uttar Pradesh 201301 <br></br>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
           </Container>
           <ScrollUp/>
           <CopyrightFooter/>
        </>
    )
}
export default Footer;
