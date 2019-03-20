import React from "react";

const ButtonsCard = ({ value, id, onClick }) => {
    return(
        <button data-value={value} key={value} onClick={onClick}>{value}</button>
    )
}

export default ButtonsCard;