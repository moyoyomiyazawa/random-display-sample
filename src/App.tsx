import './App.css';

function App() {
  return (
    <div className='App'>
      <p style={{ fontSize: '28px' }}>1/10ã§emojiðãè¡¨ç¤ºããã¾ã</p>
      {Math.random() < 0.1 && <p style={{ fontSize: '6rem' }}>ð</p>}
    </div>
  );
}

export default App;
