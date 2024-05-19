import React from "react";
import { Container, Row } from "react-bootstrap";
import '../Homejquery'
function Banner(){
    return(
        <>
            <Container fluid>
                <Row >
                    
                    <div style={{position:"relative",margin:"0px",padding:"0px"}}>
                    <img src={process.env.PUBLIC_URL + "/Assets/bg.svg"} className="App-banner" alt="logo" />
                        <div className="wrapperWord">
                            <p><span id="changingword">Website Design</span></p>
                            <p><span id="changingpara">Crafting captivating digital experiences, we sculpt websites that resonate with your brand's essence. Elevate your online presence with our expert design solutions.</span></p>
                            <button className="Btnwrapper">Learn More</button>
                        </div>
                    </div>
                </Row>
            </Container>
        </>
    );
}

export default Banner;
