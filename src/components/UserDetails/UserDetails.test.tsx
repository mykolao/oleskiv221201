import { fireEvent, render, screen } from '@testing-library/react';
import { UserData } from '../../store/user/types';
import UserDetails from './UserDetails';

const user: UserData = {
  phone: '902-738-3242',
  name: 'Geordan Aaryn',
  nickname: '@geordanaaryn',
  email: 'geordan.aaryn@fallinhay.com',
  position: 'Chief Executive Officer',
  photo: 'img1',
};

describe('UserDetails Component', () => {
  test('Should call onClose callback', () => {
    const handleClose = jest.fn();
    render(<UserDetails value={user} onClose={handleClose} />);
    fireEvent.click(screen.getByText(/^x$/i));
    expect(handleClose).toBeCalled();
  });
});

export {};
