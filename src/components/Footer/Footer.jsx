import React from 'react';
import { Container, Navbar} from 'react-bootstrap';
const Footer = () => {
    return (
<div className="footerWrapper">
            <Navbar collapseOnSelect expand="md" sticky="bottom"  bg="dark" variant="dark" >
                <Container className="justify-content-center">
                        <div style={{color: "rgba(255,255,255,0.33)"}}>All rights reserved. 2021 </div>
                </Container>
            </Navbar>
</div>

    );
}

export default Footer;