import React, { Component } from 'react';
import '../App.css';
import MovieItem from './MovieItem';
import {
    Link
} from 'react-router-dom';



//https://api.themoviedb.org/3/discover/movie?api_key=a6a85fc7c5764779d7241a0d44c6ec24
const IMAGE_PATH = 'https://image.tmdb.org/t/p/w300/';
class MoviesList extends Component {

    state = {
        movies: []
    };

    async componentDidMount () {

        try {
            const resultObject = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=a6a85fc7c5764779d7241a0d44c6ec24');
            const movies = await resultObject.json();
            this.setState({
                movies: movies.results
            });
        } catch(err) {
            console.log(err);
        }


    }

    render () {

        console.log(this.state.movies);

        let movieItems = this.state.movies.map((movie, i) => {

            return <Link to={`/${movie.id}`}  key={i}><MovieItem movie={movie} imageUrl={`${IMAGE_PATH}${movie.poster_path}`} key={i}/></Link>

        });

        return (

            <div>
                {movieItems}
            </div>

        )
    }

}


export default MoviesList;