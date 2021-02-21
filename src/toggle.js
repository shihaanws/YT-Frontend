import React, {Fragment} from "react";


const Toggle = (props)=> {
    return(
        <Fragment>
            <button id="toggle" onClick={props.click} >Toggler</button>
        </Fragment>
    )
}

export default Toggle;
