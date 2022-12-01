export interface UserData {
  phone: string;
  name: string;
  nickname: string;
  email: string;
  position: string;
  photo: string;
}

export interface UserState {
  users: UserData[];
}
