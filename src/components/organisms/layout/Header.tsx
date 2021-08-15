import { memo, VFC } from 'react';
import { Flex, Heading, Link, Box, useDisclosure } from '@chakra-ui/react';

import { IconMenuButton } from '../../atoms/button/IconMenuButton';
import { MenuDrawer } from '../../molecules/MenuDrawer';
import { useHistory } from 'react-router';
import { useCallback } from 'react';

export const Header: VFC = memo(() => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const histry = useHistory();

  const navigateHome = useCallback(() => histry.push('/home'), [histry]);
  const navigateUserManagement = useCallback(
    () => histry.push('/home/user_management'),
    [histry]
  );
  const navigateSetting = useCallback(
    () => histry.push('/home/setting'),
    [histry]
  );

  return (
    <>
      <Flex
        as="nav"
        bg="teal.500"
        color="gray.50"
        align="center"
        justify="space-between"
        padding={{ base: 3, md: 5 }}
      >
        <Flex as="a" align="center" mr={8} cursor="pointer">
          <Heading
            as="h1"
            fontSize={{ base: 'md', md: 'lg' }}
            onClick={navigateHome}
          >
            ユーザー管理アプリ
          </Heading>
        </Flex>
        <Flex
          align="center"
          fontSize="sm"
          flexGrow={2}
          display={{ base: 'none', md: 'flex' }}
        >
          <Box pr={4}>
            <Link onClick={navigateUserManagement}>ユーザー一覧</Link>
          </Box>
          <Link onClick={navigateSetting}>設定</Link>
        </Flex>
        <IconMenuButton onOpen={onOpen}></IconMenuButton>
      </Flex>

      <MenuDrawer
        onClose={onClose}
        isOpen={isOpen}
        navigateHome={navigateHome}
        navigateUserManagement={navigateUserManagement}
        navigateSetting={navigateSetting}
      ></MenuDrawer>
    </>
  );
});
