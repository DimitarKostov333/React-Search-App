import React, {useState} from 'react';
import data from "../moviesData";

const MovieCards = () => {

    // Set the state
    const [filter, setFilter] = useState('');
    const [switchToggle, setSwitchToggle] = useState(false);

    const toggleSwitch = () => {
        switchToggle ? setSwitchToggle(false) :  setSwitchToggle(true);

        console.log(switchToggle);
    }

    // Parse text event
    const searchText = (event) => {
        setFilter(event.target.value);
    }

    // Convert string to lower case and filter it
    let dataSearch = data.movieData.filter(item => {
        return Object.keys(item).some(key => item[key].toString().toLowerCase().includes(filter.toString().toLowerCase()));
    });

    return(
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8 m-5">
                    <div className="input-group ">
                        <input type="text" className="form-control" placeholder="Search movies"
                                            value={filter} onChange={searchText.bind(this)} />

                        <div className="input-group-append">
                            <button className="btn btn-warning" type="button" onClick={ toggleSwitch }>Toggle List/Grid View</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                {dataSearch.map((item, index) =>{
                    return (
                        <div className={switchToggle ? "col-md-3" : "col-md-12"} key={index}>
                            <div className="card">
                                <img className="img-fluid" src={ item.posterurl } />
                                <div className="card-body">
                                    <h3 className="card-title">{ item.title }</h3>
                                </div>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">IMDB Rating: { !item.imdbRating ? "N/A" : item.imdbRating }</li>
                                </ul>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item" >Cast: { item.actors.map(actor => actor + ", ") }</li>
                                </ul>
                                <div className="card-body">
                                    <a href="#" className="card-link">Read More</a>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default MovieCards;

