import { lazy, Suspense } from 'react';
import {
  Route,
  BrowserRouter as Router,
  Routes,
} from 'react-router-dom';
import Layout from './components/Layout';
import Loading from './components/Loading';
import PageLoader from './components/PageLoader';

const HomePage = lazy(() => import('./pages/Home'));
const PageListaEpsodios = lazy(() => import('./pages/Episodios'));
const PagePersonagem = lazy(() => import('./pages/Personagem'));

function App() {
  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route
              index
              element={
                <PageLoader> {/* mostra Loading sempre por X segundos */}
                  <HomePage />
                </PageLoader>
              }
            />
            <Route
              path="/episodios"
              element={
                <PageLoader>
                  <PageListaEpsodios />
                </PageLoader>
              }
            />
            <Route
              path="/personagens"
              element={
                <PageLoader>
                  <PagePersonagem />
                </PageLoader>
              }
            />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
