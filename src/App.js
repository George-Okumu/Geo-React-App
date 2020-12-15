import React, {Component} from 'react'
import Table from './Table'
import './App'

class App extends React.Component {
    render() {
      return (
        <div className="App">
          <h1>Hello, Welcome to Geo-App where we record students perfomance.</h1>

          <div classname="container">
              <Table />
          </div>
        </div>

        
      )
    }
  }

  export default App