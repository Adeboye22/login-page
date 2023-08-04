import CreateUser from './components/CreateUser';
import UserLogin from './components/UserLogin';
import UserDashboard from './components/UserDashboard';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<UserLogin />} />
        <Route path='/createuser' element={<CreateUser />} />
        <Route path='/dashboard' element={<UserDashboard />} />
      </Routes>

    </div>
  );
}

export default App;
