import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import {
  Grid,
  Row,
  Col,
  Button,
  Form,
  FormGroup,
  ControlLabel,
  FormControl,
  Checkbox,
} from 'react-bootstrap';

import './Login.css';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.type]: event.target.value
    });
  }

  submitLogin = () => {
    console.log('submitting ', this.state),
    fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify(this.state),
        headers: {
          'Content-Type': 'application/json'
        },
      })
      .then(res => {
        console.log(res);
        console.log(res.json());
      })
      .catch(err => {
        console.error(err);
      });
  }

  render() {
    return (
      <Grid>
        <Row xs={12}>
          <h2 className='text-center'>Login page</h2>
        </Row>
        <Row xs={12}>
          <Form horizontal>
            <FormGroup controlId="formHorizontalEmail">
              <Col componentClass={ControlLabel} sm={2}>
                Email
              </Col>
              <Col sm={10}>
                <FormControl type="email"
                  placeholder="Email"
                  value={ this.state.email }
                  onChange={ this.handleChange } />
              </Col>
            </FormGroup>

            <FormGroup controlId="formHorizontalPassword">
              <Col componentClass={ControlLabel} sm={2}>
                Password
              </Col>
              <Col sm={10}>
                <FormControl type="password"
                  placeholder="Password"
                  value={ this.state.password }
                  onChange={ this.handleChange } />
              </Col>
            </FormGroup>

            <FormGroup>
              <Col smOffset={2} sm={10}>
                <Checkbox>Remember me</Checkbox>
                <Button onClick={ this.submitLogin }>
                  Sign in
                </Button>
              </Col>
            </FormGroup>
          </Form>
        </Row>
      </Grid>
    );
  }
}

// vim: et sw=2 ts=2 :
