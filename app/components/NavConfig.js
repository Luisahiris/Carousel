import React from "react";
import PropTypes from 'prop-types'

class SpeedInput extends React.Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired
  }
  state = {
    input: null
  }
  handleSumit = () => {
    this.props.onSubmit(this.state.input)
  }
  handleChange = (event) => {
    this.setState({input: event.target.value})
  }
  render () {
    return (
      <form onSubmit={this.handleSumit}>
        <label htmlFor='speed'>Speed</label>
        <input 
          type='text' 
          id='speed' 
          placeholder=' milliseconds' 
          value={this.state.speed}
          autoComplete='off' 
          onChange={this.handleChange}
        />
        <button type='submit' className='submit' disabled={!this.state.input}>Sumit</button>
      </form>
    );
  }
}

export default class NavConfig extends React.Component {
  static propTypes = {
    children: PropTypes.func
  }
  state = {
    display: '',
    speed: undefined
  }
  toggleAuto = () => {
    this.setState(({ display }) => ({
      display: display === '' ? 'automatic' : ''
    }))
  }
  toggleSpeed = (speed) => {
    this.setState({
      speed
    })
  }
  close = () => {
    this.setState({
      speed: undefined
    })
  }
  render () {
    return (
      <React.Fragment>
        <ul className='row bg-white'>
          <li className='row'>
                Auto
            <div 
              className={`barra ${this.state.display}`} 
            >
              <i 
                className="fas fa-circle"
                onClick={() => this.toggleAuto()}
              ></i>
            </div>
          </li>
          {this.state.display === 'automatic' &&
            <li className='row'>
              {this.state.speed === undefined
                ? <SpeedInput onSubmit={this.toggleSpeed} />
                : <div className='card'>
                  {this.state.speed}
                  <i className="fas fa-times" onClick={() => this.close()}></i>
                </div>
              }
            </li>
          }
        </ul>
        {this.props.children(parseInt(this.state.speed), this.state.display)}
      </React.Fragment>
    );
  }
}