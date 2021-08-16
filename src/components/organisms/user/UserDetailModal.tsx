import { ChangeEvent, memo, useState, VFC } from 'react';
import {
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
} from '@chakra-ui/react';
import { User } from '../../../types/user';
import { PrimaryButton } from '../../atoms/button/PrimaryButton';
import { useEffect } from 'react';

type Props = {
  user: User | null;
  isOpen: boolean;
  isAdmin?: boolean;
  onClose: () => void;
};

export const UserDetailModal: VFC<Props> = memo((props: Props) => {
  const { user, isOpen, isAdmin = false, onClose } = props;

  const [userName, setUserName] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  useEffect(() => {
    setUserName(user?.username ?? '');
    setName(user?.name ?? '');
    setEmail(user?.email ?? '');
    setPhone(user?.phone ?? '');
  }, [user]);

  const changeUserName = (event: ChangeEvent<HTMLInputElement>) =>
    setUserName(event.target.value);
  const changeName = (event: ChangeEvent<HTMLInputElement>) =>
    setName(event.target.value);
  const changeEmail = (event: ChangeEvent<HTMLInputElement>) =>
    setEmail(event.target.value);
  const changePhone = (event: ChangeEvent<HTMLInputElement>) =>
    setPhone(event.target.value);

  const updateUser = () => alert();

  return (
    <Modal isOpen={isOpen} onClose={onClose} autoFocus={false}>
      <ModalOverlay></ModalOverlay>
      <ModalContent pb={4}>
        <ModalHeader>ユーザー詳細</ModalHeader>
        <ModalCloseButton></ModalCloseButton>
        <ModalBody mx={4}>
          <Stack spacing={4}>
            <FormControl>
              <FormLabel>名前</FormLabel>
              <Input
                value={userName}
                onChange={changeUserName}
                isReadOnly={!isAdmin}
              ></Input>
            </FormControl>
            <FormControl>
              <FormLabel>フルネーム</FormLabel>
              <Input
                value={name}
                onChange={changeName}
                isReadOnly={!isAdmin}
              ></Input>
            </FormControl>
            <FormControl>
              <FormLabel>MAIL</FormLabel>
              <Input
                value={email}
                onChange={changeEmail}
                isReadOnly={!isAdmin}
              ></Input>
            </FormControl>
            <FormControl>
              <FormLabel>TEL</FormLabel>
              <Input
                value={phone}
                onChange={changePhone}
                isReadOnly={!isAdmin}
              ></Input>
            </FormControl>
          </Stack>
        </ModalBody>
        {isAdmin && (
          <ModalFooter>
            <PrimaryButton onClick={updateUser}>更新する</PrimaryButton>
          </ModalFooter>
        )}
      </ModalContent>
    </Modal>
  );
});
