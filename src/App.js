import './App.css';
import{
  Navbar,
  Footer
} from './components/index'

import Home from './pages/Home';
function App() {
  return (
    <div className="App">
     <Navbar/>
     < Home/>
     <Footer/>
    </div>
  );
}

export default App;
