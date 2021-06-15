import logo from './logo.svg';
import './App.css';
import {Header} from './components/Header'

const MainNav = [
  {"name" : "Home" , "link" : "/"},
  {"name" : "Books", "link" : "/books"},
  {"name" : "Blog" , "link" : "/blog"},
  {"name" : "Contact", "link" : "/contact"}
]

function App() {
  return (
    <div className="App">
      <Header nav={MainNav} />
    </div>
  );
}

export default App;
