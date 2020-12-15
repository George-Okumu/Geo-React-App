import React, {Component} from 'react'
import Table from './Table'

class App extends React.Component {
    render() {
      return (
        <div className="App">
          <h1>Hello, Welcome to George App where you add what you do.</h1>

          <div classname="container">
              <Table />
          </div>
        </div>

        
      )
    }
  }

  export default App