import React,{Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
class SignIn extends Component{
    constructor(){
        super();
        this.state={
            firstName:'',
            lastName:'',
            email:'',
            password:''
        }
        this.changefirstName=this.changefirstName.bind(this); 
        this.changelastName=this.changelastName.bind(this);
        this.changeemail=this.changeemail.bind(this); 
        this.changepassword=this.changepassword.bind(this);
        this.signup=this.signup.bind(this);
    }

    changefirstName(e){
        this.setState({firstName:e.target.value});
    }
    changelastName(e){
        this.setState({lastName:e.target.value});
    }
    changeemail(e){
        this.setState({email:e.target.value});
    }
    changepassword(e){
        this.setState({password:e.target.value});
    }
    signup(){
        alert("Hi");
    }

    render(){
        return(
            <div className="container">
                <form>
                    <div><b>SIGN UP</b></div>
                    <hr></hr>
                    <div className="form-group">
                        <label>First Name</label>
                        <input type="text" value={this.state.firstName} onChange={this.changefirstName} className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label>Last Name</label>
                        <input type="text" value={this.state.lastName} onChange={this.changelastName} className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" value={this.state.email} onChange={this.changeemail} className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" value={this.state.password} onChange={this.changepassword} className="form-control"/>
                    </div>
                    <input type="button" value="Sign Up" onClick={this.signup} className="btn btn-primary"/>
                </form>
            </div>
        );

    }
    componentDidMount(){

    }
}
export default SignIn;