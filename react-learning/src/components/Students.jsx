// props = read-only properties that are shared between components
//         A parent component can send data to a Children
//         <Component key=value />

// PropTypes = a mechanism that ensures that passed value is of correct
//             datatype.
//             age: PropTypes.number

import PropTypes from "prop-types";
//default props
function Students({name = "guest", age = 0, isStudent = false})
{
    // Inline css
    const student = {
        padding: "10px",
        border: "1px solid hsla(0, 0%, 50%, 0.8)",
        fontSize: "2rem",
        fontFamily:"Arial, sans-serif",
    };
    const p = {
        margin: "0",
    }
    return(
        <div style={student}>
            <p style={p}>Name: {name}</p>
            <p>Age: {age}</p>
            {/* Boolean do not directly can be shown on page */}
            <p>Student: {isStudent ? "Yes" : "No"}</p>
        </div>
    )
}

Students.PropTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool,
}


export default Students;