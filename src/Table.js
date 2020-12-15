import React, {Component} from 'react'

class Table extends Component{
    render (){
        return(
            <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Job</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>George</td>
                <td>Junior Dev</td>
              </tr>
              <tr>
                <td>Tom</td>
                <td>Painter</td>
              </tr>
              <tr>
                <td>Dee</td>
                <td>Aspiring actress</td>
              </tr>
              <tr>
                <td>Vivian</td>
                <td>Scholar</td>
              </tr>
            </tbody>
          </table>
        )
    }
}

export default Table