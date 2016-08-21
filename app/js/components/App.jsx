import React from 'react'
import { connect } from 'react-redux'
import AddCityForm from './AddCityForm.jsx'
import CitiesList from './CitiesList.jsx'

const App = ({ cities }) => (
  <div>
    <AddCityForm/>
    <CitiesList/>
  </div>
)

export default connect(state => state)(App)
