import './App.css';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import {Routes, Route} from "react-router-dom"
import GamesList from './components/GamesList';
import About from './components/About';
import Account from './components/Account'
import Profile from './components/Profile';
import Login from './components/Login';
import GamePage from './components/GamePage'

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={ <Content/> } />
        <Route path="/gamelist" element = {<GamesList/>} />
        <Route path="/about" element={ <About/> } />
        <Route path="/account" element={ <Account/> } />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/login" element={ <Login/> } />
        <Route path="/gamepage" element= { <GamePage/> } />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
