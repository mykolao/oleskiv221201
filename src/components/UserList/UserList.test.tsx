import { fireEvent, render, screen } from '@testing-library/react';
import { UserData } from '../../store/user/types';
import UserList from './UserList';

const emptyList: UserData[] = [];

const userList: UserData[] = [
  {
    phone: '902-738-3242',
    name: 'Geordan Aaryn',
    nickname: '@geordanaaryn',
    email: 'geordan.aaryn@fallinhay.com',
    position: 'Chief Executive Officer',
    photo: 'img1',
  },
  {
    phone: '902-782-3286',
    name: 'Brazil Izair',
    nickname: '@brazilizair',
    email: 'brazil.izair@fallinhay.com',
    position: 'Managing Director',
    photo: 'img2',
  },
];

const longerUserList: UserData[] = [
  ...userList,
  {
    phone: '902-739-3333',
    name: 'Selman Winston',
    nickname: '@selmanwinston',
    email: 'selman.winston@fallinhay.com',
    position: 'Chief Visionary Officer',
    photo: 'img3',
  },
  {
    phone: '902-784-3378',
    name: 'Kaine Dutch',
    nickname: '@kainedutch',
    email: 'kaine.dutch@fallinhay.com',
    position: 'Chief Financial Officer',
    photo: 'img4',
  },
];

describe('UserWidget component', () => {
  test('Should display fallback message if the user list is empty', () => {
    render(<UserList value={emptyList} onViewDetails={() => {}} />);

    const MessageElement = screen.getByText('The List Is Empty');
    expect(MessageElement).toBeInTheDocument();
  });

  test('Should display a list of UserItem components', () => {
    render(<UserList value={userList} onViewDetails={() => {}} />);

    const UserItemList = screen.getAllByTestId('user-item');
    expect(UserItemList).toHaveLength(userList.length);
  });

  test('Should not display "View All" button if users less than 3', () => {
    render(<UserList value={userList} onViewDetails={() => {}} />);

    expect(screen.queryByText(/view all/i)).toBeFalsy();
  });

  test('Should display "View All" button if users more than 3', () => {
    render(<UserList value={longerUserList} onViewDetails={() => {}} />);

    const ViewAllButton = screen.getByText(/view all/i);
    expect(ViewAllButton).toBeInTheDocument();
  });

  test('Should return nickname on button click', () => {
    const handleView = jest.fn();
    render(<UserList value={userList} onViewDetails={handleView} />);

    const ButtonList = screen.getAllByText(/view/i);
    ButtonList.forEach((Button, i) => {
      fireEvent.click(Button);
      expect(handleView).toBeCalledWith(userList[i].nickname);
    });
  });
});

export {};
