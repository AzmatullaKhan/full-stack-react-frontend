import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/home'
import { Login } from './pages/login'
import { SignUp } from './pages/signUp'

function App() {
  return (
    <>
      <Routes>
        <Route path="/"  element={<Home />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/signUp' element={<SignUp />} />
      </Routes>
    </>
  );
}

export default App;
