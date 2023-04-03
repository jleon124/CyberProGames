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
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<HomePage />} />
          <Route path="gamelist" element={<GamesList />} />
          <Route path="about" element={<About />} />
          <Route src='./drkMod.js' path="account" element={<Account />} />
          <Route path="profile" element={<Profile />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="gamepage" element={<GamePage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
