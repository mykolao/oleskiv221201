import { FC } from 'react';
import { UserData } from '../../store/user/types';

import styles from './UserItem.module.css';

interface UserItemProps {
  value: UserData;
  onView: (nickname: string) => void;
}

const UserItem: FC<UserItemProps> = ({ value, onView }) => {
  const { photo, name, nickname } = value;

  const handleOnView = () => {
    onView(nickname);
  };

  return (
    <div className={styles.item} data-testid="user-item">
      <div className={styles.info}>
        <img src={photo} alt="user" className={styles.image} />
        <div className={styles.group}>
          <h3 className={styles.name}>{name}</h3>
          <p className={styles.nickname}>{nickname}</p>
        </div>
      </div>
      <button className={styles.button} onClick={handleOnView}>
        View
      </button>
    </div>
  );
};

export default UserItem;
