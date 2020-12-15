import React, {Component} from 'react'


// A class component must include render(), and the return can only return one parent element.
// Note that if the return is contained to one line, it does not need parentheses.

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