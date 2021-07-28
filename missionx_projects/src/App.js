import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Body from './components/Body'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Header />
      <Body className="height" />
      <Footer />
    </div>
  );
}

export default App;
