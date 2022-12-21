import { FC, ReactNode, useEffect, useReducer } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import Cookie from 'js-cookie';

import { AuthContext, authReducer } from './';
import { shopApi } from '../../api';
import { IUser } from '../../interfaces';

export interface AuthState {
  isLoggedIn: boolean;
  user?: IUser;
}

const AUTH_INITIAL_STATE: AuthState = {
  isLoggedIn: false,
  user: undefined
};

interface Props {
  children: ReactNode;
}

export const AuthProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, AUTH_INITIAL_STATE);
  const router = useRouter();


  useEffect(() => {
    checkToken();
  }, []);

  const checkToken = async () => {

    if (!Cookie.get('token')) {
      return;
    }

    try {
      const { data } = await shopApi.get('/user/validate-token');
      const { token, user } = data;
      Cookie.set('token', token);
      dispatch({ type: '[Auth] - Login', payload: user });
    } catch (error) {
      Cookie.remove('token')
    }
  }

  const loginUser = async (email: string, password: string): Promise<boolean> => {
    try {
      const { data } = await shopApi.post('/user/login', { email, password });
      const { token, user } = data;
      Cookie.set('token', token);
      dispatch({ type: '[Auth] - Login', payload: user });
      return true
    } catch (error) {
      return false
    }
  }

  const registerUser = async (name: string, email: string, password: string): Promise<{ hasError: boolean; message: string }> => {
    try {
      const { data } = await shopApi.post('/user/register', { name, email, password });
      const { token, user } = data;
      Cookie.set('token', token);
      dispatch({ type: '[Auth] - Login', payload: user });
      return {
        hasError: false,
        message: ''
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return {
          hasError: true,
          message: error.response?.data.message
        }
      }

      return {
        hasError: true,
        message: 'No se pudo crear el usuario - intente de nuevo'
      }
    }
  }

  const logoutUser = () => {
    Cookie.remove('token');
    Cookie.remove('cart');
    router.reload();
  }

  return (
    <AuthContext.Provider
      value={{
        ...state,

        // Methods
        loginUser,
        registerUser,
        logoutUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};