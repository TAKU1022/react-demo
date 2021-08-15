/* eslint-disable react-hooks/exhaustive-deps */
import { memo, useEffect, VFC } from 'react';
import { Center, Spinner, Wrap, WrapItem } from '@chakra-ui/react';
import { UserCard } from '../organisms/user/UserCard';
import { useAllUsers } from '../../hooks/useAllUsers';
import { User } from '../../types/user';

export const UserManagement: VFC = memo(() => {
  const { getUsers, loading, users } = useAllUsers();

  useEffect(() => getUsers(), []);

  return (
    <>
      {loading ? (
        <Center h="100vh">
          <Spinner></Spinner>
        </Center>
      ) : (
        <Wrap p={{ base: 4, md: 10 }}>
          {users.map((user: User) => {
            return (
              <WrapItem key={user.id} mx="auto">
                <UserCard
                  imageUrl="https://source.unsplash.com/random"
                  userName={user.username}
                  fullName={user.name}
                ></UserCard>
              </WrapItem>
            );
          })}
        </Wrap>
      )}
    </>
  );
});
