import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './NavBar';
import Home from './pages/Home';
import About from './pages/About';
import ArticlesList from './pages/ArticlesList';
import ArticlePage from './pages/ArticlePage';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <div id="page-body">
          <Routes>
            <Route path="/" element={ <Home /> } />
            <Route path="/about" element={ <About />} />
            <Route path="/articles" element={ <ArticlesList />} />
            <Route path="/articles/:articleID" element={ <ArticlePage />} />
            <Route path="*" element={ <NotFound />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
