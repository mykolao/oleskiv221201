import { UserState } from './types';

import img1 from '../../assets/img/1.jpg';
import img2 from '../../assets/img/2.jpg';
import img3 from '../../assets/img/3.jpg';
import img4 from '../../assets/img/4.jpg';
import img5 from '../../assets/img/5.jpg';
import img6 from '../../assets/img/6.jpg';
import img7 from '../../assets/img/7.jpg';
import img8 from '../../assets/img/8.jpg';
import img9 from '../../assets/img/9.jpg';
import img10 from '../../assets/img/10.jpg';

export const initialState: UserState = {
  users: [
    {
      phone: '902-738-3242',
      name: 'Geordan Aaryn',
      nickname: '@geordanaaryn',
      email: 'geordan.aaryn@fallinhay.com',
      position: 'Chief Executive Officer',
      photo: img1,
    },
    {
      phone: '902-782-3286',
      name: 'Brazil Izair',
      nickname: '@brazilizair',
      email: 'brazil.izair@fallinhay.com',
      position: 'Managing Director',
      photo: img2,
    },
    {
      phone: '902-739-3333',
      name: 'Selman Winston',
      nickname: '@selmanwinston',
      email: 'selman.winston@fallinhay.com',
      position: 'Chief Visionary Officer',
      photo: img3,
    },
    {
      phone: '902-784-3378',
      name: 'Kaine Dutch',
      nickname: '@kainedutch',
      email: 'kaine.dutch@fallinhay.com',
      position: 'Chief Financial Officer',
      photo: img4,
    },
    {
      phone: '902-740-3426',
      name: 'Kerby Linton',
      nickname: '@kerbylinton',
      email: 'kerby.linton@fallinhay.com',
      position: 'IT Guy',
      photo: img5,
    },
    {
      phone: '902-786-3472',
      name: 'Gilad Delvon',
      nickname: '@giladdelvon',
      email: 'gilad.delvon@fallinhay.com',
      position: 'Workless',
      photo: img6,
    },
    {
      phone: '902-741-3521',
      name: 'Augusto Castor',
      nickname: '@augustocastor',
      email: 'augusto.castor@fallinhay.com',
      position: 'Manager',
      photo: img7,
    },
    {
      phone: '902-788-3568',
      name: 'Zian Khyre',
      nickname: '@ziankhyre',
      email: 'zian.khyre@fallinhay.com',
      position: 'General worker/Works for food',
      photo: img8,
    },
    {
      phone: '902-742-3618',
      name: 'Sheldon Neiko',
      nickname: '@sheldonneiko',
      email: 'sheldon.neiko@fallinhay.com',
      position: 'Security Guy',
      photo: img9,
    },
    {
      phone: '902-790-3666',
      name: 'Berenger Altay',
      nickname: '@berengeraltay',
      email: 'berenger.altay@fallinhay.com',
      position: 'Unknown person',
      photo: img10,
    },
  ],
};
