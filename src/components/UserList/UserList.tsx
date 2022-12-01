import { FC, useState } from 'react';
import { UserData } from '../../store/user/types';
import UserItem from '../UserItem/UserItem';

import styles from './UserList.module.css';

interface UserListProps {
  value: UserData[];
  onViewDetails: (nickname: string) => void;
}

const UserList: FC<UserListProps> = ({ value: users, onViewDetails }) => {
  const numberOfUsers = users.length;

  const [listLength, setListLength] = useState(
    numberOfUsers > 3 ? 3 : numberOfUsers
  );

  const userList = users.slice(0, listLength);

  const handleViewAll = () => {
    setListLength(numberOfUsers);
  };

  const handleViewDetails = (nickname: string) => {
    onViewDetails(nickname);
  };

  return (
    <div className={styles.userList}>
      {userList.map((user) => (
        <UserItem key={user.nickname} value={user} onView={handleViewDetails} />
      ))}
      {numberOfUsers > listLength && (
        <div className={styles.buttonContainer}>
          <button className={styles.button} onClick={handleViewAll}>
            View All
          </button>
        </div>
      )}
    </div>
  );
};

export default UserList;
