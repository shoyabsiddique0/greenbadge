import {Store} from 'pullstate';

interface profile {
  data: {
    user_id: string;
    name: string;
    email: string;
    password: string;
    age: number;
    gender: string;
    jwt_token: string;
    score: number;
  };
}

const initialState: profile = {
  data: {
    user_id: '',
    name: '',
    email: '',
    password: '',
    age: 0,
    gender: '',
    jwt_token: '',
    score: 0,
  },
};

const store = new Store<profile>(initialState);
export default store;
