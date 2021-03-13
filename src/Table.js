import React, {Component} from 'react'


// A class component must include render(), and the return can only return one parent element.
// Note that if the return is contained to one line, it does not need parentheses.

// Introduction of Simple  components

const TableHeader = () => {

        return (
            <thead />
        )

}

const TableBody = (props) => {
    const rows = props.studentsMarks.map((row, index) => {
      return (
        //   use Key everytime when making lists in React
        <tr key={index}>
          <td>{row.name}</td>
          <td>{row.grade}</td>
        </tr>
      )
    })
  
    return <tbody>{rows}</tbody>
  }


// Using class component to render TableHeader and TableBody
class Table extends Component {
    render () {
        // Accessing stiudentsGrade Data here

        const {studentsMarks}  = this.props

        return(
            <table>
                <TableHeader />
                <TableBody studentsMarks={studentsMarks}/>
            </table>
        )
    }
}

export default Table