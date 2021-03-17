import React, { Component } from 'react';
import learnSymbol from './data.js'
import Cell from './Cell.js'
import ColorSelector from './ColorSelector.js'

export default class Matrix extends Component {

  constructor() {
    super() 
    this.state = {
      selectedColor: '#FFF'
    }
  }
  //the initial state is set to white (FFF)


  setSelectedColor = (newColor) => {
    this.setState({
      selectedColor: newColor
    })
  }

//1.) we then make a method that will change the default state
//this method updates selectedColor with whatever is passed 
//to this method as a arument.

  genRow = (vals) => (
    vals.map((val, idx) => <Cell key={idx} color={val} selectedColor={this.state.selectedColor} />)
  )
  //3.) Cell only needs to know about the selected color so
  //we pass it in as a prop that is called selectedColor
  //which has the initially set color from above

  genMatrix = () => (
    this.props.values.map((rowVals, idx) => <div key={idx} className="row">{this.genRow(rowVals)}</div>)
  )

  render() {
    return (
      <div id="app">
        <ColorSelector setSelectedColor={this.setSelectedColor} />
        <div id="matrix">
          {this.genMatrix()}
        </div>
      </div>
    )
  }
  //2.) we then need ColorSelector to have access to setSelectedColor
  //so we pass it in as a prop that is called setSelectedColor

}




Matrix.defaultProps = {
  values: learnSymbol
}