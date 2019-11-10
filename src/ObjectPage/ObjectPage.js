import React from 'react'
import { Row, Col, Breadcrumb, BreadcrumbItem} from 'reactstrap'
import DisplayImage from './DisplayObjectImage';
import ObjectDescription from './ObjectDescription';
import ObjectPrice from './ObjectPrice';

const objectPage = ( props ) => {
    const boxStyle = {
        //padding: '3%'
    };

    return(
        <div>
            <Row>
                <Col xs={5}>
                    <div>
                        <DisplayImage img={ props.img }/>
                    </div>
                </Col>
                <Col>
                    <ObjectDescription />
                </Col>
            </Row>
        </div>
    )
};

export default objectPage;