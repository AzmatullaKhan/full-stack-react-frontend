import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/home'
import { Login } from './pages/login'
import { SignUp } from './pages/signUp'
import { Help } from './pages/help'
import { About } from './pages/about'
import { ResetPassword } from './pages/resetPassword'
import { Profile } from './pages/profile'

function App() {
  return (
    <>
      <Routes>
        <Route path="/"  element={<Home />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/signUp' element={<SignUp />} />
        <Route path='/help' element={<Help />} />
        <Route path='/about' element={<About />} />
        <Route path='/resetPassword' element={<ResetPassword />}/>
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;
