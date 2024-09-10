import './App.css';
import { Route, Routes, BrowserRouter} from "react-router-dom";
import Home from './components/Home/Home.jsx';
import MovieDetails from './components/MovieDetails/MovieDetails.jsx';

function App() {
  return (
      <div className='App'>
        <BrowserRouter basename="/movie-app-react">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<MovieDetails />} />
        </Routes>
      </BrowserRouter>
      </div>
  );
}

export default App;
