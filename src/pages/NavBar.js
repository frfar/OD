import React, {useEffect, useState} from 'react';
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

const NavBar = ({name1, name1Onchange, email, emailOnchange, company, companyOnchange}) => {
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

    async function fetchData() {
        
        const BASE_URL = 'http://localhost:3050'
        fetch(`${BASE_URL}`, { 
          method: 'GET',
          headers:{
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials':true,
            'Access-Control-Allow-Methods':'POST, GET'
          }
        })
        .then(response => response.json())
        .then(json => console.log(json));
        
        
    }
    useEffect(() => {
        fetchData();
        }, []);
    return(
        <div className="App">
            <Container fluid={true}>
                <div style={bgStyle}>
                    <Row>
                        <div style={askStyle}>
                            <div>
                                <Form action="/home" method="GET">
                                    <Row>
                                        <Col sm={10}>
                                            <FormGroup style={textStyle}>
                                                <Input style={textStyle} type="air" value={name1} onChange={name1Onchange} name="origin" id="airport" placeholder="Where do you want to go?" />
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