import React from "react";
import GetInTouch from "../home/GetinTouch/GetInTouch";
import Header from "../home/header/Header";
import TopHeaderInfo from "../home/topHeadInfo/TopHeaderInfo";
import { Container,Image,Row,Col } from "react-bootstrap";
import Footer from "../home/Footer/footer";
import "./contact-us.css"
function ContactUs(){
    return(
        <>
             <TopHeaderInfo/>
            <Header/>
            <Container fluid className="about-us-banner">
                <img src={process.env.PUBLIC_URL + "/Assets/contact-us.jpg"}/>
                <div className="content-wrapper">
                    <h2>CONTACT US</h2>
                </div>
            </Container>
               <Container>
               <Row>
                    <Col className="contact_ic_wr">
                         <div className="contact_Wra">
                            <img src={process.env.PUBLIC_URL + "/Assets/call.png"}/>
                            <ul>
                                <li>Contact No : 8676006175</li>
                            </ul>
                         </div>
                    </Col>
                    <Col className="contact_ic_wr">
                            <div className="contact_Wra">
                                <img src={process.env.PUBLIC_URL + "/Assets/email.png"}/>
                                <ul>
                                    <li>Official Id: info@aswebtech.online</li>
                                </ul>
                            </div>
                    </Col>
                    <Col className="contact_ic_wr">
                        <div className="contact_Wra">
                            <img src={process.env.PUBLIC_URL + "/Assets/address.png"}/>  
                            <ul>
                                <li>Adress: Sec -15 Noida Uttar Pradesh 201309</li>
                            </ul>
                        </div>
                    </Col>
                </Row>
               </Container>
                <Container style={{marginTop:"100px",marginBottom:"200px"}}>
                    <GetInTouch/>    
                </Container>
            <Footer/>
        </>
    )
}

export default ContactUs
