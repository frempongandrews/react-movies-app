import React, { Component } from 'react';

const IMAGE_PATH = 'https://image.tmdb.org/t/p/w300';
const FEATURE_IMAGE_PATH = 'https://image.tmdb.org/t/p/w1280';


export default class MovieDetail extends Component {

    state = {

        movie: {}
    };

    async componentDidMount () {

        try {
            const res = await fetch(`https://api.themoviedb.org/3/movie/${this.props.match.params.movieId}?api_key=a6a85fc7c5764779d7241a0d44c6ec24`);

            const movie = await res.json();

            this.setState({
                movie
            })

            } catch (err) {
                console.log(err);
            }

        }

    render () {

        const {movie} = this.state;
        console.log(movie.backdrop_path);
        return (

            <div className='movie-detail-container movie-detail'>
                <header>

                    <img className='feature-image' src={`${FEATURE_IMAGE_PATH}${movie.backdrop_path}`}/>

                </header>

                <div className='content-info'>
                    <div className='poster-image-container'>
                         <img className='poster-image' src={`${IMAGE_PATH}${movie.poster_path}`}/>
                    </div>

                    <div className='movie-info'>
                        <h2 className='movie-title'>{ movie.title }</h2>
                        <p className='release-date'><span>Released</span>: {movie.release_date}</p>

                        <p>{ movie.overview }</p>
                    </div>
                </div>


            </div>
        )
    }
}