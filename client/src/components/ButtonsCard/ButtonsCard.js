import React from "react";

const ButtonsCard = ({ value, id }) => {
    return(
        <button data-value={value} key={value}>{value}</button>
    )
}

export default ButtonsCard;