import React,{Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
class LoginComponent extends Component{
    constructor(){
        super();
        this.state={
            email:'',
            password:''
        }
        this.changeemail=this.changeemail.bind(this); 
        this.changepassword=this.changepassword.bind(this);  
        this.login=this.login.bind(this); 
    }

    changeemail(e){
        this.setState({email:e.target.value});
    }
    changepassword(e){
        this.setState({password:e.target.value});
    }
    login(){
        alert("Hi");
    }
    render(){
        return(
            <div className="container">
                <form>
                    <div><b>LOGIN</b></div>
                    <hr></hr>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" value={this.state.email} onChange={this.changeemail} className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" value={this.state.password} onChange={this.changepassword} className="form-control"/>
                    </div>
                    <input type="button" value="Login" onClick={this.login} className="btn btn-primary"/>
                </form>
            </div>
        );
    }
    componentDidMount(){

    }
}
export default LoginComponent