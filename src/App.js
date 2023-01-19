import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/routes/Home';
import Navigation from './components/routes/navigation/Navigation';

const Shop = () => {
  return <h2>I am the shop page</h2>;
};
const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Navigation />}>
            <Route index element={<Home />} />
            <Route path='/shop' element={<Shop />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
