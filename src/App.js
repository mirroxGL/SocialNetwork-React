import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { Router, Routes, BrowserRouter, Route } from 'react-router-dom';
import ProfileContainer from './components/Profile/ProfileContainer';


const App = (props) => {
  let state = props.store.getState()
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className='app-content-wrapper'>
          <Routes>
            <Route path='/profile' element={<ProfileContainer store={props.store} />} />
            <Route path='/dialogs' element={<Dialogs dialogs={state.dialogs.dialogsData}
              messages={state.dialogs.messagesData}
              dispatch={props.store.dispatch}
              newMessageText={state.dialogs.newMessageText} />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter >
  );
}

export default App;
