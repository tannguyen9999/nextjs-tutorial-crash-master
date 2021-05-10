import React from 'react';
import ReactDOM from 'react-dom';
import Draggable from 'react-draggable';
 
class App extends React.Component {
 
  eventLogger = (e, data) => {
    console.log('Event: ', e);
    console.log('Data: ', data);
  };
 
  render() {
    return (
      <Draggable
        axis="x"
        handle=".handle"
        // defaultPosition={{x: 10, y: 10}}
        position={null}
        grid={[25, 25]}
        scale={1}
        onStart={this.handleStart}
        onDrag={this.handleDrag}
        onStop={this.handleStop}
        >
        <div>
          <div className="handle">Drag from here</div>
          <div>This readme is really dragging on...</div>
        </div>
      </Draggable>
    );
  }
}
 
export default App