import React from "react";
import { Row, Container, Col } from 'react-bootstrap'
import Footer from "../home/Footer/footer";
import Header from "../home/header/Header";
import TopHeaderInfo from "../home/topHeadInfo/TopHeaderInfo";
import Client from "../home/Client/Client"
import GetInTouch from "../home/GetinTouch/GetInTouch";
function Android() {
    return (
        <>
            <TopHeaderInfo />
            <Header />
            <Container fluid>
                <Row >
                    <img src={process.env.PUBLIC_URL + "/Assets/services/Android.jpg"} className="App-banner" alt="logo" />
                    <div style={{ position: "relative" }}>
                        <div className="head_wrapper">
                            <h1><span id="head_main">Android DEVELOPMENT</span></h1>
                            <p><span id="head_para">Android development involves creating applications for devices running the Android operating system, ranging from smartphones and tablets to wearables and IoT devices. Leveraging the Android SDK (Software Development Kit) and programming languages like Java or Kotlin, developers can craft versatile and feature-rich applications tailored to diverse user needs.</span></p>
                        </div>
                    </div>
                </Row>
            </Container>
            <Container>
                <Row>
                    <div style={{ textAlign: "center", marginTop: "40px", marginBottom: "40px" }}>
                        <h3>Crafting Dynamic Experiences: Android Development Essentials</h3>
                        <span class="content_bar"></span>
                        <p>Android development offers extensive capabilities, including access to hardware sensors, location services, and multimedia functionalities, enabling developers to create immersive and innovative experiences. Moreover, the platform provides robust tools for user interface design, data storage, and networking, empowering developers to build responsive and scalable applications.</p>
                    </div>
                </Row>
            </Container>
            <Container>
                <h3 style={{ textAlign: "center" }}>WHY CHOOSE AS WEB TECH FOR WEBSITE DEVELOPMENT</h3>
                <span class="content_bar"></span>
                <Row className="bxuirt2">
                    <Col>
                        <div className="card_file">
                            <Row>
                                    <span className="card_icon"></span>
                                <Col><h6>Exploring the Realm of Android Development</h6><span></span></Col>
                            </Row>
                            <p>Android development stands at the forefront of mobile technology, offering developers a robust platform to create diverse and innovative applications. From smartphones to wearables, Android provides a versatile ecosystem for crafting dynamic experiences tailored to modern user needs.</p>
                        </div>
                    </Col>
                    <Col>
                        <div className="card_file">
                            <Row>
                                    <span className="card_icon"></span>
                                <Col><h6>Understanding the Android SDK</h6><span></span></Col>
                            </Row>
                            <p>At the core of Android development lies the Android Software Development Kit (SDK), which provides a comprehensive set of tools, libraries, and APIs for building applications. Developers leverage these resources to access device features, manage user interfaces, and interact with system services.</p>
                        </div>
                    </Col>
                    <Col>
                        <div className="card_file">
                            <Row>
                                    <span className="card_icon"></span>
                                <Col><h6>Powering Android Applications</h6><span></span></Col>
                            </Row>
                            <p>Java and Kotlin serve as the primary programming languages for Android development, offering developers flexibility and efficiency in crafting code. While Java has long been the standard choice, Kotlin has gained popularity for its concise syntax and enhanced features, making development faster and more enjoyable.</p>
                        </div>
                    </Col>
                    <Col>
                        <div className="card_file">
                            <Row>
                                    <span className="card_icon"></span>
                                <Col><h4>Creating Engaging Experiences</h4><span></span></Col>
                            </Row>
                            <p>User interface (UI) design plays a crucial role in Android development, shaping the overall user experience. Developers utilize tools like XML layouts and the Android Studio visual editor to design intuitive interfaces that are visually appealing and easy to navigate.</p>
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
                            <h2>What is Google Play Store In Android?</h2>
                            <p>With the Google Play Store serving as the primary distribution platform, Android developers can reach a global audience and monetize their applications through various monetization models like in-app purchases, subscriptions, and advertisements.</p>
                            <p>The Google Play Store serves as the primary distribution platform for Android applications, providing developers with a vast audience reach. Developers navigate the app submission process, optimize metadata and assets, and employ app monetization strategies to maximize visibility and revenue.</p>
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
                            <p>Ambab follows a product approach to build websites and web apps. A major reason for this is everything we do is measurable, and we have a proper deadline that guarantees quality and fractions in every minute detail in the planning phase.  A major reason for this is everything we do is measurable, and we have a proper deadline that guarantees quality and fractions in every minute detail in the planning phase. A major reason for this is everything we do is measurable, and we have a proper deadline that guarantees quality and fractions in every minute detail in the planning phase.</p>
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

export default Android;
