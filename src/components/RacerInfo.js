import React, { Component } from 'react'

export default class RacerInfo extends Component {
    render() {
        const racer = this.props.racer;

        return (
            <tr>
                <td>{racer.position}</td>
                <td>{racer.Driver.givenName} {racer.Driver.familyName}</td>
                <td>{racer.points}</td>
                <td>{racer.wins}</td>
                <td>{racer.Driver.nationality}</td>
                <td>{racer.Constructors[0].nationality}</td>
            </tr>
        )
    }
}
