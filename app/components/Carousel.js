import React from "react";
import PropTypes from 'prop-types'

export default class Carousel extends React.Component {
  static propTypes = {
    display: PropTypes.string.isRequired,
    speed: PropTypes.number
  }
  // static defaultProps = {
  //   speed: 3000
  // }
  images = [
    "corgi-3",
    "corgi-4",
    "corgi-5",
    "corgi-6",
    "corgi-9",
    "corgi-10"
  ];
  state = {
    current: 0,
    before: 5,
    after: 1,
    auto: ''
  };
  handleState = (current) => {
    this.setState({
      current,
      before: current === 0 ? 5 : current - 1,
      after: current === 5 ? 0 : current + 1
    })
    console.log(this.state.after)
  }
  imageAside = (i, className="side") => {
    return (
      <li 
        key={i} 
        onClick={() => this.handleState(i)}
        className={className}
      >
        <img src={`app\\img\\${this.images[i]}.jpg`} />
      </li>
    );
  };
  onPause = () => {

  };
  render () {
    return (
      <div className='base'>
        <div className='container'>
          <div className={this.props.display === 'automatic' ? "nodisplay" : ""}>
            <button 
              className='b' 
              onClick={() => this.handleState(this.state.before)}
            >
              <i className="fas fa-arrow-left"></i>
            </button>
            <button 
              className='a' 
              onClick={() => this.handleState(this.state.after)}
            >
              <i className="fas fa-arrow-right"></i>
            </button>
          </div>
          {this.props.display === 'automatic' && (
            <button className={this.state.auto === "" ? "play" : "pause"}>{
              this.state.auto === "" 
                ? <i 
                  className="far fa-play-circle" 
                  onClick={() => this.setState({
                    auto: setInterval(() => { 
                      this.handleState(this.state.after);
                    }, this.props.speed || 3000)
                  })}></i>
                : <i 
                  className="far fa-pause-circle" 
                  onClick={() => this.setState({
                    auto: ""
                  }, clearInterval(this.state.auto))}></i>
            }</button> 
          )}
          {
            this.props.display !== 'automatic' && 
            this.state.auto !== "" && 
            clearInterval(this.state.auto) && 
            this.setState({auto: ""})
          }

          <img 
            src={`app\\img\\${this.images[this.state.current]}.jpg`}
            className='image'
          />
          <div className='aside'>
            <ul>
              {this.imageAside(this.state.before)}
              {this.imageAside(this.state.current, "current")}
              {this.imageAside(this.state.after)}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
