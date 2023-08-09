import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import CreateDowntime from './Components/create-downtime.component';
import ReadDowntime from './Components/read-downtime.component';


function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Read Downtime</Link>
            </li>
            <li>
              <Link to="/create-downtime">Create Downtime</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/read-downtime" element={<ReadDowntime />} />
          <Route path="/create-downtime" element={<CreateDowntime />} />
        </Routes>
      </div>
    </Router>

  )
}

export default App;
