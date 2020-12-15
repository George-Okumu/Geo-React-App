import React, {Component} from 'react'


// A class component must include render(), and the return can only return one parent element.
// Note that if the return is contained to one line, it does not need parentheses.

// Introduction of Simple  components

const TableHeader = () => {

        return (
            <thead />
        )

}

const TableBody = () => {
    return(
        <tbody />
    )
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