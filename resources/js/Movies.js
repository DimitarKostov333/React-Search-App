import React from 'react';
import ReactDOM from 'react-dom';
import MovieCards from './components/MovieCards';

function Movies()
{
    return (
        <div>
            <MovieCards />
        </div>
    );
}

export default Movies;

if (document.getElementById('movies'))
{
    // Render the virtual dom with the movie data
    ReactDOM.render(<Movies />, document.getElementById('movies'));
}
