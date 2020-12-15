import React, {Component} from 'react'




// Introduction of Simple  components

const TableHeader = () => {

        return (
            <thead>
                <tr>
                    <th>Student</th>
                    <th>Grade/Marks</th>
                </tr>
            </thead>
        )

}

const TableBody = () => {
    return(
        <tbody>
        <tr>
          <td>Charlie</td>
          <td>B+</td>
        </tr>
        <tr>
          <td>Mac</td>
          <td>B</td>
        </tr>
        <tr>
          <td>Dee</td>
          <td>A</td>
        </tr>
        <tr>
          <td>Dennis</td>
          <td>B</td>
        </tr>
      </tbody>
    )
}

// Using class component to render TableHeader and TableBody
class Table extends Component {
    render () {
        return(
            <table>
                <TableHeader />
                <TableBody />
            </table>
        )
    }
}

export default Table