import React from "react";
import { Link } from "react-router-dom";

class BouncyLink extends React.Component {
  state = {
    transX: 0,
    transY: 0,
    offsetX: 1,
    offsetY: 1,
    directionX: 'right',
    directionY: 'down',
  };

  linkRef = React.createRef();

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState({
        transX: this.state.transX + this.state.offsetX,
        transY: this.state.transY + this.state.offsetY,
      });
    }, 4);
  }

  handleDirection(topBound, rightBound, bottomBound, leftBound) {
    // get the bounding rectangle for the current <a> element
    const boundingRect = this.linkRef.current.getBoundingClientRect();
    const { top, right, left, bottom } = boundingRect;

    if (this.state.directionX === 'right') {
      if (right >= rightBound) {
        this.setState({
          offsetX: this.state.offsetX * -1,
          directionX: 'left',
        });
      }
    }
    if (this.state.directionX === 'left') {
      if (left <= leftBound) {
        this.setState({
          offsetX: this.state.offsetX * -1,
          directionX: 'right',
        });
      }
    }
    if (this.state.directionY === 'down') {
      if (bottom >= bottomBound) {
        this.setState({
          offsetY: this.state.offsetY * -1,
          directionY: 'up',
        });
      }
    }
    if (this.state.directionY === 'up') {
      if (top <= topBound) {
        this.setState({
          offsetY: this.state.offsetY * -1,
          directionY: 'down',
        });
      }
    }
  }

  componentDidUpdate() {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    this.handleDirection(0, screenWidth - this.state.offsetX, screenHeight, this.state.offsetY, 0);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    return (
      <Link
        ref={this.linkRef}
        className="bouncy-link"
        style={{
          transform: `translate(${this.state.transX}px, ${this.state.transY}px)`,
          padding: '30px',
        }}
        to={this.props.to}
      >
        {this.props.text}
      </Link>
    );
  }
}

export default BouncyLink;
