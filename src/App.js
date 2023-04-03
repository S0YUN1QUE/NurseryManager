// import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import MainPage from './pages/MainPage';

function App() {
  return (
    <>
      <Helmet>
        <title>Nusery Manager Main</title>
      </Helmet>
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </>
  );
};

export default App;
