import './App.css';
import Dice from './Dice'
import ColoredCircles from './ColoredCircles1/ColoredCircles'
function App() {
  return (
    <div className="App">
      {/* <Dice numDice={4} maxVal={6} />
      <Dice title='Roll Me' /> */}
      <ColoredCircles />
    </div>
  );
}

export default App;
