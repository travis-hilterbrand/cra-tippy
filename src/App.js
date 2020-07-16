import React from 'react';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'

import './App.css';

const ShowDelay = [1000, 0];

const StringContent = () => (
  <Tippy content="Hello" delay={ShowDelay}>
    <button>My button</button>
  </Tippy>
);
const JSXContent = () => (
  <Tippy content={<span>Tooltip</span>} placement={'top'} delay={ShowDelay}>
    <button>My button</button>
  </Tippy>
);
class DynamicContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    this.onInterval = this.onInterval.bind(this);
  }
  onInterval() {
    this.setState({ count: this.state.count + 1 });
  }
  componentDidMount() {
    this.timerId = setInterval(this.onInterval, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timerId);
  }
  render() {
    return (
      <Tippy content={'Dynamic ' + this.state.count} placement={'top'} delay={ShowDelay}>
        <button>Dynamic</button>
      </Tippy>
    );
  }
}

function App() {
  return (
    <div className="App">
      <StringContent />
      <JSXContent />
      <div style={{ height: 200 }} />
      <StringContent />
      <JSXContent />
      <DynamicContent />
    </div>
  );
}

export default App;
