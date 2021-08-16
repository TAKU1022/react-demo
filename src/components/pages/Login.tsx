import { ChangeEvent, memo, VFC } from 'react';
import { Flex, Box, Heading, Divider, Input, Stack } from '@chakra-ui/react';
import { PrimaryButton } from '../atoms/button/PrimaryButton';
import { useState } from 'react';
import { useAuth } from '../../hooks/useAuth';

export const Login: VFC = memo(() => {
  const [userId, setUserId] = useState('');
  const { login, loading } = useAuth();

  const changeUserId = (event: ChangeEvent<HTMLInputElement>) =>
    setUserId(event.target.value);

  const loginByUserId = () => login(userId);

  return (
    <Flex align="center" justify="center" height="100vh">
      <Box bg="white" w="sm" p={4} borderRadius="md" shadow="md">
        <Heading as="h1" size="lg" textAlign="center">
          ユーザー管理アプリ
        </Heading>
        <Divider my={4}></Divider>
        <Stack spacing={6} py={4} px={10}>
          <Input placeholder="ユーザーID" onChange={changeUserId}></Input>
          <PrimaryButton
            disabled={userId === ''}
            loading={loading}
            onClick={loginByUserId}
          >
            ログイン
          </PrimaryButton>
        </Stack>
      </Box>
    </Flex>
  );
});
