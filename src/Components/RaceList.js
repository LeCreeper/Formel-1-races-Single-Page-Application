import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchRaces } from '../Actions/index'

class RaceList extends Component {

    componentDidMount() { this.props.fetchRaces() }

    //Denne funktion returner en ny liste med de elementer der hentes via det payload der fås gennem fetchRaces funktionen.
    renderList() {
        return this.props.races.map(race => {
            return (
                <div className="item" key={race.round}>
                    <h4>{race.raceName}
                    <small> City Name: {race.Circuit.Location.locality}, {race.Circuit.Location.country}</small></h4>

                </div>

            )

        })
    }

    
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-1"></div>
                        <div className="col-4">
                            <h1>F1 Races in 2019</h1>
                            <ul className="namelist">
                                {this.renderList()}
                            </ul>
                        </div>
                    <div className="col-7"></div>
                </div>
            </div>
        )
    }
        

}

//Denne funktion laver State om til en property.
const mapStateToProps = state => {
    return { races: state.races };


}

// Denne funktion forbinder componentens state med Store, ved at wrappe selve componenten i en ny Connect component.
// Derudover kaldes mapStateToProps som mapper staten til property, 
// samt kaldes mapDispatchToProps der mapper action creators til props, som begge forbindes til storen.
export default connect(mapStateToProps, {fetchRaces})(RaceList);