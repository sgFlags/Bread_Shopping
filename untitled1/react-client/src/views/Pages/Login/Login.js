import React, { Component } from 'react';
import { withRouter, Redirect, Route, Switch } from 'react-router-dom';
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import routes from '../../../routes';

class Login extends Component {
  state = {users: []}
  constructor(props) {
    super(props);
    this.state = {
      // redirect: false,
      username: 'Username',
      password: 'Password',
      login: false,
    };
    this.handleLogin = this.handleLogin.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  componentDidMount() {
    // fetch('/users')
    //   .then(res => res.json())
    //   .then(users => this.setState({users}));
  }
  handleOnRegisterClick() {
    window.location.href = "/#/register";
  }
  handleLogin(event) {
    event.preventDefault();
    var json = {
      username: this.state.username,
      password: this.state.password,
    };
    fetch('/users', {
      method: 'POST',
      headers: {'Content-Type':'application/json',},
      body: JSON.stringify({'json': json})
    })
      .then(res => res.json())
      .then(result => {
        //alert(result[0].result);
        if (result[0].result == "YES") {
          this.props.handleAccount(json.username);
          //this.setState({login: true});
          //window.location.href = "/register";
          //alert(this.props.history);
          this.props.history.push({pathname: "/dashboard", state: {
              username: this.state.username,
              //handleAccount: this.props.handleAccount
          }});
        } else {
          alert('Login failed!');
        }
      });
  }
  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }
  render() {
    // if (this.state.login) {
    //   return <Redirect push to="/dashboard"/>;
    // }
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="8">
              <CardGroup>
                <Card className="p-4">


                  <CardBody>
                    <Form action="#" onSubmit={this.handleLogin}>
                      <h1>Login</h1>
                      <p className="text-muted">Sign In to your account</p>
                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-user"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="text" name="username" onChange={this.handleInputChange} placeholder="Username" autoComplete="username" />
                      </InputGroup>
                      <InputGroup className="mb-4">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-lock"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="password" name="password" onChange={this.handleInputChange} placeholder="Password" autoComplete="current-password" />
                      </InputGroup>
                      <Row>
                        <Col xs="6">
                          <input type='submit' value='Login' />
                        </Col>
                        <Col xs="6" className="text-right">
                          <Button color="link" className="px-0">Forgot password?</Button>
                        </Col>
                      </Row>
                    </Form>
                  </CardBody>
                </Card>
                <Card className="text-white bg-primary py-5 d-md-down-none" style={{ width: 44 + '%' }}>
                  <CardBody className="text-center">
                    <div>
                      <h2>Sign up</h2>

                      <Button onClick={() => this.handleOnRegisterClick()} color="primary" className="mt-3" active>Register Now!</Button>
                    </div>
                  </CardBody>
                </Card>
              </CardGroup>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default withRouter(Login);
