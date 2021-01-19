import './App.css';
import Dice from './Dice'

function App() {
  return (
    <div className="App">
      <Dice numDice={4} maxVal={6} />
      <Dice title='Roll Me' />
    </div>
  );
}

export default App;
