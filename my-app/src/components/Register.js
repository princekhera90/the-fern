import React, { Component } from 'react';
import axios from 'axios';

class Register extends React.Component {
    constructor() {
        super();
        this.state = {
            UserEmail: "",
            UserPassWord: "",
            UserAdderss: {
                Street: "",
                Area: "",
                PinCode: "",
                State: "",
                Country: ""
            },
            UserPhoneNumber: "",
            CompanyName: ""
        };
    }

    SubmitForm = () => {
        axios.post('http://localhost' , this.state)
        .then((success)=>{
            console.log("successfully registered");
        })
        .catch((err)=>{
            console.log("Some error occured");
        })
    }

    handelSubmit = (e) => {
        e.preventDefault();
        this.SubmitForm();
    }

    handelChange = (e) => {

        let id = e.target.id;
        let form = this.state;

        if (id == 'useremail')
            form.UserEmail = e.target.value;
        else if (id == 'password')
            form.UserPassWord = e.target.value;
        else if (id == 'street')
            form.UserAdderss.Street = e.target.value;
        else if (id == 'area')
            form.UserAdderss.Area = e.target.value;
        else if (id == 'pincode')
            form.UserAdderss.PinCode = e.target.value;
        else if (id == 'state')
            form.UserAdderss.State = e.target.value;
        else if (id == 'country')
            form.UserAdderss.Country = e.target.value;
        else if(id == 'phone')
            form.UserPhoneNumber = e.target.value;
        else
            form.CompanyName = e.target.value;

        this.setState({
            form
        })
    }

    render() {
        return (
            <div class="row">
                <div class="col-md-6 offset-md-3">
                    <div class="card" style={{ top: 70 }}>
                        <h3 class="text-center text-primary">Register</h3><br></br>
                        <form class="container" onSubmit={this.handelSubmit}>
                            <div class="form-group">
                                <label id="useremail">User Email :</label>
                                <input type="text" onChange={this.handelChange} value={this.state.UserEmail} id="useremail" className="form-control" placeholder="abc@gmail.com" />
                            </div>

                            <div class="form-group">
                                <label id="password">Enter Password :</label>
                                <input type="text" onChange={this.handelChange} value={this.state.UserPassWord} className="form-control" id="password" placeholder="Password" />
                            </div>

                            <div class="form-group">
                                <label id="street">Street :</label>
                                <input type="text" onChange={this.handelChange} value={this.state.UserAdderss.Street} className="form-control" id="street" placeholder="ABC Colony" />
                            </div>

                            <div class="form-group">
                                <label id="area">Area :</label>
                                <input type="text" onChange={this.handelChange} value={this.state.UserAdderss.Area} className="form-control" id="area" placeholder="Near ABC" />
                            </div>

                            <div class="form-group">
                                <label id="pincode">Pin Code :</label>
                                <input type="number" onChange={this.handelChange} value={this.state.UserAdderss.PinCode} className="form-control" id="pincode" placeholder="123456" />
                            </div>

                            <div class="form-group">
                                <label id="state">State :</label>
                                <input type="text" onChange={this.handelChange} value={this.state.UserAdderss.State} className="form-control" id="state" placeholder="Gujarat" />
                            </div>

                            <div class="form-group">
                                <label id="country">Country :</label>
                                <input type="text" onChange={this.handelChange} value={this.state.UserAdderss.Country} className="form-control" id="country" placeholder="India" />
                            </div>

                            <div class="form-group">
                                <label id="phone">Mobile phone :</label>
                                <input type="number" onChange={this.handelChange} value={this.state.UserPhoneNumber} className="form-control" id="phone" placeholder="1234567890" />
                            </div>

                            <div class="form-group">
                                <label id="company">Company Name :</label>
                                <input type="text" onChange={this.handelChange} value={this.state.CompanyName} className="form-control" id="company" placeholder="Infosys" />
                            </div>

                            <div class="form-group col-md-2 offset-md-5">
                                <button class="btn btn-success">Sign Up</button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
export default Register;
