import React from 'react';

import {
    Navbar,
    Row,
    Col,
    ListGroup,
    ListGroupItem,
    ListGroupItemText,
    ListGroupItemHeading,
    Container,
    Card,
    CardBody,
    Form,
    FormGroup,
    Label,
    Input, Button
} from 'reactstrap';

const OriginPage = () => {
    const askStyle = {
        margin: "auto",
        marginTop: "100px",
        width: "65%",
        borderRadius: "75px"
    };
    const textStyle = {
        fontSize: "70px",
        borderRadius: "50px"
    };
    const bgStyle = {
        width: "100%",
        height: "100%"
    };
    return(
        <div className="App">
            <Container fluid={true}>
                <img style={bgStyle} src={"https://www.rd.com/wp-content/uploads/2017/10/Why-Are-Commercial-Airplanes-White-_493536652-Jag_cz-760x506.jpg"}/>
                <div style={bgStyle}>
                    <Row>
                        <Card style={askStyle}>
                            <CardBody>
                                <Form>
                                    <FormGroup style={textStyle}>
                                        <Label for="airport">Nearest Airport</Label>
                                        <Input style={textStyle} type="air" name="air" id="airport" placeholder="e.g. DFW" />
                                    </FormGroup>
                                    <Button style={textStyle}>Submit</Button>
                                </Form>
                            </CardBody>
                        </Card>
                    </Row>
                </div>
            </Container>
        </div>
    );
}
export default OriginPage;