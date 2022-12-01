import { renderHook } from '@testing-library/react';
import { FC, PropsWithChildren } from 'react';
import { Provider } from 'react-redux';
import store, { useAppSelector } from '..';
import { selectUsers } from '../user/userSlice';

const storeProvider: FC<PropsWithChildren> = ({ children }) => {
  return <Provider store={store}> {children} </Provider>;
};

describe('useAppSelector', () => {
  test('Should select users from store', () => {
    const { result } = renderHook(() => useAppSelector(selectUsers), {
      wrapper: storeProvider,
    });

    expect(result.current).toEqual(store.getState().user.users);
  });
});

export {};
