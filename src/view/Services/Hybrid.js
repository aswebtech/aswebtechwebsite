import React from "react";
import { Row, Container, Col } from 'react-bootstrap'
import Footer from "../home/Footer/footer";
import Header from "../home/header/Header";
import TopHeaderInfo from "../home/topHeadInfo/TopHeaderInfo";
import Client from "../home/Client/Client"
import GetInTouch from "../home/GetinTouch/GetInTouch";
function Hybrid() {
    return (
        <>
            <TopHeaderInfo />
            <Header />
            <Container fluid>
                <Row >
                    <img src={process.env.PUBLIC_URL + "/Assets/services/hybrid.jpg"} className="App-banner" alt="logo" />
                    <div style={{ position: "relative" }}>
                        <div className="head_wrapper">
                            <h1><span id="head_main">React Native (Hybrid)</span></h1>
                            <p><span id="head_para">
                                React Native is a popular open-source framework for building cross-platform mobile applications using JavaScript and React. Developed by Facebook, React Native enables developers to create native-like experiences for iOS and Android platforms from a single codebase. With React Native, developers can leverage their existing knowledge of JavaScript and React to develop mobile apps, reducing development time and effort.</span></p>
                        </div>
                    </div>
                </Row>
            </Container>
            <Container>
                <Row>
                    <div style={{ textAlign: "center", marginTop: "40px", marginBottom: "40px" }}>
                        <h3>Building Cross-Platform Mobile Apps with JavaScript</h3>
                        <span class="content_bar"></span>
                        <p>React Native boasts a vibrant ecosystem with a vast collection of libraries, plugins, and tools that extend its capabilities and streamline development tasks. Developers can access native modules and APIs directly from JavaScript, enabling seamless integration of device-specific features and functionalities into their apps.</p>
                    </div>
                </Row>
            </Container>
            <Container>
                <h3 style={{ textAlign: "center" }}>WHY CHOOSE AMBAB FOR MAGENTO DEVELOPMENT</h3>
                <span class="content_bar"></span>
                <Row className="bxuirt">
                    <Col>
                        <div className="card_file">
                            <Row>
                                    <span className="card_icon" className="card_icon"></span>
                                <Col><h4>Native Integration</h4>
                                    <span></span>
                                </Col>
                            </Row>
                            <p>React Native enables seamless integration with native platform components through JavaScript. Developers can access native APIs and functionalities using bridges provided by React Native.</p>
                        </div>
                    </Col>
                    <Col>
                        <div className="card_file">
                            <Row>
                                    <span className="card_icon"></span>
                                    <Col><h6>Core Principles of React Native</h6>
                                        <span></span>
                                    </Col>
                            </Row>
                            <p>At the heart of React Native lies the concept of reusable components. Developers can create modular components that encapsulate specific functionalities and then compose them to build complex user interfaces. </p>
                        </div>
                    </Col>
                    <Col>
                        <div className="card_file">
                            <Row>
                                    <span className="card_icon"></span>
                                <Col><h6>Hot Reloading and Rapid Iteration</h6><span></span></Col>
                            </Row>
                            <p>React Native offers a hot reloading feature that allows developers to see the changes they make to the code reflected immediately in the running application. This accelerates the development process by eliminating the need for manual rebuilding and reloading.</p>
                        </div>
                    </Col>
                    <Col>
                        <div className="card_file">
                            <Row>
                                    <span className="card_icon"></span>
                                <Col><h6>Performance Optimization</h6><span></span></Col>
                            </Row>
                            <p>Despite using JavaScript, React Native achieves high performance by leveraging native rendering capabilities. It utilizes a virtual DOM to efficiently update the UI, minimizing UI thread blocking and ensuring smooth interactions.</p>
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
                            <p>
                                <b>Access to Third-Party Libraries and Plugins:</b> React Native boasts a rich ecosystem of third-party libraries and plugins that extend its capabilities and simplify common development tasks. These libraries cover a wide range of functionalities, including navigation, state management, data persistence, and UI components, empowering developers to build feature-rich mobile applications with ease.
                            </p>
    <p>
                                <b>Cross-Platform Development:</b> React Native's cross-platform nature enables developers to write code once and deploy it across multiple platforms. While some platform-specific code may be necessary for certain functionalities, the bulk of the application logic and UI can be shared between iOS and Android, significantly reducing duplication of effort and ensuring consistency across platforms.
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Container fluid>
                   <Container>
                        <Row style={{marginTop:"40px"}}>
                            <Col className="bx_wrapper"><h2>Why we are an ideal choice for you?</h2></Col>
                            <Col className="bx_wrapper"><h5>We stand out as your ideal choice due to our extensive experience and steadfast dedication to achieving your goals, guaranteeing exceptional service and outcomes in the digital sphere.</h5></Col>
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
                            <p>ASWebTech has exceeded my expectations with their unparalleled expertise and dedication to my project. Their ability to understand and execute my vision flawlessly has truly set them apart. ASWebTech is not just a service provider but a valued partner in my business journey.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Client />
            <Footer />
        </>
    )
}

export default Hybrid;
