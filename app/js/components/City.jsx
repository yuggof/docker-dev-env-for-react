import React from 'react'
import { connect } from 'react-redux'

const City = ({ city, cities }) => {
  let numberOfCitizensInput, destinationCitySelect

  const sendCitizens = () => {
    if(numberOfCitizensInput.value && destinationCitySelect.value) {
      dispatch({
      })
    }
  }

  return (
    <div className="panel panel-primary">
      <div className="panel-heading">
        {city.name} ({city.numberOfCitizens} citizens)
      </div>
      <div className="panel-body">
        <div className="form-group">
          <div className="row">
            <div className="col-xs-2 text-center" style={{lineHeight: '34px'}}>
              Transfer
            </div>

            <div className="col-xs-3">
              <input ref={noci => { numberOfCitizensInput = noci }} type="number" className="form-control"/>
            </div>

            <div className="col-xs-3 text-center" style={{lineHeight: '34px'}}>
              citizens to
            </div>

            <div className="col-xs-4">
              <select ref={dcs => { destinationCitySelect = dcs }} className="form-control">
                <option></option>
                {cities.filter(c => c != city).map((c, i) =>
                  <option key={i} value={i}>{c.name}</option>
                )}
              </select>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12">
            <button onClick={sendCitizens} className="btn btn-primary">Send citizens</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default connect(state => ({cities: state.cities}))(City)
