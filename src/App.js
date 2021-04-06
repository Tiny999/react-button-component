import './App.css';
import Button from './Button/Button';
import ButtonShowcase from './ButtonShowcase/ButtonShowcase';

function App() {
  return (
    <div className="App">
      <h1>Buttons</h1>
      <ButtonShowcase title="<Button />">
        <Button/>      
      </ButtonShowcase>
    </div>
  );
}

export default App;
