import "bootstrap/dist/css/bootstrap.min.css";
export default function MovieList (props){               
    return(
        <div>
            <div><b>MOVIELIST TABLE</b></div>

            <table className='table table-bordered table-striped'>
                <thead>
                    <tr>
                        <th>Movie Id</th>
                        <th>Movie Title</th>
                        <th>Movie Desc</th>
                        <th>Movie Type</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                   {props.movieList.map((obj)=>(
                    <tr>
                    <td>{obj.id} </td>
                    <td>{obj.title} </td>
                    <td>{obj.desc} </td>
                    <td>{obj.type} </td>
                    <td><button className='btn btn-primary' onClick={()=>props.editMovie(obj)}>Edit</button></td>
                    <td><button className='btn btn-danger' onClick={()=>props.deleteMovie(obj)}>Delete</button></td>
                    </tr>
                    ))}
                </tbody>
            </table>

        </div>
    );
                   }

    //how to pass data from parent to child   using props
    //how to padd data from child to parent   using props update\\
    //go through React hooks in w3