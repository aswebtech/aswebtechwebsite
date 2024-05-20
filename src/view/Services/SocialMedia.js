import React from "react";
import { Row, Container, Col } from 'react-bootstrap'
import Footer from "../home/Footer/footer";
import Header from "../home/header/Header";
import TopHeaderInfo from "../home/topHeadInfo/TopHeaderInfo";
import Client from "../home/Client/Client"
import GetInTouch from "../home/GetinTouch/GetInTouch";
function SocialMedia() {
    return (
        <>
            <TopHeaderInfo />
            <Header />
            <Container fluid>
                <Row >
                    <img src={process.env.PUBLIC_URL + "/Assets/services/socialmedia.jpg"} className="App-banner" alt="logo" />
                    <div style={{ position: "relative" }}>
                        <div className="head_wrapper">
                            <h1><span id="head_main">Social Media Management</span></h1>
                            <p><span id="head_para">Let ASWebTech take the reins of your social media presence! Our Social Media Content Management service ensures your platforms stay vibrant, engaging, and on-brand. From strategic planning to creative content creation and timely scheduling, we've got you covered. Elevate your online presence with ASWebTech today! #SocialMediaManagement #ASWebTech"</span></p>
                        </div>
                    </div>
                </Row>
            </Container>
            <Container>
                <Row>
                    <div style={{ textAlign: "center", marginTop: "40px", marginBottom: "40px" }}>
                        <h3>Social Media Management</h3>
                        <span class="content_bar"></span>
                        <p>Ready to spark social media success? ASWebTech ignites your online presence with our innovative Social Media Content Management service. From crafting compelling posts to fostering meaningful interactions, we're your digital catalysts. Let's transform your social landscape together! #DigitalIgnition #ASWebTech.</p>
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
                                <Col><h6>Consistent Brand Voice</h6>
                                    <span></span>
                                </Col>
                            </Row>
                            <p>We ensure that your brand voice remains consistent across all social media platforms, reinforcing your identity and values.</p>
                        </div>
                    </Col>
                    <Col>
                        <div className="card_file">
                            <Row>
                                    <span className="card_icon"></span>
                                    <Col><h6>Increased Engagementn</h6>
                                        <span></span>
                                    </Col>
                            </Row>
                            <p>By crafting engaging content tailored to your audience's interests, we boost interaction and encourage meaningful conversations with your followers.</p>
                        </div>
                    </Col>
                    <Col>
                        <div className="card_file">
                            <Row>
                                    <span className="card_icon"></span>
                                <Col><h6>Time and Resource Savings</h6><span></span></Col>
                            </Row>
                            <p>Outsourcing social media management to ASWebTech frees up your time and resources, allowing you to focus on other aspects of your business.</p>
                        </div>
                    </Col>
                    <Col>
                        <div className="card_file">
                            <Row>
                                    <span className="card_icon"></span>
                                <Col><h6>Professionalism and Expertise</h6><span></span></Col>
                            </Row>
                            <p>Our team of social media experts brings professionalism and expertise to every post, enhancing your brand's credibility and reputation online.</p>
                        </div>
                    </Col>
                </Row>
                <Row className="bxuirt2">
                    <Col>
                        <div className="card_file">
                            <Row>
                                    <span className="card_icon"></span>
                                <Col><h6>Creative Content Creation</h6><span></span></Col>
                            </Row>
                            <p>Our team of content creators produces high-quality, creative content, including graphics, videos, and captions, designed to capture attention and inspire engagement.</p>
                        </div>
                    </Col>
                    <Col>
                        <div className="card_file">
                            <Row>
                                    <span className="card_icon"></span>
                                <Col><h6>Brand Monitoring and Reputation Management</h6><span></span></Col>
                            </Row>
                            <p>We monitor social media channels for mentions of your brand and promptly address any inquiries, comments, or concerns, helping to maintain a positive brand image and mitigate potential crises.</p>
                        </div>
                    </Col>
                    <Col>
                        <div className="card_file">
                            <Row>
                                    <span className="card_icon"></span>
                                <Col><h6>Cost-Effective Solution</h6><span></span></Col>
                            </Row>
                            <p>Outsourcing your social media management to ASWebTech is a cost-effective solution compared to hiring an in-house team, providing access to a team of experienced professionals at a fraction of the cost.</p>
                        </div>
                    </Col>
                    <Col>
                        <div className="card_file">
                            <Row>
                                    <span className="card_icon"></span>
                                <Col><h6>Flexibility and Scalability</h6><span></span></Col>
                            </Row>
                            <p>Our service is flexible and scalable to accommodate your evolving needs as your business grows. Whether you're launching a new product, running a promotional campaign, or expanding into new markets, we adapt our strategies accordingly.</p>
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
                            <p><b>Define Goals and Audience</b>: Start by defining clear, measurable goals for your social media presence. Determine who your target audience is and what platforms they use. Understanding your audience's demographics, interests, and behaviors will guide your content strategy.</p>
                            <p><b>Develop a Content Strategy</b>: Create a content calendar outlining the types of content you'll post, frequency, and themes. Mix up your content with a variety of formats such as images, videos, blog posts, and infographics. Ensure your content aligns with your brand identity and provides value to your audience</p>
                            <p><b>Monitor and Manage Your Brand Reputation</b>: Monitor mentions of your brand across social media platforms. Address any negative feedback or complaints promptly and professionally. Showcase positive customer experiences and testimonials to enhance your brand reputation.</p>
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

export default SocialMedia;
