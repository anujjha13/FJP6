import React from "react"

function ChildC({fname,lname}){
    return(
        <div>
            <h1>This is child C</h1>
            <h1>{fname}</h1>
            <h1>{lname}</h1>
        </div>
    )
}

export default ChildC