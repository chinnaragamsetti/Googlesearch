// Write your code here
SuggestionProfile = props => {
  const {eachsuggestion} = props
  const {id, suggestion} = eachsuggestion

  onSearch = () => {
    addSearch(suggestion)
  }
  return (
    <li className="listcontainer">
      <h1 className="h">{suggestion}</h1>
      <img
        alt="arrow"
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        className="arrow"
        onclick={onSearch}
      />
    </li>
  )
}

export default SuggestionProfile
