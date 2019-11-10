import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem, Col
} from 'reactstrap';

const headerComponent = ( props ) => {
    const searchStyle = {
        width: "100%"
    }
    return(
        <div>
            <Navbar color="white" light expand="md">
                <NavbarBrand href="http://localhost:3000/">
                    <img
                        src="https://smlogin.aa.com/login/images/aa-logo-web.png"
                        width="250"
                        height="50"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    />
                </NavbarBrand>
                <NavbarToggler/>
                <Collapse navbar>
                    
                    <Col style={searchStyle} xs={8}>
                        <input style={searchStyle} className="form-control" type="text" placeholder="Search" aria-label="Search"/>
                    </Col>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink href="/components/">
                                <FontAwesomeIcon icon={faShoppingCart} size='2x' color='white'/>
                            </NavLink>
                        </NavItem>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret >
                                <FontAwesomeIcon icon={faUserCircle} size='2x' color='white'/>
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem>
                                    Account Profile
                                </DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>
                                    Log Out
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    )
};

export default headerComponent;