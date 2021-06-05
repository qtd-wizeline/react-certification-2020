import logo from './logo.svg';
import './App.css';
import styled from "styled-components"
import Header from './components/header/header.jsx';
import VideoCard from "./components/videocard/videocard.jsx"
//import "./css/index.css"
import 'bootstrap/dist/css/bootstrap.min.css';

import js from "../src/data/yt";
import { Container } from 'react-bootstrap';


const VideoWrapper = styled.div`
  border-radius: 5px;
  margin: 8px;
  background-color: #212121;
  height: 350px;
  max-height: 350px;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  &:hover {
    cursor: pointer;
    opacity: 0.75;
  }
`;

const VideoList = js.items.map((vid)=>(
  <div key={vid.id.kind} className="cards">
    <VideoCard 
    thumbnail={vid.snippet.thumbnails.high.url} 
    title={vid.snippet.title}/>
  </div>
));


function App() {
  return (
    <Container>
      <div className="App">
        <Header/>
    </div>
        {VideoList}
    </Container>
    
  );
}

export default App;
