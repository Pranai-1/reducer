
import './App.css';
import Home from './Home';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import Signup from './components/Signup';
import { Provider } from 'react-redux';
import store from './store/reduxStore';
import NewsLetter from './components/Newsletter';

function App() {
  return (
   <>
   <Provider store={store}>
   <Router>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/letter" element={<NewsLetter/>}/>
    </Routes>
   </Router>
   </Provider>
   </>
  );
}

export default App;
