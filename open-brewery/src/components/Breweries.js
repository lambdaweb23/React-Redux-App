import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchBreweries } from '../actions';
import Brewery from './Brewery';

const Breweries = props => {
    useEffect(() => {
        props.fetchBreweries();
    }, [])

    if (props.isFetching) {
        // usually a spinner (react-loader-spinner)
        return <h2>Loading Cat Facts...</h2>;
    }

    return (
        <div>
            {props.error && <p>{props.error}</p>}
            {props.breweries.map(brewery => (
                <Brewery key={brewery._id} brewery={brewery} />
            ))}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        breweries: state.breweries,
        isFetching: state.isFetching,
        error: state.error
    }
}

export default connect(
    mapStateToProps,
    { fetchBreweries }
)(Breweries);