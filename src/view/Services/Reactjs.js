import React from "react";
import { Row, Container, Col } from 'react-bootstrap'
import Footer from "../home/Footer/footer";
import Header from "../home/header/Header";
import TopHeaderInfo from "../home/topHeadInfo/TopHeaderInfo";
import Client from "../home/Client/Client"
import GetInTouch from "../home/GetinTouch/GetInTouch";

function Reactjs() {
    return (
        <>
            <TopHeaderInfo />
            <Header />
            <Container fluid>
                <Row >
                    <img src={process.env.PUBLIC_URL + "/Assets/services/react.jpg"} className="App-banner" alt="logo" />
                    <div style={{ position: "relative" }}>
                        <div className="head_wrapper">
                            <h1><span id="head_main">REACT JS / NEXT JS</span></h1>
                            <p><span id="head_para">React JS and Next JS are powerful frameworks for building dynamic and responsive websites with enhanced user experiences. Leveraging the declarative component-based architecture of React, developers can create reusable UI components, streamlining the development process and ensuring consistency across the application.</span></p>
                        </div>
                    </div>
                </Row>
            </Container>
            <Container>
                <Row>
                    <div style={{ textAlign: "center", marginTop: "40px", marginBottom: "40px" }}>
                        <h3>React JS and Next JS offer a modern and efficient development</h3>
                        <span class="content_bar"></span>
                        <p>Next JS extends the capabilities of React by offering server-side rendering, enabling faster page loads and improved SEO performance. Additionally, Next JS provides built-in routing, code splitting, and static site generation features, empowering developers to optimize performance and scalability effortlessly.</p>
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
                                <Col><h6>Empowering Dynamic UI Development</h6>
                                    <span></span>
                                </Col>
                            </Row>
                            <p>React JS revolutionizes UI development with its declarative syntax and component reusability. Developers can create modular UI components, facilitating code organization and maintenance. Through its virtual DOM implementation, React optimizes rendering performance.</p>
                        </div>
                    </Col>
                    <Col>
                        <div className="card_file">
                            <Row>
                                    <span className="card_icon"></span>
                                    <Col><h6>Unleashing Server-Side Rendering</h6>
                                        <span></span>
                                    </Col>
                            </Row>
                            <p>Next JS extends the capabilities of React by introducing server-side rendering (SSR), a feature that pre-renders pages on the server for faster initial page loads. This not only enhances user experience but also improves search engine optimization (SEO) </p>
                        </div>
                    </Col>
                    <Col>
                        <div className="card_file">
                            <Row>
                                    <span className="card_icon"></span>
                                <Col><h6>Optimizing Performance with Next JS</h6><span></span></Col>
                            </Row>
                            <p>In addition to SSR, Next JS offers static site generation (SSG), enabling the generation of static HTML files at build time. This approach ensures rapid page loads and efficient caching strategies, making Next JS ideal for websites requiring high performance and scalability.</p>
                        </div>
                    </Col>
                    <Col>
                        <div className="card_file">
                            <Row>
                                    <span className="card_icon"></span>
                                <Col><h6>Versatility Across Industries</h6><span></span></Col>
                            </Row>
                            <p>From e-commerce platforms to content management systems, React JS and Next JS cater to diverse industries and use cases. Their robust features and active community support contribute to their widespread adoption, empowering developers to create innovative and responsive web solutions.</p>
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
                            <h2>Building Modern Web Solutions</h2>
                            <p> React JS and Next JS offer a modern and efficient approach to web development, empowering developers to create engaging and responsive websites. Whether you're a seasoned developer or just starting, these frameworks provide the tools and flexibility needed to bring your ideas to life and drive success in the digital world.</p>
                            <p> Next JS extends the capabilities of React by offering server-side rendering, enabling faster page loads and improved SEO performance. Additionally, Next JS provides built-in routing, code splitting, and static site generation features, empowering developers to optimize performance and scalability effortlessly.</p>
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
            <Footer />
        </>
    )
}

export default Reactjs;
