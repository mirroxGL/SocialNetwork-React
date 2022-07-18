import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { Router, Routes, BrowserRouter, Route } from 'react-router-dom';


const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className='app-content-wrapper'>
          <Routes>
            <Route path='/profile' element={<Profile posts={props.state.profile.postsData}
              profileData={props.state.profile.profileData}
              dispatch={props.dispatch}
              newPostText={props.state.profile.newPostText} />} />

            <Route path='/dialogs' element={<Dialogs dialogs={props.state.dialogs.dialogsData}
              messages={props.state.dialogs.messagesData}
              dispatch={props.dispatch}
              newMessageText={props.state.dialogs.newMessageText} />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter >
  );
}

export default App;
