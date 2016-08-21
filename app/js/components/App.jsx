import React from 'react'
import { connect } from 'react-redux'
import AddCityForm from './AddCityForm.jsx'
import Cities from './Cities.jsx'

const App = ({ cities }) => (
  <div className="container">
    <AddCityForm/>
    <Cities/>
  </div>
)

export default connect(state => state)(App)
