import { RootState } from '../..';
import { selectUsers } from '../userSlice';

describe('User Selector', () => {
  test('Should return empty array', () => {
    const state: RootState = {
      user: {
        users: [],
      },
    };
    expect(selectUsers(state)).toEqual([]);
  });

  test('Should return array of users', () => {
    const state: RootState = {
      user: {
        users: [
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
        ],
      },
    };

    expect(selectUsers(state)).toHaveLength(2);
  });
});

export {};
