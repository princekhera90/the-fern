import React from 'react';
class Dashboard extends React.Component {
    constructor(){
        super();
    }
    currentDateAndTime=new Date().toLocaleString();
    render() {
        return (
            <div>
                    <div className="row">
                        <div className="col-md-5 offset-md-1">
                            <div className="row">
                                <div className="col-md-12">
                                <div className="card">
                                    <div className="card-header">Hyderabad</div>
                                    <div className="card-body">
                                    <div className="carousel slide" data-ride="carousel">
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                        <img className="d-block w-100" src="..." alt="First slide"/>
                                        </div>
                                        <div className="carousel-item">
                                        <img className="d-block w-100" src="..." alt="Second slide"/>
                                        </div>
                                        <div className="carousel-item">
                                        <img className="d-block w-100" src="..." alt="Third slide"/>
                                        </div>
                                    </div>
                                    </div>
                                    </div>
                                    <div className="card-footer">{this.currentDateAndTime}</div>
                                </div>
                                </div>
                            </div>
                            <br/>
                            <div className="row">
                            <div className="col-md-12">
                                <div className="card">
                                    <div className="card-header">Mysuru</div>
                                    <div className="card-body">Basic card</div>
                                    <div className="card-footer">{this.currentDateAndTime}</div>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5 ">
                        <div className="card">
                                    <div className="card-header">Banglore</div>
                                    <div className="card-body">Basic card</div>
                                    <div className="card-footer">{this.currentDateAndTime}</div>
                                </div>
                        </div>
                        
                    </div><br/>
                    <div className="row">
                        <div className="col-md-10 offset-md-1">
                        <div className="card">
                                    <div className="card-header">Pune</div>
                                    <div className="card-body">Basic card</div>
                                    <div className="card-footer">{this.currentDateAndTime}</div>
                                </div>
                        </div>

                    </div>
                
            </div>
        )
    }
}
export default Dashboard;