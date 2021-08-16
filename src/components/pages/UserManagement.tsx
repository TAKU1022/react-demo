/* eslint-disable react-hooks/exhaustive-deps */
import { memo, useCallback, useEffect, VFC } from 'react';
import {
  Center,
  Spinner,
  useDisclosure,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';
import { useAllUsers } from '../../hooks/useAllUsers';

import { User } from '../../types/user';
import { UserCard } from '../organisms/user/UserCard';
import { UserDetailModal } from '../organisms/user/UserDetailModal';
import { useSelectUser } from '../../hooks/useSelectUser';
import { useLoginUser } from '../../hooks/useLoginUser';

export const UserManagement: VFC = memo(() => {
  const { getUsers, loading, users } = useAllUsers();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { selectUser, selectedUser } = useSelectUser();
  const { loginUser } = useLoginUser();

  console.log(loginUser);

  const openModal = useCallback(
    (id: number) => {
      selectUser({ id, users });
      onOpen();
    },
    [onOpen, selectUser, users]
  );

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
                  openModal={() => openModal(user.id)}
                ></UserCard>
              </WrapItem>
            );
          })}
        </Wrap>
      )}

      <UserDetailModal
        user={selectedUser}
        isOpen={isOpen}
        onClose={onClose}
      ></UserDetailModal>
    </>
  );
});
