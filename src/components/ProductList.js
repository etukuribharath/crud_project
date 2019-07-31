import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import $ from 'jquery';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class ProductList extends Component {
    constructor(props){
        super(props);
        this.state={
            user_name:sessionStorage.getItem("user_name"),
            products:[]
        }
    }

    onInputChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    componentDidMount=()=> {
        $.ajax({
            type: "GET",
            url: "http://localhost:3001/get_product/"+this.state.user_name,
            dataType: "json",
            success: function (data) {
                console.log(data)
               this.setState({products:data})
                }.bind(this),
            failure : function(){
            alert('login failed due to invallid credentials')
            }
    })
        };

    test(){
        let test = this.state.products.map((product,index)=>{
            return <div className="row">
                <div className="col-lg-6">
                    <p key={index}>{product.product_name}</p>
                </div>
                <div className="col-lg-3">
                    <RaisedButton label="edit" primary={true}  onClick={this.login} />
                </div>
                <div className="col-lg-3">
                    <RaisedButton label="delete" primary={true}  onClick={()=>this.deleteProduct(product.product_name)} />
                </div>
            </div>
        })
        return test;
    }
deleteProduct(product_name){
                console.log(product_name);
    $.ajax({
        type: "DELETE",
        url: "http://localhost:3001/delete_product/"+product_name,
        dataType: "json",
        success: function () {
            console.log('product has been successfully deleted')

        }.bind(this),
        failure : function(){
            alert('login failed due to invallid credentials')
        }
    })
}
    render() {
        return (
            <div>
                    <div className="container">
                        <AppBar
                            title="Add Product"
                        />
                        <br/>
                        <div className="row">
                        <div className="col-lg-6">
                            <h4>Product Name</h4>
                        </div>
                    </div>
                        {this.test()}
                        <br/>

                    </div>
                        </div>
        );
    }
}
export default ProductList;