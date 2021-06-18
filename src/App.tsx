import './App.css';

function App() {
  return (
    <div className='App'>
      <p style={{ fontSize: '28px' }}>1/10でemoji🎉が表示されます</p>
      {Math.random() < 0.1 && <p style={{ fontSize: '6rem' }}>🎉</p>}
    </div>
  );
}

export default App;
