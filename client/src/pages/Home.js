import React, { Component } from "react";
import ButtonsCard from "../components/ButtonsCard/ButtonsCard.js";
import { connect } from 'react-redux';
import { store } from '../store/index';
import { addElement, clear, equals } from '../actions/index.js';

const wrapperDiv = {
    display: 'flex',
    margin: '4vh auto'
}

const outerDivStyle = {
    display: 'inline-block',
    margin: 'auto',
    border: '2px solid black',
}

const rowStyle = {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    margin: '10px'
}

const displayStyle = {
    marginBottom: '10px'
}

const buttonsStyle = {
    display: 'flex',
    flexWrap: 'wrap',
}

const buttonStyle = {
    display: 'flex',
    alignContent: 'space-between'
}

class Home extends Component {
    state = {
        numArr: [9, 8, 7, 6, 5, 4, 3, 2, 1, 0],
        numNamesArr: ['nine', 'eight', 'seven', 'six', 'five', 'four', 'three', 'two', 'one', 'zero'],
    }

    render(){
        const { addElem, clear, submit, value } = this.props;
        let display;

        if(value === ''){
            display = <input type="text" id="display" value='0' />
        }else{
           display = <input type="text" id="display" value={value} />
        }
        return(
            <div style={wrapperDiv}>
                <div style={outerDivStyle}>
                    <div style={rowStyle}>
                        <div style={displayStyle}>
                            {display}
                        </div>
                        <div style={buttonsStyle}>
                            {this.state.numArr.map(number => {
                                let index = this.state.numArr.indexOf(number);
                                return (
                                    <ButtonsCard 
                                        value={number}
                                        id={this.state.numNamesArr[index]}
                                        key={number}
                                        onClick={addElem.bind(this, number)}
                                        style={buttonStyle}
                                    />
                                )
                            })}
                        </div>
                        <div>
                            <button id="add" onClick={addElem.bind(this, '+')}>+</button>
                            <button id="subtract" onClick={addElem.bind(this, '-')}>-</button>
                            <button id="multiply" onClick={addElem.bind(this, '*')}>*</button>
                            <button id="divide" onClick={addElem.bind(this, '/')}>/</button>
                            <button id="decimal" onClick={addElem.bind(this, '.')}>.</button>
                            <button id="equals" onClick={submit.bind(this)}>=</button>
                            <button id="clear" onClick={clear.bind(this)}>CLEAR</button>
                        </div>
                    </div>
                </div>
            </div>
    )}

}

const mapStateToProps = (state) => {
    return{
        value: state.reducer.value
    }
};

const mapDispatchToProps = dispatch => {
    return({
        addElem: number => dispatch(addElement(number)),
        submit: () => dispatch(equals()),
        clear: () => dispatch(clear()),
    })
  }

export default connect(mapStateToProps, mapDispatchToProps)(Home);