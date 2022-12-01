import { FC } from 'react';
import { UserData } from '../../store/user/types';

import styles from './UserDetails.module.css';

interface UserDetailsProps {
  value: UserData;
  onClose: () => void;
}

const UserDetails: FC<UserDetailsProps> = ({ value, onClose }) => {
  const { photo, name, position, phone, email } = value;

  const url = 'https://example.com';

  const handleOnClose = () => onClose();

  return (
    <div className={styles.userDetails}>
      <button className={styles.close} onClick={handleOnClose}>
        X
      </button>
      <div className={styles.summary}>
        <img src={photo} alt="user" />
        <h3>{name}</h3>
        <p>{position}</p>
      </div>
      <div className={styles.details}>
        <h3>Phone</h3>
        <p>{phone}</p>
        <h3>URL</h3>
        <a href={url}>{url}</a>
        <h3>Email</h3>
        <a href={`mailto:${email}`}>{email}</a>
      </div>
      <div className={styles.buttonContainer}>
        <button className={styles.button}>Send Message</button>
      </div>
    </div>
  );
};

export default UserDetails;
