import React, { Component } from "react";
import ButtonsCard from "../components/ButtonsCard/ButtonsCard.js";
import { connect } from 'react-redux';
import { addElement, clear, equals } from '../actions/index.js';

class Home extends Component {
    state = {
        numArr: [9, 8, 7, 6, 5, 4, 3, 2, 1, 0],
        numNamesArr: ['nine', 'eight', 'seven', 'six', 'five', 'four', 'three', 'two', 'one', 'zero'],
        input: ''
    }

    onchange = (event) => {
        this.setState({ input: event.target.value })
    }

    render(){
        const { getInput, clear, equals } = this.props;
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

const mapDispatchToProps = (dispatch) => {
    return({
        getInput: getInput => dispatch(addElement),
        equals: equals => dispatch(equals),
        clear: clear => dispatch(clear)
    })
  }

const mapStateToProps = state => ({
    state: [...state]
});
export default connect(mapDispatchToProps, mapStateToProps)(Home);