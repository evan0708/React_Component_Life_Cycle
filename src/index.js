import React from 'react';
import ReactDOM from 'react-dom';

class Counter extends React.Component {
  constructor(props) {
    console.log(`${props.name} constructor`);
    super(props);
    this.state = { count: 0}
    this.onClickBtn = this.onClickBtn.bind(this);
  }
  // Mount
  componentWillMount() {
    console.log(`${this.props.name} componentWillMount`);
  }
  componentDidMount() {
    console.log(`${this.props.name} componentDidMount`);
  }
  componentWillUnmount() {
    console.log(`${this.props.name} componentWillUnmount`); 
  }

  // Update
  componentWillReceiveProps() {
    console.log(`${this.props.name} componentWillReceiveProps state.count = ${this.state.count}`)
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log(`${this.props.name} shouldComponentUpdate nextState.count = ${nextState.count}`)
    console.log(`${this.props.name} shouldComponentUpdate this.state.count = ${this.state.count}`)
    return true;//nextState.count >= 3;
  }
  componentWillUpdate(nextProps, nextState) {
    console.log(`${this.props.name} componentWillUpdate state.count = ${this.state.count}`)
  }
  componentDidUpdate() {
    console.log(`${this.props.name} componentDidUpdate state.count = ${this.state.count}`)
  }
  onClickBtn() {
    this.setState(prevState => { 
      console.log('to increase by 1');
      return { count: prevState.count + 1 };
    });
  }
  render() {
    console.log(`${this.props.name} render`);
    const btnStyle = { 
      fontSize: this.props.isLargeSize ? '30px' : '14px', 
      color: this.state.count >= 3 ? 'red' : 'black'
    };
    return (
      <button style={btnStyle} onClick={this.onClickBtn}>
        {`${this.props.name}: ${this.state.count}`}
      </button>
    );
  }
}

class App extends React.Component {
  constructor(props) {
    console.log(`${props.name} constructor`);
    super(props);
    this.state = { isBig: false };
    this.toggleSize = this.toggleSize.bind(this);
  }
  // Mount
  componentWillMount() {
    console.log(`${this.props.name} componentWillMount`);
  }
  componentDidMount() {
    console.log(`${this.props.name} componentDidMount`);
  }
  componentWillUnmount() {
    console.log(`${this.props.name} componentWillUnmount`);
  }

  // Update
  componentWillReceiveProps() {
    console.log(`${this.props.name} componentWillReceiveProps`)
  }
  shouldComponentUpdate() {
    console.log(`${this.props.name} shouldComponentUpdate`)
    return true;
  }
  componentWillUpdate() {
    console.log(`${this.props.name} componentWillUpdate`)
  }
  componentDidUpdate() {
    console.log(`${this.props.name} componentDidUpdate`)
  }
  toggleSize() {
    this.setState(prevState => {
      return { isBig : !prevState.isBig };
    });
  }
  render() {
    console.log(`${this.props.name} render`);
    return (
      <div>
        <div>This is App</div>
        <button onClick={this.toggleSize}>Toggle Font</button>
        <div>
          <Counter isLargeSize={this.state.isBig} name="LEFT"/>
          <Counter isLargeSize={this.state.isBig} name="RIGHT"/>
        </div>
      </div>
    );
  }
}
//Counter.defaultProps = {name: 'Evan app'};
ReactDOM.render(<App name="APP"/>, document.getElementById('root'))
//ReactDOM.render(<div>clean</div>, document.getElementById('root')) 


