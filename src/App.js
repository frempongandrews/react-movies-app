import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import MovieItem from './components/MovieItem';




//https://api.themoviedb.org/3/discover/movie?api_key=a6a85fc7c5764779d7241a0d44c6ec24
let imagePath = 'https://image.tmdb.org/t/p/w300/';
class App extends Component {

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

            return <MovieItem movie={movie} imageUrl={imagePath + movie.poster_path} key={i}/>

        });

        return (

            <div className='App'>

                <header className='App-header'>
                    <img src={logo} className='App-logo' alt='logo'/>
                    <h2 className='App-title'>My Movies</h2>
                </header>

                {movieItems}

            </div>
        )
    }

}


export default App;
