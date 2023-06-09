import AddMovieComponent from "./components/add-movie";
import LoginComponent from "./components/log-in";
import SignIn from "./components/sign-up";
export default function App(){
  return(
    <div>
    <h1>MyMovieShow</h1>
    <hr></hr>
    {/* <LoginComponent></LoginComponent> */}
    {/* <SignIn></SignIn> */}
    <AddMovieComponent></AddMovieComponent>
    </div>
  );
}