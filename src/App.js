import './App.css';
import Container from './component/Container';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Container></Container>
      <Routes>
        <Route path="/" />
        <Route path="about"  />
      </Routes>
    </div>
  );
}

export default App;
