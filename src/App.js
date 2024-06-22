import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/home'
import { Login } from './pages/login'
import { SignUp } from './pages/signUp'
import { Help } from './pages/help'

function App() {
  return (
    <>
      <Routes>
        <Route path="/"  element={<Home />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/signUp' element={<SignUp />} />
        <Route path='/help' element={<Help />} />
      </Routes>
    </>
  );
}

export default App;
