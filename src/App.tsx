import './App.css';
import useDragger from './useDragger';

function App() {
  useDragger('child-box');

  return (
    <main>
      <div className="container">
        <div id="child-box" className="box"></div>
      </div>
    </main>
  );
}

export default App;
