import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home';
import CarouselPage from './CarouselPage';

function App() {
  return (
    <Router>
      <div className="app">
        <Route path="/" exact component={Home} />
        <Route path="/gallery" component={CarouselPage} />
      </div>
    </Router>
  );
}
export default App;
