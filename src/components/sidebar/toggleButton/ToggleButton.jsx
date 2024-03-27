import React from "react"
import "../../sidebar/sidebar.scss"

const ToggleButton = ({setOpen}) => {
    return (
        <button onClick = {() => setOpen((prev) => !prev)} >

        </button>
    )
}

export default ToggleButton