import React from "react";

class BouncyLink extends React.Component {
  state = {
    transX: this.props.transX ?? 0,
    transY: this.props.transY ?? 0,
    speed: this.props.speed ?? Math.sqrt(2),
    directionX: this.props.directionX ?? 'right',
    directionY: this.props.directionY ?? 'down',
  };

  linkRef = React.createRef();

  componentDidMount() {
    // set initial deltaX and deltaY (deltaX is at most the total speed; deltaY is the remained)
    this.state.deltaX=this.getRandomFloat(0, Math.sqrt(this.state.speed), 2)
    this.state.deltaY=Math.sqrt(Math.pow(Math.sqrt(this.state.speed), 2) - Math.pow(this.state.deltaX, 2))

    // set interval to update displacement every 4 ms
    this.intervalId = setInterval(() => {
      this.setState({
        transX: this.state.transX + this.state.deltaX,
        transY: this.state.transY + this.state.deltaY,
      });
    }, 4);
  }

  getRandomFloat(min, max, decimals) {
    const str = (Math.random() * (max - min) + min).toFixed(decimals);
  
    return parseFloat(str);
  }

  handleDirection(topBound, rightBound, bottomBound, leftBound) {
    // get the bounding rectangle for the current <a> element
    const boundingRect = this.linkRef.current.getBoundingClientRect();
    const { top, right, left, bottom } = boundingRect;

    if (this.state.directionX === 'right') {
      if (right >= rightBound) {
        this.setState({
          deltaX: this.state.deltaX * -1,
          directionX: 'left',
        });
      }
    }
    if (this.state.directionX === 'left') {
      if (left <= leftBound) {
        this.setState({
          deltaX: this.state.deltaX * -1,
          directionX: 'right',
        });
      }
    }
    if (this.state.directionY === 'down') {
      if (bottom >= bottomBound) {
        this.setState({
          deltaY: this.state.deltaY * -1,
          directionY: 'up',
        });
      }
    }
    if (this.state.directionY === 'up') {
      if (top <= topBound) {
        this.setState({
          deltaY: this.state.deltaY * -1,
          directionY: 'down',
        });
      }
    }
  }

  componentDidUpdate() {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    this.handleDirection(0, screenWidth - this.state.deltaX, screenHeight, this.state.deltaY, 0);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    return (
      <div
        ref={this.linkRef}
        className="bouncy-link"
        style={{
          transform: `translate(${this.state.transX}px, ${this.state.transY}px)`,
        }}
      >
        {this.props.children}
      </div>
    );
  }
}

export default BouncyLink;
