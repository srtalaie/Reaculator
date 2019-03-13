import React, { Component } from "react";
import ButtonsCard from "../components/ButtonsCard/ButtonsCard.js";

class Home extends Component {
    state = {
        numArr: [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]
    }

    render(){
        return(
            <div>
                <input type="text"></input>
                <div>
                    {this.state.numArr.map(number => {
                        return (
                            <ButtonsCard value={number}/>
                        )
                    })}
                </div>
                <div>
                    <button>+</button>
                    <button>-</button>
                    <button>*</button>
                    <button>/</button>
                    <button>=</button>
                </div>
            </div>
    )}

}

export default Home;