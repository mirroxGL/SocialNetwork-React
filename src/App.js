import './App.css';
import {compose} from 'redux'
import Navbar from './components/Navbar/Navbar';
import {Navigate, Route, Routes} from 'react-router-dom';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import {connect} from 'react-redux';
import {initializeApp} from './redux/app-reducer';
import Preloader from './components/common/Preloader/Preloader';
import React, {Suspense} from 'react';

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'))
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'))
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'))


class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp()
    }


    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }

    }

    render() {
        return (

            <div className="app-wrapper">
                <HeaderContainer/>
                <Navbar/>
                <div className='app-content-wrapper'>
                    <Suspense fallback={<Preloader/>}>
                        <Routes>
                            <Route exact path="/" element={<Navigate to={'/profile'}/>}/>
                            <Route path='/profile' element={<ProfileContainer/>}/>
                            <Route path='/profile/:userId' element={<ProfileContainer/>}/>
                            <Route path='/dialogs' element={<DialogsContainer/>}/>
                            <Route path='/users' element={<UsersContainer/>}/>
                            <Route path='/login' element={<Login/>}/>
                        </Routes>
                    </Suspense>
                </div>
            </div>

        );
    }

}

const mapStateToProps = (state) => ({
    initialized: state.app.initializeApp
})

export default compose(
    connect(mapStateToProps, {initializeApp}))
(App);
