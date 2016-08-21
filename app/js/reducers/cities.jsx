export default (state = [], action) => {
  switch(action.type) {
    case 'ADD_CITY':
      return [
        {
          name: action.name,
          numberOfCitizens: action.numberOfCitizens
        },
        ...state
      ]
    case 'TRANSFER_CITIZENS':
      return state.map(c => {
        if(c == action.from) {
          return {
            name: c.name,
            numberOfCitizens: c.numberOfCitizens - action.numberOfCitizens
          }
        }
        else if(c == action.to) {
          return {
            name: c.name,
            numberOfCitizens: c.numberOfCitizens + action.numberOfCitizens
          }
        }
        else {
          return c
        }
      })
    default:
      return state
  }
}
