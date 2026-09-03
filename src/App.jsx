import LeftSide from './components/LeftSide';
import RightSide from './components/RightSide';
import Footer from './components/Footer';
import './App.css';
import FbLogo from './components/FbLogo'
// each time create error
//1 email or number then passwords
// send unknown when stop typing

//forgetPassword 1 time to facebook

// after 5 attempts, try after 1h
// 6h - 12h - 24h
function App() {
  return (
    <>
      <div className="main">
        <FbLogo className='logo-sm-screen' />
        <LeftSide />
        <div className='separator' />
        <RightSide />
      </div>
      <Footer />
    </>
  );
}

export default App;
