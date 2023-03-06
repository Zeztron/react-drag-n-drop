import './App.css';
import SampleBox from './components/SampleBox';
import Draggable from './hoc/Draggable';

function App() {
  return (
    <main>
      <Draggable height={800} width={800} border>
        <SampleBox />
      </Draggable>
    </main>
  );
}

export default App;
