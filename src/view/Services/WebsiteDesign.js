import React from "react";
import { Row, Container, Col } from 'react-bootstrap'
import Footer from "../home/Footer/footer";
import Header from "../home/header/Header";
import TopHeaderInfo from "../home/topHeadInfo/TopHeaderInfo";
import Client from "../home/Client/Client"
import GetInTouch from "../home/GetinTouch/GetInTouch";

function WebsiteDesign() {
    return (
        <>
            <TopHeaderInfo />
            <Header />
            <Container fluid>
                <Row >
                    <img src={process.env.PUBLIC_URL + "/Assets/services/websitedesign.jpg"} className="App-banner" alt="logo" />
                    <div style={{ position: "relative" }}>
                        <div className="head_wrapper">
                            <h1><span id="head_main">Website Design</span></h1>
                            <p><span id="head_para">Crafting captivating digital experiences, we sculpt websites that resonate with your brand's essence. Elevate your online presence with our expert design solutions.</span></p>
                        </div>
                    </div>
                </Row>
            </Container>
            <Container>
                <Row>
                    <div style={{ textAlign: "center", marginTop: "40px", marginBottom: "40px" }}>
                        <h3>Website Design</h3>
                        <span class="content_bar"></span>
                        <p>AS Web.Tech: Innovating designs, crafting captivating digital experiences, and creating accessible websites for all.</p>
                    </div>
                </Row>
            </Container>
            <Container>
                <h3 style={{ textAlign: "center" }}>WHY CHOOSE AS WEB TECH FOR WEBSITE DEVELOPMENT</h3>
                <span class="content_bar"></span>
                <Row className="bxuirt">
                    <Col>
                        <div className="card_file">
                            <Row>
                                    <span className="card_icon" className="card_icon"></span>
                                    <Col><h4>Expertise</h4>
                                        <span></span>
                                    </Col>
                            </Row>
                            <p>As Web tech boasts a team of highly skilled professionals with extensive expertise in web development and designing. Our team members are proficient in the latest technologies and trends.</p>
                        </div>
                    </Col>
                    <Col>
                        <div className="card_file">
                            <Row>
                                    <span className="card_icon"></span>
                                    <Col><h4>Responsive Design</h4>
                                        <span></span>
                                    </Col>
                            </Row>
                            <p>In today's mobile-centric world, having a responsive website is essential. At Astech, we prioritize responsive design, ensuring that your website looks and functions flawlessly across all devices.</p>
                        </div>
                    </Col>
                    <Col>
                        <div className="card_file">
                            <Row>
                                    <span className="card_icon"></span>
                                <Col><h4>User Experience</h4><span></span></Col>
                            </Row>
                            <p>We place a strong emphasis on user experience (UX) design, ensuring that your website not only looks great but also provides an intuitive and enjoyable browsing experience for your visitors.</p>
                        </div>
                    </Col>
                    <Col>
                        <div className="card_file">
                            <Row>
                                    <span className="card_icon"></span>
                                <Col><h4>Custom Solutions</h4><span></span></Col>
                            </Row>
                            <p>We understand that every business is unique, which is why we offer custom solutions tailored to meet your specific requirements.</p>
                        </div>
                    </Col>
                </Row>
                <Row className="bxuirt2">
                    <Col>
                        <div className="card_file">
                            <Row>
                                    <span className="card_icon"></span>
                                <Col><h4>SEO Optimization</h4><span></span></Col>
                            </Row>
                            <p>Our team incorporates search engine optimization (SEO) best practices into every website we build. From optimizing page titles and meta descriptions to implementing schema markup.</p>
                        </div>
                    </Col>
                    <Col>
                        <div className="card_file">
                            <Row>
                                    <span className="card_icon"></span>
                                <Col><h4>Speed and Performance</h4><span></span></Col>
                            </Row>
                            <p>We understand the importance of speed and performance when it comes to websites. Our developers follow best practices to optimize code and minimize load times, ensuring that your website loads quickly and efficiently.</p>
                        </div>
                    </Col>
                    <Col>
                        <div className="card_file">
                            <Row>
                                    <span className="card_icon"></span>
                                <Col><h4>Security</h4><span></span></Col>
                            </Row>
                            <p> Security is a top priority for us. We implement robust security measures to protect your website from threats such as hacking, malware, and data breaches.</p>
                        </div>
                    </Col>
                    <Col>
                        <div className="card_file">
                            <Row>
                                    <span className="card_icon"></span>
                                <Col><h4>Affordability</h4><span></span></Col>
                            </Row>
                            <p>Despite offering high-quality services, we strive to keep our pricing competitive and affordable. We understand the budget constraints that many businesses face, and we work with you to develop a solution that delivers maximum value within your budget.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Container fluid className="content_three">
                <Row>
                    <Col style={{ margin: "auto" }}>
                        <img src={process.env.PUBLIC_URL + "/Assets/services/Group7.svg"} alt="logo" />
                    </Col>
                    <Col>
                        <div className="tex_word_wp">
                            <h4>We served websites to these industries</h4>
                            <p>AS Web Tech has created websites for almost all industries, some of which are as follows</p>
                            <ul>
                            <li>Matrimonial Website</li>
                            <li>Schooling & College Website</li>
                            <li>Tour & Travel Website</li>
                            <li>Blogging Website</li>
                            <li>News Website</li>
                            <li>Social Media Website</li>
                            <li>B2B Service Website</li>
                            <li>Law Firm Website</li>
                            <li>Yoga Website</li>
                            <li>Hospitality Website</li>
                            <li>Real-Estate Website</li>
                            <li>Interior Website</li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Container fluid>
                    <Container>
                        <Row style={{marginTop:"40px"}}>
                            <Col className="bx_wrapper"><h2>Why we are an ideal choice for you?</h2></Col>
                            <Col className="bx_wrapper"><h5>Agile. Transparent. Collaborative. Time Tested. Our approach in product development helps you make the right choice for your users. Agile. Transparent. Collaborative. Time Tested. Our approach in product development</h5></Col>
                        </Row>
                        <Row>
                            <Col className="bx_wrapper">
                                <img src={process.env.PUBLIC_URL + "/Assets/services/1circle.png"} alt="logo" />
                               <div><h4>10+ years Market Experience</h4>
                                <p>We understand the security of your idea and data is a big concern, so we make sure that it is well protected by our non-disclosure agreement.</p>
                                </div>
                            </Col>
                            <Col className="bx_wrapper">
                                <img src={process.env.PUBLIC_URL + "/Assets/services/2circle.png"} alt="logo" />
                               <div> <h4>100% Transparency and Quality</h4>
                                <p>We understand the security of your idea and data is a big concern, so we make sure that it is well protected by our non-disclosure agreement.</p>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="bx_wrapper">
                                <img src={process.env.PUBLIC_URL + "/Assets/services/3circle.png"} alt="logo" />
                               <div> <h4>Affordable pricing and Time Delivery</h4>
                                <p>We understand the security of your idea and data is a big concern, so we make sure that it is well protected by our non-disclosure agreement.</p>
                                </div>
                            </Col>
                            <Col className="bx_wrapper">
                                <img src={process.env.PUBLIC_URL + "/Assets/services/4circle.png"} alt="logo" />
                               <div> <h4>Expert Certified Professionals</h4>
                                <p>We understand the security of your idea and data is a big concern, so we make sure that it is well protected by our non-disclosure agreement.</p>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="bx_wrapper">
                                <img src={process.env.PUBLIC_URL + "/Assets/services/5circle.png"} alt="logo" />
                               <div> <h4>Post Delivery Support</h4>
                                <p>We understand the security of your idea and data is a big concern, so we make sure that it is well protected by our non-disclosure agreement.</p>
                                </div>
                            </Col>
                            <Col className="bx_wrapper">
                                <img src={process.env.PUBLIC_URL + "/Assets/services/6circle.png"} alt="logo" />
                               <div> <h4>Continues Engagements</h4>
                                <p>We understand the security of your idea and data is a big concern, so we make sure that it is well protected by our non-disclosure agreement.</p>
                                </div>
                            </Col>
                        </Row>
                    </Container>
            </Container>
            <Container fluid className="content_four">
                <Row>
                    <Col>
                        <div className="tex_word_wp_Four">
                            <h2>What people think.</h2>
                            <i class="fa fa-quote-right quotesbx" aria-hidden="true"></i>
                            <p>At Aswebtech, we specialize in creating stunning websites and powerful mobile applications that drive business success. Our team of expert developers and designers are dedicated to delivering top-notch digital solutions tailored to meet your unique needs.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Client />
            <GetInTouch />
            <Footer />
        </>
    )
}

export default WebsiteDesign;
