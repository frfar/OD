import React from 'react'
import { Row, Col} from 'reactstrap'
import DisplayBackground from './DisplayBackground';
import NavBar from './NavBar';


const IntroPage = (props,{name1, name1Onchange, email, emailOnchange, company, companyOnchange}) => {
    return(
        <div>
            <Row>
                <Col xs={5}>
                    <div>
                        <DisplayBackground img={ props.img }/>
                    </div>
                </Col>
                <Col>
                    <NavBar name1={name1} name1Onchange={name1Onchange} />
                </Col>
            </Row>
        </div>
    )
};

export default IntroPage;