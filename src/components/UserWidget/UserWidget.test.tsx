import { fireEvent, render, screen } from '@testing-library/react';
import { UserData } from '../../store/user/types';
import UserWidget from './UserWidget';

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

describe('UserWidget Component', () => {
  test('Should render user details', () => {
    render(<UserWidget value={userList} />);

    const user1ViewButton = screen.getAllByText(/view/i)[0];
    fireEvent.click(user1ViewButton);

    screen.getByText(userList[0].phone);
  });
});
