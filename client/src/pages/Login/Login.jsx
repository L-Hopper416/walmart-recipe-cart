import React, { Component } from 'react';
import { Row, Tab, Nav, NavItem, FormControl, FormGroup, Button } from 'react-bootstrap';
import "./login.css"

class Login extends Component {
    render() {
        console.log(this.props)
        return (
            <div id="tabDiv">
                <Tab.Container id="tabContainer" defaultActiveKey="first">
                    <Row>

                        <Nav bsStyle="pills" >
                            <NavItem eventKey="first">Login</NavItem>
                            <NavItem eventKey="second">Sign Up!</NavItem>
                        </Nav>


                        <Tab.Content animation>
                            <Tab.Pane eventKey="first">
                                <form>
                                    <FormGroup
                                        controlId="formBasicText"
                                    >
                                        <FormControl
                                            type="text"
                                            // value={this.state.value}
                                            placeholder="Username"
                                        // onChange={this.handleChange}
                                        />
                                        <FormControl
                                            type="text"
                                            // value={this.state.value}
                                            placeholder="Password"
                                        // onChange={this.handleChange}
                                        />
                                        <Button children="login" onClick={() => this.props.login(this.props.location.from)} />

                                        <FormControl.Feedback />
                                    </FormGroup>

                                </form>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                                <form>
                                    <FormGroup
                                        controlId="formBasicText"
                                    >
                                        <FormControl
                                            type="text"
                                            // value={this.state.value}
                                            placeholder="Username"
                                        // onChange={this.handleChange}
                                        />
                                        <FormControl
                                            type="text"
                                            // value={this.state.value}
                                            placeholder="Password"
                                        // onChange={this.handleChange}
                                        />
                                        <FormControl
                                            type="text"
                                            // value={this.state.value}
                                            placeholder="Grocery.Walmart Username"
                                        // onChange={this.handleChange}
                                        />
                                        <FormControl
                                            type="text"
                                            // value={this.state.value}
                                            placeholder="Grocery.Walmart Password"
                                        // onChange={this.handleChange}
                                        />
                                        <Button children="Sign Up" onClick={() => this.props.login(this.props.location.from)} />

                                        <FormControl.Feedback />
                                    </FormGroup>

                                </form>
                            </Tab.Pane>
                        </Tab.Content>

                    </Row>
                </Tab.Container>
            </div>
        )
    }
}

export default Login;