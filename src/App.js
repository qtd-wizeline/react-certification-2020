import logo from './logo.svg';
import './App.css';
import Header from './components/header/header.jsx';
import VideoCard from "./components/videocard/videocard.jsx"
import 'bootstrap/dist/css/bootstrap.min.css';
import js from "../src/data/yt";
import { Container } from 'react-bootstrap';

const VideoList = js.items.map((vid)=>(
  <li key={vid.id.kind} className="cards">
    <VideoCard 
    thumbnail={vid.snippet.thumbnails.high.url} 
    title={vid.snippet.title}/>
  </li>
));


function App() {
  return (
    <Container>
      <div className="App">
        <Header/>
    </div>
      <ul className="cards">
          {VideoList}
        </ul>
    </Container>
    
  );
}

export default App;
