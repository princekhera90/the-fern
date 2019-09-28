import React from 'react';
import axios from 'axios'; 
import './GetAdsForm.css'
class GetAdsForm extends React.Component{
    constructor(){
        super();
        this.state={
            productName:'',
            images:[],
            noOfImagesChoosen:'',
            category:'default',
            location:'default',
            formValidity:{
                productName:false,
                category:false,
                location:false,
                images:false
            },
            errorMessages:{
                productName:'',
                category:'',
                location:'',
                images:''
            },
            isValidForm:false,
            successMessage:'',
            errorMessage:''
        };
    }
    category=['food','clothes','furnitures'];
    location=['hyderabad','pune','mysuru','banglore'];

    categoryHandler=(event)=>{
        let category=event.target.value;
        let stateObj=this.state;
        stateObj['category']=category;
        stateObj.formValidity['category']=true;
        stateObj.errorMessages['category']=(stateObj.formValidity['category'])?'':'choose one category';
        stateObj.isValidForm=stateObj.formValidity.category && stateObj.formValidity.location && stateObj.formValidity.productName
        && stateObj.formValidity.images;
        this.setState(stateObj); 
        //console.log(JSON.stringify(this.state));
    }

    locationHandler=(event)=>{
        let location=event.target.value;
        let stateObj=this.state;
        stateObj['location']=location;
        stateObj.formValidity['location']=true;
        stateObj.errorMessages['location']=(stateObj.formValidity['location'])?'':'choose any location';
        stateObj.isValidForm=stateObj.formValidity.category && stateObj.formValidity.location && stateObj.formValidity.productName
        && stateObj.formValidity.images;
        this.setState(stateObj);
    }

    selectImages = (event) => {
        let images = [];
        for(var i = 0; i < event.target.files.length; i++){
        images[i] = URL.createObjectURL(event.target.files.item(i)).toString();
        console.log("image"+images[i]);
        }
       // images = images.filter(image => image.match(/\.(jpg|jpeg|png|gif)$/))
        let noOfImagesChoosen = `${images.length} valid image(s) selected`
        console.log('state info :'+JSON.stringify(this.state));
        let stateObj=this.state;
        stateObj.images=images;
        stateObj.noOfImagesChoosen=noOfImagesChoosen;
        stateObj.formValidity['images']=(images.length>0)?true:false;
        stateObj.errorMessages['images']=(stateObj.formValidity['images'])?'':'choose atleast 1 file';
        stateObj.isValidForm=stateObj.formValidity.category && stateObj.formValidity.location && stateObj.formValidity.productName
        && stateObj.formValidity.images;
        this.setState(stateObj);
    }

    handleSubmit=(event)=>{
        event.preventDefault();
        this.validateForm();
    }

    validateName=(e)=>{
        let productName=e.target.value;
        let stateObj=this.state;
        stateObj['productName']=productName;
        stateObj.formValidity['productName']=(productName=='')?false:true;           
        stateObj.errorMessages['productName']=(stateObj.formValidity['productName'])?'':'enter your product name';
        stateObj.isValidForm=stateObj.formValidity.category && stateObj.formValidity.location && stateObj.formValidity.productName
        && stateObj.formValidity.images;
        this.setState(stateObj);
        console.log('input received'+e.target.value);
    }

    validateForm=()=>{
        let data=new FormData();
        let postBody=new FormData();
        data.append('pname',this.state.productName);
        data.append('category',this.state.category);
        data.append('location',this.state.location);
        data.append('images','jgsdfasjv');
        postBody.append('email','samsaran9524@gmail.com');
        postBody.append('product',data);
        console.log("sad");
        axios.post('http://192.168.43.207:8200/addProduct',postBody,{
            headers:{
                'Content-Type':'application/json',
                'Access-Control-Allow-Origin':'*'
            }
        }).then(res=>{
            console.log("res from server"+JSON.stringify(res));
        }).catch(err=>{
            console.log(err);
        });
    }

    render(){
        return(
            <div className="container-fluid">
            <div className="text-center"><h2>Upload your Products... </h2></div>
            <div className="row col-md-4  offset-4 pt-4">
            <form className="bg-transparent" onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="productName" className="text-primary pl-2 font-weight-bold form-inline">Product Name </label>
                    <input type="text" placeholder="eg: Reymond cloths" id="productName" className="form-control" value={this.state.adName} onChange={this.validateName}/>
                    <span className="text-danger">{(this.state.formValidity['productName'])?'':this.state.errorMessages['productName']}</span>
                </div>
                <div className="form-group">
                    <label htmlFor="image" className="text-primary pl-2 font-weight-bold form-inline">Chose your file</label>
                    <input className="form-control" type="file" id="image" onChange={this.selectImages} multiple/>
                    <span className={(this.state.formValidity['images'])?'text-primary':'text-danger'}>{(this.state.formValidity['images'])?this.state.noOfImagesChoosen:this.state.errorMessages['images']}</span>
                    <span>
                        {this.state.images.map((image,index)=>{
                            return  <img height="100px" width="100px" src={image} key={index}/>
                        })}
                    </span>
                </div>
                <div className="form-group">
                    <label htmlFor="category" className=" text-primary pl-2 font-weight-bold form-inline"> Category </label>
                    <select id="category" defaultValue={this.state.category} onChange={this.categoryHandler}  className="mdb-select md-form form-control">
                        <option value="default" disabled>Choose your Category</option>                        
                        {this.category.map((cat,index)=>{
                            return <option key={index} value={cat}>{cat.toUpperCase()}</option>;
                        })}
                    </select>
                    <span className="text-danger">{(this.state.formValidity['category'])?'':this.state.errorMessages['category']}</span>
                </div>
                <div className="form-group">
                    <label htmlFor="location" className="text-primary pl-2 font-weight-bold form-inline">Location</label>
                    <select id="location" defaultValue={this.state.location} className="mdb-select md-form form-control" onChange={this.locationHandler}>
                        <option value="default" disabled>Choose your Location</option>
                        {this.location.map((loc,index)=>{
                            return <option key={loc} value={loc}>{loc.toUpperCase()}</option>
                        })}    
                    </select> 
                    <span className="text-danger">{(this.state.formValidity['location'])?'':this.state.errorMessages['location']}</span>
                </div>
                <button type="submit" disabled={!this.state.isValidForm} className="btn btn-primary btn-block">Submit</button>
                <span>{this.state.successMessage}</span>
            </form>
            </div>
            <span>{JSON.stringify(this.state)}</span>
            </div>
        )   
    }
}
export default GetAdsForm;