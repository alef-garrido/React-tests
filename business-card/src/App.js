import './App.css';
import ProfilePic from './components/thumbnail';

import CardBody from './components/card-body';
import Footer from './components/rrss-footer';

function App() {
  return (
    <div className="App">
      <div className='card'>
        <ProfilePic />
        <CardBody />
        <Footer />
      </div>
    </div>
  );
}

export default App;
