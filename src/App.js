import React, { useEffect } from 'react';
import './App.css';
import Header from './header/Header';
import Sidebar from './sidebar/Sidebar';
import Feed from './feed/Feed';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import Login from './login/Login';
import { auth } from './firebase/firebase';

function App() {

  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        //user is logged-In
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoUrl: userAuth.photoURL,
        }))
      } else {
        //user logged-Out
        dispatch(logout());
      }
    });
  }, []);

  return (
    <div className="app">
      <Header />

      {!user ? (<Login />) : (
        <div className="app_body">
          <Sidebar />
          <Feed />
        </div>
      )}

    </div>
  );
}

export default App;
