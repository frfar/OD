import React from 'react'
import { Row, Col, Breadcrumb, BreadcrumbItem} from 'reactstrap'
import DisplayImage from './DisplayObjectImage';
import ObjectDescription from './ObjectDescription';
import ObjectPrice from './ObjectPrice';

const objectPage = ( props ) => {
    const boxStyle = {
        padding: '3%'
    };

    return(
        <div style={boxStyle}>
            <Row>
                <Col xs={5}>
                    <div>
                        <DisplayImage img={ props.img }/>
                    </div>
                </Col>
                <Col>
                    <ObjectDescription />
                </Col>
                <Col>
                    <ObjectPrice priceOption={props.currentPriceOption} changePriceOption={props.changePriceOption} price={props.price}
                        quantity={props.quantity} changeQuantity={props.changeQuantity}/>
                </Col>
            </Row>
        </div>
    )
};

export default objectPage;