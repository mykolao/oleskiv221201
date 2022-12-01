import { fireEvent, render, screen } from '@testing-library/react';
import { UserData } from '../../store/user/types';
import UserItem from './UserItem';

const user: UserData = {
  phone: '902-738-3242',
  name: 'Geordan Aaryn',
  nickname: '@geordanaaryn',
  email: 'geordan.aaryn@fallinhay.com',
  position: 'Chief Executive Officer',
  photo: 'img1',
};

describe('UserItem Component', () => {
  test('Should return nickname on button click', () => {
    const handleView = jest.fn();
    render(<UserItem value={user} onView={handleView} />);
    fireEvent.click(screen.getByText(/view/i));
    expect(handleView).toBeCalledWith(user.nickname);
  });
});

export {};
