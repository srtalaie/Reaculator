import React, { Component } from "react";
import ButtonsCard from "../components/ButtonsCard/ButtonsCard.js";

class Home extends Component {
    state = {
        numArr: [9, 8, 7, 6, 5, 4, 3, 2, 1, 0],
        numNamesArr: ['nine', 'eight', 'seven', 'six', 'five', 'four', 'three', 'two', 'one', 'zero']
    }

    render(){
        return(
            <div>
                <input type="text" id="display"></input>
                <div>
                    {this.state.numArr.map(number => {
                        let index = this.state.numArr.indexOf(number);
                        return (
                            <ButtonsCard 
                                value={number}
                                id={this.state.numNamesArr[index]}
                                key={number}
                            />
                        )
                    })}
                </div>
                <div>
                    <button id="add">+</button>
                    <button id="subtract">-</button>
                    <button id="multiply">*</button>
                    <button id="divide">/</button>
                    <button id="decimal">.</button>
                    <button id="equals">=</button>
                    <button id="clear">CLEAR</button>
                </div>
            </div>
    )}

}

export default Home;