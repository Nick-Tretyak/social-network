import './App.css';
import NavBar from './components/NavBar/NavBar';
import Header from './components/Header/Header';
import Dialogs from './components/Dialogs/Dialogs';
import Profile from './components/Profile/Profile';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import News from './components/News/News';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App(props) {
  return (
    <div className='app-wrapper'>
      <Header />
      <NavBar state={props.state.sideBar} />
      <div className='app-wrapper-content'>
        <Routes>
          <Route path='/profile/*' element={<Profile state={props.state.profilePage} dispatch={props.dispatch} />} />
          <Route path='/dialogs/*' element={<Dialogs state={props.state.dialogsPage} dispatch={props.dispatch} />} />
          <Route path='/news/*' element={<News />} />
          <Route path='/music/*' element={<Music />} />
          <Route path='/settings/*' element={<Settings />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
