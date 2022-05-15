import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Routes,
  Route,
} from "react-router-dom";
import Home from './Pages/Home'
import Book from './Pages/Book'
import Rates from './Pages/Rates'
import Tutorials from './Pages/Tutorials'
import Lessons from './Pages/Lessons'
import Events from './Pages/Events'
import Slider from './components/Slider';

function App() {
  return (
    <div className="App">
      
      <Slider />
        <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="book" element={<Book />}></Route>
      <Route path="rates" element={<Rates />}></Route>
      <Route path="tutorials" element={<Tutorials />}></Route>
      <Route path="lessons" element={<Lessons />}></Route>
      <Route path="events" element={<Events />}></Route>
    </Routes>
    </div>
  );
}

export default App;
