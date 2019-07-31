import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import ProductList from './ProductList'
import AddProduct from './AddProduct'
import $ from 'jquery';

class UserPage extends Component {
    constructor(props){
        super(props);
        this.state={
            username:'',
            password:''
        }
    }

    onInputChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };


    render() {
        return (
            <div>
                <MuiThemeProvider>
                    <div>
                        <ProductList/>
                        <AddProduct/>
                    </div>
                </MuiThemeProvider>
            </div>
        );
    }
}
export default UserPage;