import React,{Component} from "react";
import SignIn from "./sign-up";
import LoginComponent from "./log-in";
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieList from "./movie-list";
// import LoginComponent from "./log-in";
class AddMovieComponent extends Component{
    constructor(){   
        super(); //1
       this.state={
        movieId:'',
        movieTitle:'',
        movieDes:'',
        movieType:'',
        movieList:[],
        insertStatus:false,
        updateBtn:false,
        rowData:{}    
       }  
       this.changeMovieId=this.changeMovieId.bind(this);               //method dec
       this.changeMovieTitle=this.changeMovieTitle.bind(this);         
       this.changeMovieDes=this.changeMovieDes.bind(this);
       this.changeMovieType=this.changeMovieType.bind(this);
       this.saveMovieDetails=this.saveMovieDetails.bind(this);
    }  
    editMovie=(obj)=>{
        this.setState({movieId:obj.id});                 //here in edit we pass value as function type values
        this.setState({movieTitle:obj.title});
        this.setState({movieDes:obj.desc});
        this.setState({movieType:obj.type});
        this.setState({updateBtn:true});
    }          
    deleteMovie=(obj)=>{
        let data={"id":this.state.movieId,"title":this.state.movieTitle,"desc":this.state.movieDes,"type":this.state.movieType}
        fetch("http://localhost:3000/movies/"+data.id,{
            method: "DELETE",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(data)
        }).then(
          this.getMovieDetails()
        );
        this.getMovieDetails()
    }

    updateMovie=(obj)=>{
        let data={"id":this.state.movieId,"title":this.state.movieTitle,"desc":this.state.movieDes,"type":this.state.movieType}
        fetch("http://localhost:3000/movies/"+data.id,{
            method: "PUT",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(data)
        }).then(
          this.getMovieDetails()
        );
        this.getMovieDetails()
        }
    
    
    changeMovieId(e){
        this.setState({movieId:e.target.value});  //e is instance or object of text box
    } 
    changeMovieTitle(e){
        this.setState({movieTitle:e.target.value});
    } 
    changeMovieDes(e){
        this.setState({movieDes:e.target.value});
    } 
    changeMovieType(e){
        this.setState({movieType:e.target.value});
    } 
    getMovieDetails(){
        fetch("http://localhost:3000/movies")    //service url
        .then(res=>res.json())                   //
        .then(result=> 
        this.setState({
            movieList:result
        })
        )
        .catch(console.log);   //by default get method is used
    }
    saveMovieDetails(){
        if(this.state.movieId && this.state.movieTitle && this.state.movieDes && this.state.movieType !== " "){
        document.getElementById("save").innerHTML="Successfullly saved";
        this.state.insertStatus=true;
        // this.setState({movieList:this.state.movieList.concat({"movieId":this.state.movieId,"movieTitle":this.state.movieTitle,"movieDes":this.state.movieDes,"movieType":this.state.movieType})});
        // alert('Movie details:'+this.state.movieId+','+this.state.movieTitle+','+this.state.movieDes+','+this.state.movieType);
        let data={"id":this.state.movieId,"title":this.state.movieTitle,"desc":this.state.movieDes,"type":this.state.movieType}
        fetch("http://localhost:3000/movies",{
            method: "POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(data)
        }).then(
          this.getMovieDetails()
        );
        }
        else{
            document.getElementById("msg2").innerHTML="fill all the fields";
        }
    }
    render(){         //2 
        return(
            <div className="container">
                <form>
                    <div>{5+5}</div>
                    <div>{this.state.movieTitle}</div><hr></hr>
                    <div className="form-group">
                        <label>Movie Id</label>
                        <input type="text" id="id" required value={this.state.movieId} onChange={this.changeMovieId} className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Movie Title</label>
                        <input type="text" id="title" required value={this.state.movieTitle} onChange={this.changeMovieTitle} className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label>Movie Description</label>
                        <input type="text" id="desc" required value={this.state.movieDes} onChange={this.changeMovieDes} className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label>Movie Type</label>
                        <input type="text" id="type" required value={this.state.movieType} onChange={this.changeMovieType} className="form-control" />
                    </div>
                    {
                    !this.state.updateBtn?
                    (<input type="button" value="Save" onClick={this.saveMovieDetails} className="btn btn-primary"/>):
                    (<input type="button" value="Update" onClick={this.updateMovie} className="btn btn-primary"/>)
                    }
                    <input type="reset" value="Reset" className="btn btn-secondary"/>

                    
                    <p id="save"></p>
                    <p id="msg2"></p>
                </form><br></br><br></br>
                {this.state.insertStatus?
                (<MovieList 
                    movieList={this.state.movieList} 
                    editMovie={this.editMovie} 
                    deleteMovie={this.deleteMovie} 
                    updateMovie={this.updateMovie}>

                </MovieList>)
                :(<div></div>)}
                <hr></hr>
                <br></br>
                <hr></hr>
                <SignIn></SignIn>
                <hr></hr>
                <br></br>
                <hr></hr>
                <LoginComponent></LoginComponent>
            </div>
        );
    }
    componentDidMount(){  //3
        this.state.insertStatus=true;
        this.getMovieDetails();

    }
}
export default AddMovieComponent;
