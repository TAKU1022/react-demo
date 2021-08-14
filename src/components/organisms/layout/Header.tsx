import { memo, VFC } from 'react';
import { Flex, Heading, Link, Box, useDisclosure } from '@chakra-ui/react';

import { IconMenuButton } from '../../atoms/button/IconMenuButton';
import { MenuDrawer } from '../../molecules/MenuDrawer';

export const Header: VFC = memo(() => {
  const { isOpen, onOpen, onClose } = useDisclosure();

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
          <Heading as="h1" fontSize={{ base: 'md', md: 'lg' }}>
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
            <Link>ユーザー一覧</Link>
          </Box>
          <Link>設定</Link>
        </Flex>
        <IconMenuButton onOpen={onOpen}></IconMenuButton>
      </Flex>

      <MenuDrawer onClose={onClose} isOpen={isOpen}></MenuDrawer>
    </>
  );
});
