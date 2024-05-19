import React from "react";
import { Container, Row } from "react-bootstrap";

function CopyrightFooter() {
    return(
        <>
            <Container fluid style={{background:"#252628"}}>
                <Row>
                    <p style={{textAlign:"center",color:"#fff"}}>This site use cookies. AS Web Copyrights (new Date().getFullYear()) ©  Technologies Pvt Ltd. | All Rights Reserved.</p>
                </Row>
            </Container>
        </>
    )
}
export default CopyrightFooter
