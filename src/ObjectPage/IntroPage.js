import React from 'react'
import { Row, Col} from 'reactstrap'
import DisplayBackground from './DisplayBackground';
import NavBar from './NavBar';


const IntroPage = ( props ) => {
    return(
        <div>
            <Row>
                <Col xs={5}>
                    <div>
                        <DisplayBackground img={ props.img }/>
                    </div>
                </Col>
                <Col>
                    <NavBar />
                </Col>
            </Row>
        </div>
    )
};

export default IntroPage;