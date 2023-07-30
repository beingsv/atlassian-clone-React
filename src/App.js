//import logo from './logo.svg';
import './App.css';
import { FaArrowDown } from 'react-icons/fa';

function App() {
  return (
    <div className="App">
      <div className='navbar'>
        <div className='leftnav'>
          <ul className='leftul'>
            <li><a href="#"><img src={require('./images/attlasian.png')} atl='atlassian' height="25px" width="200px"></img></a></li>
            <li><a className='liconlinks' href="#">Products<p className='arrow'><FaArrowDown/></p></a></li>
            <li><a className='liconlinks' href="#">Solutions<p className='arrow'><FaArrowDown/></p></a></li>
            <li><a className='liconlinks' href="#">Resources<p className='arrow'><FaArrowDown/></p></a></li>
          </ul>
        </div>
        <div className='rightnav'>
        <ul className='rightul'>
            <li><a className='riconlinks' href="#"><img src={require('./images/search.png')} atl='search' height="20px" width="20px"></img></a></li>
            <li><a className='rsiconlinks' href="#">Try now</a></li>
            <li><a className='riconlinks' href="#">Sign in </a></li>
          </ul>
        </div>
      </div>

      <div className='mainpage'>
        <img src={require('./images/bodyimage.jpg')} className='mainimage' alt='backgroud'></img>
        <div className='info'>
          <h1>Move work<br/>forward</h1>
          <p>Atlassian helps teams work smarter and faster,<br/>together</p>
          <button className='learnmore'>Learn More</button>
        </div>
      </div>

    </div>
  );
}

export default App;
