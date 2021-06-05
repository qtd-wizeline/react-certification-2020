import logo from './logo.svg';
import './App.css';
import styled from "styled-components"
import Header from './components/header/header.jsx';
import VideoCard from "./components/videocard/videocard.jsx"
//import "./css/index.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import js from "../src/data/yt";
import { Container } from 'react-bootstrap';




const VideoList = js.items.map((vid)=>(
  <div key={vid.id.kind} className="cards">
    <VideoCard 
    thumbnail={vid.snippet.thumbnails.high.url} 
    title={vid.snippet.title} url={vid.id.videoId}/>
  </div>
));


function App() {
  return (
    <div>
      <div className="App">
        <Header/>
    </div>
        {VideoList}
    </div>
    
  );
}

export default App;
