import { Routes, Route } from 'react-router';
import HomePage from "./pages/homepage/HomePage";
import LoomHomePage from "./pages/loomaipage/LoomHomePage";
import Demo from './components/Demo';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/loom" element={<LoomHomePage />} />
      <Route path='/demo' element={<Demo/>}/>
    </Routes>
  );
}
