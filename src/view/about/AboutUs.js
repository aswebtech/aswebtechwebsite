import React from "react";
import { Container,Image,Row,Col } from "react-bootstrap";
import Footer from "../home/Footer/footer";
import GetInTouch from "../home/GetinTouch/GetInTouch";
import Header from "../home/header/Header";
import TopHeaderInfo from "../home/topHeadInfo/TopHeaderInfo";
import './about-us.css'

function AboutUs(){
    return(
        <>
            <TopHeaderInfo/>
            <Header/>
            <Container fluid className="about-us-banner">
                <img src={process.env.PUBLIC_URL + "/Assets/about-us.jpg"}/>
                <div className="content-wrapper">
                    <h2>ABOUT US</h2>
                </div>
            </Container>
            <Container>
                <Row>
                    <div className="about-us_first">
                        <h2>-Overview-</h2>
                        <p>AsWebTech excels in creating immersive digital experiences that elevate brands and yield tangible results. Specializing in web development and website design, we merge creativity with cutting-edge technology to deliver customized solutions. Passionate and proficient, we craft tailored experiences that resonate with audiences and drive success.</p>
                    </div>
                </Row>
                <Row>
                    <div className="about-us_first">
                        <h2>Spirit of ASWEBTECH</h2>
                        <p>The spirit of AsWebTech is one of innovation, collaboration, and dedication. We embrace challenges with enthusiasm, constantly seeking new ways to push the boundaries of what's possible in web development and design. Our team is united by a shared passion for excellence, driven by a desire to create impactful digital experiences that leave a lasting impression. At AsWebTech, we thrive on creativity, teamwork, and a relentless commitment to exceeding expectations, embodying a spirit of continual improvement and unwavering dedication to our craft.</p>
                    </div>
                </Row>
                <Row>
                    <div className="about-us_first">
                        <h2>The Idea</h2>
                        <Row>
                            <div className="about_center">
                                <img src={process.env.PUBLIC_URL + "/Assets/idea.png"} style={{width:"30%",textAlign:"center",margin:"auto"}}/>
                            </div>
                        </Row>
                        <p>The idea for AsWebTech is rooted in the belief that every business deserves an exceptional online presence that reflects its unique identity and goals. We aim to bridge the gap between creativity and technology, offering tailored web development and design solutions that empower businesses to thrive in the digital landscape. Our idea is to blend innovation with practicality, delivering websites and web applications that not only look stunning but also drive tangible results for our clients. With a focus on collaboration, excellence, and customer satisfaction, our idea is to be the go-to partner for businesses seeking to make a mark online, propelling them towards success through impactful digital experiences</p>
                    </div>
                </Row>
                <Row>
                    <div className="about-us_first">
                        <h2>GlobalLogic Company Facts At-A-Glance</h2>
                        <p>For over 20 years, GlobalLogic has partnered with businesses across every major industry to make amazing products and connect the dots between people, products, and business opportunities. In 2021, GlobalLogic was acquired by Hitachi Ltd. GlobalLogic’s capabilities, combined with Hitachi’s Lumada, enables us to deploy Hitachi’s extensive library of digital solutions to the global market and to help customers and societies solve their issues through Agile application development in the cloud.</p>
                        <ul>
                            <li><b>Founded:</b> Aswebtech was founded in 2020.</li>
                            <li><b>Headquarters:</b> The company is headquartered in Noida</li>
                            <li><b>Industry Focus:</b>The company provides digital product services to clients across various industries, including technology,NGOs, healthcare, automotive, telecommunications, media, and entertainment.</li>
                            <li><b>Services: </b>Aswebtech offers a range of services, including software development, product design, user experience (UX) design, quality assurance (QA) testing, and product lifecycle management.</li>
                            <li><b>Partnerships:</b> Aswebtech partners with leading technology companies, startups, and enterprises to deliver innovative solutions and drive digital transformation.</li>
                            <li><b>Acquisitions:</b> Over the years, Aswebtech has made strategic acquisitions to expand its capabilities and geographic reach, enhancing its position as a global leader in digital engineering services.</li>
                            <li><b>Employee Strength: </b>The company has a diverse and talented workforce comprising engineers, designers, and domain experts worldwide.</li>
                            <li><b>Culture:</b> Aswebtech fosters a culture of innovation, collaboration, and continuous learning, empowering employees to unleash their full potential and drive meaningful impact for clients.</li>
                            <li><b>Recognition:</b> Aswebtech has received numerous accolades for its excellence in digital product development  and commitment to customer satisfaction.</li>
                        </ul>
                    </div>
                </Row>
                <Row>
                    <Col className="about-us_first">
                        <h2>Our Mission:</h2>
                        <p>At Aswebtech, our mission is to empower businesses of all scales with compelling and influential online identities through pioneering web development and website designing solutions. We strive to integrate creativity, technology, and strategic insights to craft digital experiences that resonate with audiences, drive engagement, and propel businesses towards success in the ever-evolving digital landscape.</p>
                    </Col>
                    <Col className="about-us_first">
                        <h2>Our Vision:</h2>
                        <p>At AsWebTech, our vision is to become the trusted ally for businesses aspiring to harness the complete power of the web. We achieve this by delivering unparalleled web development and website designing services that redefine industry standards. Through our relentless pursuit of excellence, innovation, and client satisfaction, we aim to set new benchmarks in the digital realm, empowering businesses to thrive and succeed online. </p>
                    </Col>
                </Row>

            </Container>
            <Container>
                <Row>
                    <div className="about_center">
                        <img src={process.env.PUBLIC_URL + "/Assets/about_center.png"} style={{width:"60%",textAlign:"center",margin:"auto"}}/>
                    </div>
                </Row>
            </Container>
            <Footer/>
        </>
    )
}

export default AboutUs
