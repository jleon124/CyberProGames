import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import GamePage from './components/GamePage';

function App() {
  return (
    <div className="App">
      <Header/>
      <GamePage/>
      <Footer/>
    </div>
  );
}

export default App;
