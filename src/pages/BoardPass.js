import React from 'react';
import {Button, Col, Input, Label, Row} from "reactstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faShoppingCart} from "@fortawesome/free-solid-svg-icons";

const BoardPass = (props) => {
    const askStyle = {
        margin: "auto",
        marginTop: "25px",
        marginLeft: "-25px",
        width: "100%",
        borderRadius: "25px",
    };
    const buttonStyle = {
        width: '100%'
    };

    const quantityStyle = {
        textAlign: 'left'
    };
    

  return(
      <div style={askStyle} className='shadow p-3 mb-5 bg-white rounded'>
          <h4>Flight Info</h4>
          <Row>
                <Col>
                    origin: { props.origin }
                </Col>
                <Col>
                    destination: { props.destination }
                </Col>
          </Row>
          <Row style={{height: "10px"}}>
          </Row>
          <Row>
                <Col>
                    Departure date: { props.depDate }
                </Col>
                <Col>
                    Return date: { props.retDate }
                </Col>
          </Row>
          <Row style={{height: "10px"}}>
          </Row>
          <Button color='warning' style={buttonStyle}>
              Add to Cart <FontAwesomeIcon icon={faShoppingCart} size='1x' color='black'/>
          </Button>
          <Row style={{height: "10px"}}>
          </Row>
          <div>
              <Row>
                <Col sm={2}>
                        Price: ${ props.price }
                </Col>
                <Col sm={3}></Col>
                  <Col sm={1} style={quantityStyle}>
                      <Label>Quantity: </Label>
                  </Col>
                  <Col sm={6}>
                      <Input type="select" name="select" id="exampleSelect" value={props.quantity} onChange={props.changeQuantity}>
                          <option value={1}>1</option>
                          <option value={2}>2</option>
                          <option value={3}>3</option>
                          <option value={4}>4</option>
                          <option value={5}>5</option>
                      </Input>
                  </Col>
              </Row>
          </div>
      </div>
  )
};

export default BoardPass;