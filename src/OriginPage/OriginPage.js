import React from 'react';

import {
    Row,
    Container,
    Card,
    CardBody,
    Form,
    FormGroup,
    Label,
    Input, Button
} from 'reactstrap';
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";
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
        backgroundImage: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fcdn-image.travelandleisure.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2F1600x1000%2Fpublic%2F1568237853%2Fhawaiian-airlines-plane-PLANEPAINT0919.jpg%3Fitok%3Dwz3vDt-u&w=400&c=sc&poi=face&q=85",
        height: "100%",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
    };
    return(
        <div style={bgStyle} className="App">
            <Container fluid={true}>
                <div style={bgStyle}>
                    <img src={"https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fcdn-image.travelandleisure.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2F1600x1000%2Fpublic%2F1568237853%2Fhawaiian-airlines-plane-PLANEPAINT0919.jpg%3Fitok%3Dwz3vDt-u&w=400&c=sc&poi=face&q=85"}/>
                    <Row>
                        <Card style={askStyle}>
                            <CardBody>
                                <Form  action={'/home'} method='GET'>
                                    <FormGroup style={textStyle}>
                                        <Label for="airport">Nearest Airport</Label>
                                        <Input style={textStyle} type="air" name="origin" id="airport" placeholder="e.g. DFW" />
                                    </FormGroup>
                                    <Link to="ObjectPage">
                                        <Button style={textStyle}>Submit</Button>
                                    </Link>
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