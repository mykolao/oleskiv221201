import { useAppSelector } from '../../store';
import { selectUsers } from '../../store/user/userSlice';
import UserWidget from '../UserWidget/UserWidget';

import styles from './App.module.css';

function App() {
  const users = useAppSelector(selectUsers);

  return (
    <div className={styles.app}>
      <UserWidget value={users} />
    </div>
  );
}

export default App;
