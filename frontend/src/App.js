import './App.css';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import About from './pages/About';
import Settings from './pages/Settings'
import Profile from './pages/Profile';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import GamePage from './pages/GamePage-QuizShow';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

import { useSelector } from 'react-redux';
import GamePageZombieHunter from './pages/GamePage-ZombieHunter';
import GamePageRocket from './pages/GamePage-Rocket';
import GamePageMatching from './pages/GamePage-Matching';
import GamePageEscape from './pages/GamePage-EscapeRoom';
import GamePageSamurai from './pages/GamePage-Samurai';

function App() {

  const isAuth = Boolean(useSelector((state) => state.token))

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} >
            <Route index element={<HomePage />} />
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
            <Route path="/quizshow" element={<GamePage />} />
            <Route path="/zombiehunter" element={<GamePageZombieHunter />} />
            <Route path="/rocket" element={<GamePageRocket />} />
            <Route path="/matching" element={<GamePageMatching />} />
            <Route path="/escape" element={<GamePageEscape />} />
            <Route path="/samurai" element={<GamePageSamurai />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )

}

export default App;
