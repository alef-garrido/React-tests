import logo from '../logo.svg';
import '../App.css';

export default function Navbar() {
  return (
    <header className="App-header">
      <div>
        <img src={logo} className="App-logo" alt="logo" />
        <small>ReactFacts</small>
      </div>
      <p>
      My react project
      </p>
    </header>
  )
}