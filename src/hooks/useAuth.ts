/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useState } from 'react';
import axios from 'axios';
import { User } from '../types/user';
import { useHistory } from 'react-router-dom';

export const useAuth = () => {
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const login = useCallback((id: string) => {
    setLoading(true);

    axios
      .get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => {
        if (res.data) {
          history.push('/home');
        } else {
          alert('ユーザーが見つかりません');
        }
      })
      .catch(() => alert('ログインできません'))
      .finally(() => setLoading(false));
  }, []);

  return { login, loading };
};
