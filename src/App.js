import './App.css';
import Button from './shared/Button';
import Card from './shared/Card';

function App() {
  return (
    <div className='root-style'>
      <Card>
        <Button btnText="Fetch Movies"></Button>
      </Card>
    </div>
  );
}

export default App;
