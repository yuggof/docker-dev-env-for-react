import React from 'react'
import { connect } from 'react-redux'

const AddCityForm = ({ dispatch }) => {
  let nameInput, numberOfCitizensInput

  const addCity = () => {
    if(nameInput.value && numberOfCitizensInput.value) {
      dispatch({
        type: 'ADD_CITY',
        name: nameInput.value,
        numberOfCitizens: parseInt(numberOfCitizensInput.value)
      })

      nameInput.value = ''
      numberOfCitizensInput.value = ''
    }
  }

  return (
    <div>
      <div className="form-group">
        <input ref={ni => { nameInput = ni }} className="form-control" placeholder="Enter name..."/>
      </div>
      <div className="form-group">
        <input ref={noci => { numberOfCitizensInput = noci }} type="number"
          className="form-control" placeholder="Enter number of citizens..."/>
      </div>
      <button onClick={addCity} className="btn btn-primary">Add city</button>
    </div>
  )
}

export default connect()(AddCityForm)
