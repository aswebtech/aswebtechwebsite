import React from "react";
import { Row, Container, Col } from 'react-bootstrap'
import Footer from "../home/Footer/footer";
import Header from "../home/header/Header";
import TopHeaderInfo from "../home/topHeadInfo/TopHeaderInfo";
import Client from "../home/Client/Client"
import GetInTouch from "../home/GetinTouch/GetInTouch";
function FigmaDesign() {
    return (
        <>
            <TopHeaderInfo />
            <Header />
            <Container fluid>
                <Row >
                    <img src={process.env.PUBLIC_URL + "/Assets/services/figma.jpg"} className="App-banner" alt="logo" />
                    <div style={{ position: "relative" }}>
                        <div className="head_wrapper">
                            <h1><span id="head_main">Figma Design</span></h1>
                            <p><span id="head_para">Figma is a cloud-based design tool that revolutionizes the way design and development teams collaborate on interface design projects. Unlike traditional design software, Figma operates entirely in the browser, allowing multiple team members to work simultaneously on the same project in real-time. This real-time collaboration feature fosters seamless communication and enables designers and developers to iterate rapidly, reducing project timelines and enhancing overall efficiency.</span></p>
                        </div>
                    </div>
                </Row>
            </Container>
            <Container>
                <Row>
                    <div style={{ textAlign: "center", marginTop: "40px", marginBottom: "40px" }}>
                        <h3>Figma Design Development: Streamlining Collaboration and Workflow Efficiency</h3>
                        <span class="content_bar"></span>
                        <p>Figma also excels in design-to-development handoff, simplifying the transition from design to code. Developers can inspect design elements, access design specifications, and export assets directly from Figma, eliminating guesswork and reducing the likelihood of discrepancies between design and implementation. This seamless integration between design and development fosters closer collaboration and accelerates the delivery of high-quality digital products.</p>
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
                                <Col><h6> Interface and Navigation</h6>
                                    <span></span>
                                </Col>
                            </Row>
                            <p>Figma UI features an intuitive interface designed to facilitate ease of use and accessibility for designers of all skill levels. Its clean layout and straightforward navigation enable users to navigate between design files, artboards, and layers effortlessly, promoting a fluid design workflow.</p>
                        </div>
                    </Col>
                    <Col>
                        <div className="card_file">
                            <Row>
                                    <span className="card_icon"></span>
                                    <Col><h4> Design Tools and Features</h4>
                                        <span></span>
                                    </Col>
                            </Row>
                            <p>Figma UI offers a comprehensive set of design tools and features that empower designers to bring their creative visions to life. From vector drawing tools and shape manipulation to advanced prototyping capabilities and interactive components.</p>
                        </div>
                    </Col>
                    <Col>
                        <div className="card_file">
                            <Row>
                                    <span className="card_icon"></span>
                                <Col><h6> Prototyping and Interaction Design</h6><span></span></Col>
                            </Row>
                            <p>Figma UI empowers designers to create interactive prototypes and simulate user interactions seamlessly within the platform. Designers can define transitions, animations.</p>
                        </div>
                    </Col>
                    <Col>
                        <div className="card_file">
                            <Row>
                                    <span className="card_icon"></span>
                                <Col><h6>Integration and Ecosystem</h6><span></span></Col>
                            </Row>
                            <p>Figma UI integrates seamlessly with a variety of third-party tools and platforms, extending its functionality and interoperability. Integrations with tools like Slack, Jira, and Zeplin streamline communication, project management.</p>
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
                            <h2>Our Services.</h2>
                            <ul>
                                <li>Social Media Post</li>
                                <li>Magazines</li>
                                <li>Brochures</li>
                                <li>Posters</li>
                                <li>Banners</li>
                                <li>Presentation</li>
                                <li>e books</li>
                                <li>Illustration</li>
                                <li>Digital painting </li>
                                <li>Photo Editing </li>
                                <li>Video editing </li>
                                <li>Animation</li>
                                <li>Ui/Ux</li>
                                <li>Prototypes</li>
                            </ul>
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

export default FigmaDesign;
