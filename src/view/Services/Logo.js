import React from "react";
import { Row, Container, Col } from 'react-bootstrap'
import Footer from "../home/Footer/footer";
import Header from "../home/header/Header";
import TopHeaderInfo from "../home/topHeadInfo/TopHeaderInfo";
import Client from "../home/Client/Client"
import GetInTouch from "../home/GetinTouch/GetInTouch";
function Logo() {
    return (
        <>
            <TopHeaderInfo />
            <Header />
            <Container fluid>
                <Row >
                    <img src={process.env.PUBLIC_URL + "/Assets/services/logodesign.jpg"} className="App-banner" alt="logo" />
                    <div style={{ position: "relative" }}>
                        <div className="head_wrapper">
                            <h1><span id="head_main">Logo Design</span></h1>
                            <p><span id="head_para">Logo design is a vital component of branding, encapsulating a company's identity and values in a visually striking symbol. It serves as a memorable representation of a brand, instantly recognizable and capable of conveying its essence to audiences. A well-crafted logo communicates professionalism, credibility, and differentiation in a competitive marketplace.</span></p>
                        </div>
                    </div>
                </Row>
            </Container>
            <Container>
                <Row>
                    <div style={{ textAlign: "center", marginTop: "40px", marginBottom: "40px" }}>
                        <h3>Crafting Memorable Logos: The Art of Visual Branding</h3>
                        <span class="content_bar"></span>
                        <p>The design phase involves brainstorming ideas, sketching concepts, and refining them into cohesive visual representations. Elements such as typography, color palette, and imagery are carefully chosen to evoke the desired emotional response and convey the brand's message effectively.</p>
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
                                <Col><h4>Creative Expertise</h4>
                                    <span></span>
                                </Col>
                            </Row>
                            <p>ASWebTech boasts a team of talented designers with a keen eye for creativity and innovation. Our designers are adept at translating ideas into visually stunning designs that resonate with your audience.</p>
                        </div>
                    </Col>
                    <Col>
                        <div className="card_file">
                            <Row>
                                    <span className="card_icon"></span>
                                    <Col><h4>Customized Solutions</h4>
                                        <span></span>
                                    </Col>
                            </Row>
                            <p> We understand that every brand is unique, which is why we offer customized design solutions tailored to your specific requirements. Whether you need a logo that reflects your brand identity or a user interface that enhances user experience, we've got you covered.</p>
                        </div>
                    </Col>
                    <Col>
                        <div className="card_file">
                            <Row>
                                    <span className="card_icon"></span>
                                <Col><h4>Attention to Detail</h4><span></span></Col>
                            </Row>
                            <p>We pay meticulous attention to detail in every aspect of our design process, ensuring that every element is thoughtfully crafted to perfection. From color schemes to typography, we strive for excellence in every design we create.</p>
                        </div>
                    </Col>
                    <Col>
                        <div className="card_file">
                            <Row>
                                    <span className="card_icon"></span>
                                <Col><h4>Strategic Approach</h4><span></span></Col>
                            </Row>
                            <p>Our design process is driven by a strategic approach aimed at achieving your business objectives. Whether it's increasing brand awareness or driving conversions, we align our design strategies with your goals to deliver measurable results.</p>
                        </div>
                    </Col>
                </Row>
                <Row className="bxuirt2">
                    <Col>
                        <div className="card_file">
                            <Row>
                                    <span className="card_icon"></span>
                                <Col><h4>Collaborative Process</h4><span></span></Col>
                            </Row>
                            <p>We believe in fostering collaboration with our clients throughout the design process. Your input and feedback are integral to our design process, ensuring that the final product meets your expectations and exceeds them.</p>
                        </div>
                    </Col>
                    <Col>
                        <div className="card_file">
                            <Row>
                                    <span className="card_icon"></span>
                                <Col><h4>Versatility</h4><span></span></Col>
                            </Row>
                            <p>ASWebTech offers a wide range of design services, including graphic designing, logo creation, and Figma UI/UX designing. Whether you need a single design service or a comprehensive design package, we have the expertise to meet your needs.</p>
                        </div>
                    </Col>
                    <Col>
                        <div className="card_file">
                            <Row>
                                    <span className="card_icon"></span>
                                <Col><h4>Customer Satisfaction</h4><span></span></Col>
                            </Row>
                            <p>At ASWebTech, customer satisfaction is our top priority. We go above and beyond to ensure that our clients are delighted with the final outcome of their design projects. From initial concept to final delivery, we are committed to exceeding your expectations every step of the way.</p>
                        </div>
                    </Col>
                    <Col>
                        <div className="card_file">
                            <Row>
                                    <span className="card_icon"></span>
                                <Col><h4>Technology Integration</h4><span></span></Col>
                            </Row>
                            <p>We leverage the latest design tools and technologies, including Figma, to streamline our design process and deliver superior results efficiently. Our designers are proficient in utilizing these tools to bring your vision to life.
</p>
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
                            <h2>What is Lorem Ipsum?</h2>
                            <p>Ambab follows a product approach to build websites and web apps. A major reason for this is everything we do is measurable, and we have a proper deadline that guarantees quality and fractions in every minute detail in the planning phase.  A major reason for this is everything we do is measurable, and we have a proper deadline that guarantees quality and fractions in every minute detail in the planning phase. A major reason for this is everything we do is measurable, and we have a proper deadline that guarantees quality and fractions in every minute detail in the planning phase.</p>
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
                            <p>ASWebTech has exceeded my expectations with their unparalleled expertise and dedication to my project. Their ability to understand and execute my vision flawlessly has truly set them apart. ASWebTech is not just a service provider but a valued partner in my business journey.</p>
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

export default Logo;
