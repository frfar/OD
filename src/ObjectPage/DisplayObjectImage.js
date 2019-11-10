import React from 'react'
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

const displayObjectImage = (props ) => {
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
    return (
        <div  style={{width: "250%"}} id="carouselExampleInterval" className="carousel slide border" data-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={ props.img } className="d-block w-100" alt="..." />
                </div>
            </div>
        </div>
    )
};

export default displayObjectImage;