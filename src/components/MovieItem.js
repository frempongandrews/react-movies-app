// eslint-disable-next-line
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import imageNotAvailable from '../image-not-available.jpeg';


//functional component
//below: instead of getting all the props, we get only the parts
//we're interested in: props.imageUrl -> {imageUrl} and
//props.movie -> {movie} => Object destructuring
const MovieItem = ({imageUrl, movie}) => {

    return (

        <div className='movie-item-container'>

            <img src={imageUrl} alt={movie.title} className='movie-image'/>
            <h4 className='movie-title'>{movie.title}</h4>

        </div>

    )

};

MovieItem.propTypes = {
    movie: PropTypes.shape({
        title: PropTypes.string.isRequired
    }).isRequired,

    imageUrl: PropTypes.string
};

MovieItem.defaultProps = {
    imageUrl: imageNotAvailable
};

export default MovieItem;

