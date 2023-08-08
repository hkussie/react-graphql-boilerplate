import '../App.css';
import DisplayData from '../hooks/fetchData';

function App() {
  return (
    <div>
      <h2>
        My first Apollo app
        <span role="img" aria-label="rocket">
          🚀
        </span>
      </h2>
      <br />
      <DisplayData />
    </div>
  )
}

export default App;