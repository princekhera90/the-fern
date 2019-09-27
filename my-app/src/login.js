import React from 'react';

class Login extends React.Component{
    constructor() {
        super();
        this.state = {
            id: '',
            password: '',
            formErrors: {
                idErr: '',
                passwordErr: ''
            },
            fieldValidity: {
                id: false,
                password: false
            },
            formValid: false
        };
    }

    validateId = (e) => {
        const id = e.target.value;
        var formErrors = this.state.formErrors;
        var fieldValidity = this.state.fieldValidity;
        this.setState({ id: e.target.value });
        var re = new RegExp('[A-Za-z0-9_]*@[A-Za-z0-9_]*[\.]com');
        if (!id.match(re)) {
            formErrors.idErr = "Please enter correct email address";
            fieldValidity.id = false;
        }
        else {
            formErrors.idErr = "";
            fieldValidity.id = true;
        }
        this.setState({ fieldValidity: fieldValidity })
        this.setState({ formValid: fieldValidity.id && fieldValidity.password })
    }
    validatePassword = (e) => {
        const password = e.target.value;
        this.setState({ password: password });
        var formErrors = this.state.formErrors;
        var fieldValidity = this.state.fieldValidity;
        if (password=="" || password==null) {
            formErrors.passwordErr= "enter password"
            fieldValidity.password = false;
        }
        else {
            formErrors.passwordErr = ""
            fieldValidity.password = true;
        }
        this.setState({ formErrors: formErrors });
        this.setState({ formValid: fieldValidity.password && fieldValidity.password })
    }
    update = (e) => {
        e.preventDefault();
        if (this.state.formValid) {
            var formJSON = {
                id: this.state.id,
                password: this.state.password
            }
            console.log(JSON.stringify(formJSON));
            this.setState({ successMessage: JSON.stringify(formJSON) });
        }
    }

    render() {return (<React-Fragement>
        <div class="row">
            <div class="col-md-6 offset-md-3">
                <div class="card" style={{top : 70}}>
                    <h3 class="text-center text-primary">Login</h3><br></br>
                    <form class="container">
                    <div className="form-group">
                        <label>Email Id:</label>
                        <input className="form-control" onChange={this.validateId} value={this.state.id} />
                    </div>
                    <span className="text-danger">{this.state.formErrors.idErr}</span>
                    <div className="form-group">
                        <label>Password:</label>
                        <input className="form-control" type="password" onChange={this.validatePassword} value={this.state.password} />
                    </div>
                    <span className="text-danger">{this.state.formErrors.passwordErr}</span><br/>
                    <div class="form-group col-md-2 offset-md-5">
                        <button type="button" onClick={this.update} className="btn btn-success" disabled={!this.state.formValid}>Login</button><br/>
                        <span className="text-success">{this.state.successMessage}</span>
                    </div>
                    </form>
                </div>
            </div>
        </div>
      

    </React-Fragement>)}
                }
    
export default Login