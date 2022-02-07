import {Component} from 'react'

import MyComponent from '../MyComponent'

import './index.css'

class RandomNumberGenerator extends Component {
  state = {randomNumber: 0}

  randomFunction = () => {
    this.setState({randomNumber: Math.floor(Math.random() * 101)})
  }

  render() {
    const {randomNumber} = this.state
    const {randomFunction} = this
    const myProps = {rn: randomNumber, rf: randomFunction}
    return <MyComponent myProps={myProps} />
  }
}

export default RandomNumberGenerator
