import './App.css';
import Layout from './components/Layout';
import HomePage from './components/HomePage';
import GamesList from './components/GamesList';
import About from './components/About';
import Account from './components/Account'
import Profile from './components/Profile';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import GamePage from './components/GamePage';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

import { useAuthContext } from './hooks/useAuthContext';

function App() {
  const { user } = useAuthContext()

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} >
            <Route index element={<HomePage />} />
            <Route path="gamelist" element={<GamesList />} />
            <Route path="about" element={<About />} />
            <Route path="account" element={user ? <Account /> : <Navigate to="/login" />} />
            <Route path="profile" element={user ? <Profile /> : <Navigate to="/login" />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="register" element={<RegisterPage />} />
            <Route path="gamepage" element={<GamePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
