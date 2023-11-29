import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import './App.css';
import Level1 from './components/context/Level1';
import AppRQ from './components/reactQuery/AppRQ';
import CompRed from './components/redux/clear/CompRed';
import CompSlice from './components/redux/slice/CompSlice';
import store from './components/redux/store';
import Comp1, { Comp2 } from './components/training/Comp1';
import App1 from './components/training2/App1';
import Counter from './components/useReducer/Counter';
import Nav from './navigation/Nav';
import Main from './wrapper/Main';


function App() {

  return (
  <Provider store={store}>
      <Router>
      <div className="App">
        <Nav/>
        <Routes>
          <Route path='/context' element={<Level1/>}/>
          <Route path='/counter' element={<Counter/>}/>
          <Route path='/reduxclear' element={<CompRed/>}/>
          <Route path='/reduxslice' element={<CompSlice/>}/>
          <Route path='/wrapper' element={<Main/>}/>
          <Route path='/training2' element={<App1/>}/>
          <Route path='/reactquery' element={<AppRQ/>}/>
        </Routes>
        {/* <Comp1/> */}
        {/* <Comp2/> */}
      </div>
    </Router>
  </Provider>
    
  );
}

export default App;
