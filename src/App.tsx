import {
  Route,
  BrowserRouter as Router,
  Routes,
} from 'react-router-dom';
import PageListaEpsodios from './pages/Episodios';
import HomePage from './pages/Home';
import PagePersonagem from './pages/Personagem';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/episodios/:id" element={<PageListaEpsodios />} />
        <Route path="/personagens/:id" element={<PagePersonagem />} />
      </Routes>
    </Router>
  )
}

export default App
