import React from 'react'
import { connect } from 'react-redux'

const CitiesList = ({ cities }) => {
  return (
    <div className="row">
      {cities.map((c, i) =>
        <div key={i} className="col-xs-4">
          <div className="panel panel-primary">
            <div className="panel-body">
              {JSON.stringify(c)}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default connect(state => ({cities: state.cities}))(CitiesList)
