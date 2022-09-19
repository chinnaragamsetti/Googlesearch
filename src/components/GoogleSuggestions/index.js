// Write your code here

// Write your code here

import {Component} from 'react'
import SuggestionProfile from '../components'
import './index.css'

class GoogleSuggestions extends Component {
  state = {searchInput: '', newSuggestionsList: suggestionsList}

  onChange = event => {
    const {searchInput, newSuggestionsList} = this.state
    this.setState({searchInput: event.target.value})
  }
  addSearch = suggestion => {
    const {searchInput, newSuggestionsList} = this.state
    this.setState({searchInput: suggestion})
  }

  render() {
    const {searchInput, newSuggestionsList} = this.state
    const {suggestionsList} = this.props
    const filteredlist = newSuggestionsList.filter(eachsuggestion =>
      eachsuggestion.suggestion.includes(searchInput),
    )

    return (
      <div className="mainbg">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png alt should be google logo"
          className="logo"
        />
        <div className="innerbg">
          <div className="inputcontainer">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png alt should be search icon"
              className="icon"
            />
            <input
              type="search"
              onChangeSearchinput={this.onChange}
              value={searchInput}
              placeholder="Search Google"
            />
          </div>
          <ul>
            {filteredlist.map(eachsuggestion => (
              <SuggestionProfile
                key={eachsuggestion.id}
                eachsuggestion={eachsuggestion}
                addSearch={this.addSearch}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
