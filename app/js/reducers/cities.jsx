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
    default:
      return state
  }
}
