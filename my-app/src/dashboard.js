import React from 'react';
class Dashboard extends React.Component {
    render() {
        return (
            <React.Fragment>
                    <div className="row">
                        <div className="col-md-5 offset-md-1">
                            <div className="row">
                                <div className="col-md-12">
                                <div class="card">
                                    <div class="card-header">Mumbai</div>
                                    <div class="card-body">Basic card</div>
                                    <div class="card-footer">Footer</div>
                                </div>
                                </div>
                            </div>
                            <br/>
                            <div className="row">
                            <div className="col-md-12">
                                <div class="card">
                                    <div class="card-header">Chennai</div>
                                    <div class="card-body">Basic card</div>
                                    <div class="card-footer">Footer</div>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5 ">
                        <div class="card">
                                    <div class="card-header">Delhi</div>
                                    <div class="card-body">Basic card</div>
                                    <div class="card-footer">Footer</div>
                                </div>
                        </div>
                        
                    </div><br/>
                    <div className="row">
                        <div className="col-md-10 offset-md-1">
                        <div class="card">
                                    <div class="card-header">Kolkata</div>
                                    <div class="card-body">Basic card</div>
                                    <div class="card-footer">Footer</div>
                                </div>
                        </div>

                    </div>
                
            </React.Fragment>
        )
    }
}
export default Dashboard;