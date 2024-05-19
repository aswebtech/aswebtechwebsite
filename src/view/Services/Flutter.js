import React from "react";
import { Row, Container, Col } from 'react-bootstrap'
import Footer from "../home/Footer/footer";
import Header from "../home/header/Header";
import TopHeaderInfo from "../home/topHeadInfo/TopHeaderInfo";
import Client from "../home/Client/Client"
import GetInTouch from "../home/GetinTouch/GetInTouch";

function Flutter() {
    return (
        <>
            <TopHeaderInfo />
            <Header />
            <Container fluid>
                <Row >
                    <img src={process.env.PUBLIC_URL + "/Assets/services/Flutter.jpg"} className="App-banner" alt="logo" />
                    <div style={{ position: "relative" }}>
                        <div className="head_wrapper">
                            <h1><span id="head_main">FLUTTER DEVELOPMENT</span></h1>
                            <p><span id="head_para">Flutter development revolutionizes cross-platform app development by offering a comprehensive framework for building high-quality native applications for mobile, web, and desktop from a single codebase. Developed by Google, Flutter utilizes the Dart programming language to deliver fast, expressive, and flexible development experiences.</span></p>
                        </div>
                    </div>
                </Row>
            </Container>
            <Container>
                <Row>
                    <div style={{ textAlign: "center", marginTop: "40px", marginBottom: "40px" }}>
                        <h3>Empowering Cross-Platform Development</h3>
                        <span class="content_bar"></span>
                        <p>Flutter's layered architecture and reactive framework empower developers to build performant and scalable applications that run seamlessly on various platforms. Additionally, Flutter's extensive library of plugins and packages simplifies integration with native device features and third-party services.</p>
                    </div>
                </Row>
            </Container>
            <Container>
                <h3 style={{ textAlign: "center" }}>WHY CHOOSE AMBAB FOR Flutter DEVELOPMENT</h3>
                <span class="content_bar"></span>
                <Row className="bxuirt">
                    <Col>
                        <div className="card_file">
                            <Row>
                                    <span className="card_icon" className="card_icon"></span>
                                <Col><h6>Revolutionizing App Development</h6>
                                    <span></span>
                                </Col>
                            </Row>
                            <p>Flutter has emerged as a game-changer in the realm of app development, offering developers a powerful framework for building cross-platform applications. With its innovative approach and robust features, Flutter streamlines the development process and enables the creation of high-quality native experiences for mobile, web, and desktop platforms.</p>
                        </div>
                    </Col>
                    <Col>
                        <div className="card_file">
                            <Row>
                                    <span className="card_icon"></span>
                                    <Col><h6>Creating Stunning Interfaces</h6>
                                        <span></span>
                                    </Col>
                            </Row>
                            <p>Flutter's UI is built entirely using widgets, allowing developers to compose complex layouts and interactions with ease. From basic elements like buttons and text fields to advanced animations and gestures, Flutter's widget-based approach offers unparalleled flexibility and customization options.</p>
                        </div>
                    </Col>
                    <Col>
                        <div className="card_file">
                            <Row>
                                    <span className="card_icon"></span>
                                <Col><h6>Seamlessly Across Devices</h6><span></span></Col>
                            </Row>
                            <p>Flutter apps are designed to adapt seamlessly to different screen sizes, resolutions, and device form factors. Whether running on a smartphone, tablet, or desktop computer, Flutter applications provide consistent and visually appealing experiences across platforms.</p>
                        </div>
                    </Col>
                    <Col>
                        <div className="card_file">
                            <Row>
                                    <span className="card_icon"></span>
                                <Col><h6>Iterating at the Speed of Thought</h6><span></span></Col>
                            </Row>
                            <p>One of Flutter's standout features is hot reload, which enables developers to instantly see the effects of code changes reflected in the running app. This rapid iteration cycle enhances productivity and facilitates real-time experimentation and debugging.</p>
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
                            <h2>Go With Flutter</h2>
                            <p>Flutter boasts an extensive ecosystem of plugins and packages that simplify integration with native device features and third-party services. From accessing device sensors to integrating with platform-specific APIs, Flutter's plugins enable developers to leverage the full capabilities of each platform.</p>
                            <p>Flutter benefits from a vibrant and supportive community of developers, who contribute to its ecosystem by creating plugins, packages, and tutorials. This active community, coupled with Google's ongoing support and updates, ensures that Flutter remains at the forefront of cross-platform app development.</p>
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
                               <div><h4>5+ years Market Experience</h4>
                                <p>Bringing five years of expertise to every project, ASWebTech delivers unparalleled solutions with a track record of excellence in the digital realm</p>
                                </div>
                            </Col>
                            <Col className="bx_wrapper">
                                <img src={process.env.PUBLIC_URL + "/Assets/services/2circle.png"} alt="logo" />
                               <div> <h4>100% Transparency and Quality</h4>
                                <p>At ASWebTech, we ensure 100% transparency in quality, delivering top-notch solutions with integrity and clarity every step of the way.</p>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="bx_wrapper">
                                <img src={process.env.PUBLIC_URL + "/Assets/services/3circle.png"} alt="logo" />
                               <div> <h4>Affordable pricing and Time Delivery</h4>
                                <p>We offer affordable pricing without compromising quality, ensuring timely delivery of exceptional solutions that exceed expectations.</p>
                                </div>
                            </Col>
                            <Col className="bx_wrapper">
                                <img src={process.env.PUBLIC_URL + "/Assets/services/4circle.png"} alt="logo" />
                               <div> <h4>Expert Certified Professionals</h4>
                                <p>Home to expert certified professionals dedicated to crafting outstanding digital solutions tailored to your needs.</p>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="bx_wrapper">
                                <img src={process.env.PUBLIC_URL + "/Assets/services/5circle.png"} alt="logo" />
                               <div> <h4>Post Delivery Support</h4>
                                <p>At ASWebTech, our commitment doesn't end at delivery. We provide comprehensive post-delivery support, ensuring your continued success in the digital landscape.</p>
                                </div>
                            </Col>
                            <Col className="bx_wrapper">
                                <img src={process.env.PUBLIC_URL + "/Assets/services/6circle.png"} alt="logo" />
                               <div> <h4>Continues Engagements</h4>
                                <p>To foster ongoing engagement, ASWebTech remains dedicated to nurturing relationships beyond delivery, ensuring sustained success and growth for your digital endeavors.</p>
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

export default Flutter;
