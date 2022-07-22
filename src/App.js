import './App.css';
import { AuthProvider } from './components/auth';
import Home from './pages/Home';
import Login from './pages/Login';
import { Routes, Route } from 'react-router-dom'
import { RequireAuth } from './components/RequireAuth';

function App() {
  return (
    <div>
      <AuthProvider>
        <Routes>
          <Route path='/home' element={
          <RequireAuth>
            <Home />
          </RequireAuth>}></Route>
          <Route path='/' element={<Login />}></Route>
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
