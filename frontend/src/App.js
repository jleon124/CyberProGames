import './App.css';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import GamesList from './components/GamesList';
import About from './pages/About';
import Settings from './pages/Settings'
import Profile from './pages/Profile';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import GamePage from './pages/GamePage-QuizShow';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

import { useSelector } from 'react-redux';

function App() {

  const isAuth = Boolean(useSelector((state) => state.token))

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} >
            <Route index element={<HomePage />} />
            <Route path="/gamelist" element={<GamesList />} />
            <Route path="/about" element={<About />} />
            <Route
              path="/settings"
              element={isAuth ? <Settings /> : <Navigate to="/login" />}
            />
            <Route
              path="/profile"
              element={isAuth ? <Profile /> : <Navigate to="/login" />}
            />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/gamepage" element={<GamePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )

}

export default App;
