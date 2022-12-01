import { FC, useState } from 'react';
import { UserData } from '../../store/user/types';
import UserDetails from '../UserDetails/UserDetails';
import UserList from '../UserList/UserList';

// UserWidget
interface UserWidgetProps {
  value: UserData[];
}

const UserWidget: FC<UserWidgetProps> = ({ value: users }) => {
  const [selectedUser, setSelectedUser] = useState<UserData | null>(null);
  const [showDetails, setShowDetails] = useState(false);

  const handleHideDetails = () => setShowDetails(false);

  const handleViewDetails = (nickname: string) => {
    const user = users.find((user) => user.nickname === nickname) || null;

    if (user) {
      setSelectedUser(user);
      setShowDetails(true);
    }
  };

  if (selectedUser && showDetails) {
    return (
      <main className="widget-container">
        <UserDetails value={selectedUser} onClose={handleHideDetails} />
      </main>
    );
  }

  return (
    <div className="widget-container">
      <UserList value={users} onViewDetails={handleViewDetails} />
    </div>
  );
};

export default UserWidget;
