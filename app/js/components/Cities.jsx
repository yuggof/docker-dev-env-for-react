import React from 'react'
import { connect } from 'react-redux'
import City from './City.jsx'

const Cities = ({ cities }) => {
  return (
    <div className="row">
      {cities.map((c, i) =>
        <div key={i} className="col-xs-6">
          <City city={c}/>
        </div>
      )}
    </div>
  )
}

export default connect(state => ({cities: state.cities}))(Cities)
