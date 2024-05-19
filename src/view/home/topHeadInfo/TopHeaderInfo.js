import React from "react";
import { Container, Row } from "react-bootstrap";
import '../Home.css'
function TopHeaderInfo() {
    return (
        <>
            <Container fluid className="infoWrapper">
                    <Container>
                    <Row>
                        <ul>
                            <li><a href="">+one</a></li>
                            <li><a href="">+two</a></li>
                            <li><a href="">+8630081871</a></li>
                            <li><a href="">WhatsApp Now</a></li>
                        </ul>
                    </Row>
                    </Container>
            </Container>
        </>
    )
}

export default TopHeaderInfo;
