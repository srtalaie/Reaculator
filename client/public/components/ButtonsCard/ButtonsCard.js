import React from "react";

const ButtonsCard = ({value}) => {
    return(
        <button data-value={value} key={value}>{value}</button>
    )
}

export default ButtonsCard;