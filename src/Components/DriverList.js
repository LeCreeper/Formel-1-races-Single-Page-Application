import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchDrivers } from '../Actions/index'

class DriverList extends Component {

    
    componentDidMount() { this.props.fetchDrivers() }

    //Denne funktion returner en ny liste med de elementer der hentes via det payload der fås gennem fetchDrivers funktionen.
    renderList() {
        return this.props.drivers.map(driver => {
            return (
                <li className="item" key={driver.driverId}>
                    <h4>{driver.givenName} {driver.familyName}
                    <small> Born: {driver.dateOfBirth}, {driver.nationality}</small></h4>

                </li>

            )

        })
    }

    
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-1"></div>
                        <div className="col-4">
                            <h1>F1 Drivers in 2019</h1>
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
    return { drivers: state.drivers };


}

// Denne funktion forbinder componentens state med Store, ved at wrappe selve componenten i en ny Connect component.
// Derudover kaldes mapStateToProps som mapper staten til property, 
// samt kaldes mapDispatchToProps der mapper action creators til props, som begge forbindes til storen.
export default connect(mapStateToProps, {fetchDrivers})(DriverList);
