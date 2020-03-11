import React from "react";
import {AutoConsumer} from "../context/auto";
import PropTypes from 'prop-types'

export default class Carousel extends React.Component {
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
      auto: ""
    };
    before = () => {
      this.setState(({current, before}) => ({
        current: before,
        before: before === 0 ? 5 : before - 1,
        after: current
      }));
    };
    after = () => {
      this.setState(({current, after}) => ({
        current: after,
        before: current,
        after: after === 5 ? 0 : after + 1
      }));
    };
    imageAside = (i, className="side") => {
      return (
        <li key={i} onClick={() => this.setState({current: i, before: i === 0 ? 5 : i -1, after: i === 5 ? 0 : i +1})} className={className}>
          <img src={`app\\img\\${this.images[i]}.jpg`} />
        </li>
      );
    };
    onPause = () => {

    };
    render () {
      return (
        <AutoConsumer>
          {({automatic}) => (
            <div className='base'>
              <div className='container'>
                <div className={automatic === true ? "nodisplay" : ""}>
                  <button className='b' onClick={this.before}><i className="fas fa-arrow-left"></i></button>
                  <button className='a' onClick={this.after}><i className="fas fa-arrow-right"></i></button>
                </div>
                {automatic === true && (
                  <button className={this.state.auto === "" ? "play" : "pause"}>{
                    this.state.auto === "" 
                      ? <i className="far fa-play-circle" onClick={() => this.setState({auto: setInterval(() => { this.after(); }, this.props.speed)})}></i>
                      : <i className="far fa-pause-circle" onClick={() => this.setState({
                        auto: ""
                      }, clearInterval(this.state.auto))}></i>
                  }</button>
                )}
                {automatic === false && this.state.auto !== "" && clearInterval(this.state.auto) && this.setState({auto: ""})}
                <img src={`app\\img\\${this.images[this.state.current]}.jpg`} className='image' />
                <div className='aside'>
                  <ul>
                    {this.imageAside(this.state.before)}
                    {this.imageAside(this.state.current, "current")}
                    {this.imageAside(this.state.after)}
                  </ul>
                </div>
              </div>
            </div>
          )}
        </AutoConsumer>
      );
    }
}

Carousel.propTypes = {
  speed: PropTypes.string.isRequired
}