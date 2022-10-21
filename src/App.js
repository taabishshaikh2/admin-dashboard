
import './App.css';
import Navbar from './components/Navbar';
import SideBar from './components/SideBar';

function App() {
  return (
    <div className="App">
      <div className="nav-side">
      <SideBar />
      <Navbar />
      </div>
    </div>
  );
}

export default App;
