import React from 'react'
import { Row, Col} from 'reactstrap'
import DisplayBackground from './DisplayBackground';
import BoardPass from './BoardPass';


const BookPage = ( props ) => {
    return(
        <div>
            <Row>
                <Col xs={5}>
                    <div>
                        <DisplayBackground img={ props.img }/>
                    </div>
                </Col>
                <Col>
                    <BoardPass />
                </Col>
            </Row>
        </div>
    )
};

export default BookPage;