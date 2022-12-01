import { useAppSelector } from '../../store';
import { selectUsers } from '../../store/user/userSlice';
import './App.css';

function App() {
  const users = useAppSelector(selectUsers);

  return (
    <div className="App">
      {users.map((user) => (
        <div key={user.nickname}>{user.name}</div>
      ))}
    </div>
  );
}

export default App;
