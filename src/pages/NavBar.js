import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import {
    Row,
    Col,
    Container,
    Form,
    FormGroup,
    Input, Button
} from 'reactstrap';

const NavBar = () => {
    const askStyle = {
        margin: "auto",
        marginTop: "100px",
        marginLeft: "-25px",
        width: "100%",
        borderRadius: "25px",
    };
    const textStyle = {
        fontSize: "55px",
        borderRadius: "30px"
    };
    const bgStyle = {
        width: "100%",
        height: "100%"
    };
    return(
        <div className="App">
            <Container fluid={true}>
                <div style={bgStyle}>
                    <Row>
                        <div style={askStyle}>
                            <div>
                                <Form>
                                    <Row>
                                        <Col sm={10}>
                                            <FormGroup style={textStyle}>
                                                <Input style={textStyle} type="air" name="air" id="airport" placeholder="Where Are You?" />
                                            </FormGroup>
                                        </Col>
                                        <Col sm={2}>
                                            <Link to="/home">
                                                <Button style={textStyle}>GO</Button>
                                            </Link>
                                        </Col>
                                    </Row>
                                </Form>
                            </div>
                        </div>
                    </Row>
                </div>
            </Container>
        </div>
    );
}
export default NavBar;