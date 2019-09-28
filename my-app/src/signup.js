import React from 'react';   


class Signup extends React.Component { 
    render() {
        return (
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <form> 
                                <div className="form-group">
                                    <label>Username</label>
                                    <input type="text" className="formcontrol" />
                                </div>
                                <div className="form-group">
                                    <label>Email</label>
                                    <input type="email" className="formcontrol" />
                                </div>
                                <div className="form-group">
                                    <label>Password</label>
                                    <input type="password" className="formcontrol" />
                                </div>
                                <div className="form-group">
                                    <label>Confirm Password</label>
                                    <input type="password" className="formcontrol" />
                                </div>
                                <div className="form-group">
                                    <label>Company Name</label>
                                    <input type="text" className="formcontrol" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>




                {/* <Row>
                        <Col sm="12" md={{size:6,offset:3}}>
                            <Form onSubmit={this.login}>
                                <FormGroup>
                                    <Label for="username">Username</Label>
                                    <Input type="text" name="txtUserName" id="username" placeholder="Enter your username"   onChange={this.setUserName}  />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="password">Password</Label>
                                    <Input type="password" name="password" id="password" placeholder="Enter the password" onChange={this.setPassword} />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="number">Phone number</Label>
                                    <Input type="number" name="number" id="password" placeholder="Enter phone number" />
                                </FormGroup>
                                <Button type="submit">Submit</Button>
                                {this.state.errorMessage}
                            </Form>
                        </Col>
                    </Row> */}

            </React.Fragment>
        )
    }
}
export default Signup