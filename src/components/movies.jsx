import React, {Component} from "react";
import { getMovies } from "../services/fakeMovieService";

class Movies extends Component {
    state = {
        movies: getMovies()
    };

    handleDelete = (movie)=>{
        const movies = this.state.movies.filter(m=>m.id !== movie._id);
        this.setState({movies});
    };

    render() {
        const {length: count} = this.state.movies;

        if (count===0)
            return <p>There are no movies in the database.</p>;
        
        return (
            <React.Fragment>
                <p>Showing {this.state.movies.length}movies in the database</p>
            <table className="table">
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Genre</th>
                    <th>stock</th>
                    <th>Rate</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {this.state.movies.map(movie => (
                <tr>
                    <td>{movie.title}</td>
                    <td>{movie.genre}</td>
                    <td>{movie.stock}</td>
                    <td>{movie.rate}</td>
                    <td><button onClick={this.handleDelete.bind(this, movie)}className="btn btn-danger btn-sm">Delete</button></td>
                </tr>
                ))}
                
            </tbody>
        </table>
            </React.Fragment>
            
    )};
}
export default Movies;