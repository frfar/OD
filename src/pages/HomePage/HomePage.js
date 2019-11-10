import React from 'react';
import Logo from "./images/Atlanta.jpg"
import ResizeImage from 'react-resize-image'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import {Row, Col,
    Button,
    Container,
    Card, CardText, CardTitle, CardBody} from 'reactstrap';




const HomePage = (props) => {
    const bodyStyle = {
        padding: "20px 17.5% 20px 17.5%"
    }
    const cardStyle = {
        marginBottom: "10px",
        marginLeft: "-20px"

    }
    const imgStyle = {
        
        height: "170px"
    }
    const arr = [
        [
            "DFW",
            "Denver"
        ],
        [
            "DFW",
            "Philadelphia"
        ],
        [
            "DFW",
            "Denver"
        ],
        [
            "DFW",
            "Philadelphia"
        ],
        [
            "DFW",
            "Denver"
        ],
        [
            "DFW",
            "Philadelphia"
        ],
        [
            "DFW",
            "Denver"
        ],
        [
            "DFW",
            "Philadelphia"
        ],
        [
            "DFW",
            "Denver"
        ],
        [
            "DFW",
            "Philadelphia"
        ],
        [
            "DFW",
            "Denver"
        ],
        [
            "DFW",
            "Philadelphia"
        ]
    ]


    let store_row_1 = [];
    let store_row_2 = [];
    let store_row_3 = [];
    let store_row_4 = [];
    for(let i = 0; i < props.items.length; i++) {
        if(i < 4) {
            store_row_1.push(
                <Card style={cardStyle}>
                    <img style={imgStyle} src={props.items[i][0]} className='card-img-top'/>
                    <CardBody>
                        <CardTitle><h5>{props.items[i][1]}</h5></CardTitle>
                        <CardText>Round trip costs ${props.items[i][2]}</CardText>
                        <Link to="/BookPage">
                            <Button href={props.items[i][0]} color="primary">Book</Button>
                        </Link>
                    </CardBody>
                </Card>)
        } else if(i < 8){
            store_row_2.push(
                <Card style={cardStyle}>
                    <img style={imgStyle} src={props.items[i][0]} className='card-img-top'/>
                    <CardBody>
                        <CardTitle><h5>{props.items[i][1]}</h5></CardTitle>
                        <CardText>Round trip costs ${props.items[i][2]}</CardText>
                        <Link to="/BookPage">
                            <Button href={props.items[i][0]} color="primary">Book</Button>
                        </Link>
                    </CardBody>
                </Card>)
        } else{
            store_row_3.push(
                <Card style={cardStyle}>
                    <img style={imgStyle} src={props.items[i][0]} className='card-img-top'/>
                    <CardBody>
                        <CardTitle><h5>{props.items[i][1]}</h5></CardTitle>
                        <CardText>Round trip costs ${props.items[i][2]}</CardText>
                        <Link to="/BookPage">
                            <Button href={props.items[i][0]} color="primary">Book</Button>
                        </Link>
                    </CardBody>
                </Card>)
        }
    }
    // let store_col_2 = [];
    // for(let i = 0; i < props.items.length; i++) {
    //     if(i % 4 === 1) {
    //         store_col_2.push(
    //             <Card style={cardStyle}>
    //                 <img src={props.items[i][0]} className='card-img-top'/>
    //                 <CardBody>
    //                     <CardTitle>{props.items[i][1]}</CardTitle>
    //                     <CardText>Round trip costs ${props.items[i][2]}</CardText>
    //                     <Button href={props.items[i][0]} color="primary">Book</Button>
    //                 </CardBody>
    //             </Card>)
    //     }
    // }
    // let store_col_3 = [];
    // for(let i = 0; i < props.items.length; i++) {
    //     if(i % 4 === 2) {
    //         store_col_3.push(
    //             <Card style={cardStyle}>
    //                 <img src={props.items[i][0]} className='card-img-top'/>
    //                 <CardBody>
    //                     <CardTitle>{props.items[i][1]}</CardTitle>
    //                     <CardText>Round trip costs ${props.items[i][2]}</CardText>
    //                     <Button href={props.items[i][0]} color="primary">Book</Button>
    //                 </CardBody>
    //             </Card>)
    //     }
    // }
    // let store_col_4 = [];
    // for(let i = 0; i < props.items.length; i++) {
    //     if(i % 4 === 3) {
    //         store_col_4.push(
    //             <Card style={cardStyle}>
    //                 <img src={props.items[i][0]} className='card-img-top'/>
    //                 <CardBody>
    //                     <CardTitle>{props.items[i][1]}</CardTitle>
    //                     <CardText>Round trip costs ${props.items[i][2]}</CardText>
    //                     <Button href={props.items[i][0]} color="primary">Book</Button>
    //                 </CardBody>
    //             </Card>)
    //     }
    // }

    return (
        <div className="App">
            <Container fluid={true} style={bodyStyle}>
                <Row>
                    
                <Col>{store_row_1[0]}</Col>
                    <Col>{store_row_1[1]}</Col>
                    <Col>{store_row_1[2]}</Col>
                    <Col>{store_row_1[3]}</Col>
                </Row>
                {"\n"}
                <Row>
                
                <Col>{store_row_2[0]}</Col>
                    <Col>{store_row_2[1]}</Col>
                    <Col>{store_row_2[2]}</Col>
                    <Col>{store_row_2[3]}</Col>
                </Row>
                {"\n"}
                <Row>
                
                <Col>{store_row_3[0]}</Col>
                    <Col>{store_row_3[1]}</Col>
                    <Col>{store_row_3[2]}</Col>
                    <Col>{store_row_3[3]}</Col>
                </Row>
                {"\n"}
                <Row>
                
                <Col>{store_row_4[0]}</Col>
                    <Col>{store_row_4[1]}</Col>
                    <Col>{store_row_4[2]}</Col>
                    <Col>{store_row_4[3]}</Col>
                </Row>
                    
            </Container>
        </div>
    );
};

export default HomePage;