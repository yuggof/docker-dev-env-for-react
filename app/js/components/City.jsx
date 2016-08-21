import React from 'react'
import { connect } from 'react-redux'

const City = ({ city, cities }) => {
  return (
    <div className="panel panel-primary">
      <div className="panel-body">
        <h4>{city.name} ({city.numberOfCitizens} citizens)</h4>
        Transfer
        <input className="form-control" style={{display: 'inline-block', width: 150, marginLeft: 5, marginRight: 5}}/>
        citizens to
        <select className="form-control" style={{display: 'inline-block', width: 150, marginLeft: 5}}>
          <option></option>
          {cities.filter(c => c != city).map(c =>
            <option>{c.name}</option>
          )}
        </select>
      </div>
    </div>
  )
}

export default connect(state => ({cities: state.cities}))(City)
