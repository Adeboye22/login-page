import './App.css';
import CreateUser from './components/CreateUser';
import UserLogin from './components/UserLogin';
import UserDashboard from './components/UserDashboard';

function App() {
  return (
    <div className="App">
      <CreateUser />
      <UserLogin />
      <UserDashboard />
    </div>
  );
}

export default App;
