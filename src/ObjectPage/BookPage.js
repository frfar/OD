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
                    <BoardPass  info={{origin:"DFW",
                    destination:"Denver",
                    depDate:"01-01-2020",
                    retDate:"01-08-2020",
                    price: "100"}} />
                </Col>
            </Row>
        </div>
    )
};

export default BookPage;