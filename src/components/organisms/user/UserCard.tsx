import { memo, VFC } from 'react';
import { Box, Image, Stack, Text } from '@chakra-ui/react';

type Props = {
  imageUrl: string;
  userName: string;
  fullName: string;
  openModal: () => void;
};

export const UserCard: VFC<Props> = memo((props: Props) => {
  const { imageUrl, userName, fullName, openModal } = props;

  return (
    <Box
      w="260px"
      h="260px"
      bg="white"
      borderRadius="10px"
      shadow="md"
      p={4}
      cursor="pointer"
      _hover={{ opacity: 0.8 }}
      onClick={openModal}
    >
      <Stack textAlign="center">
        <Image
          boxSize="160px"
          borderRadius="full"
          src={imageUrl}
          alt="プロフィール画像"
          m="auto"
        ></Image>
        <Text fontSize="lg" fontWeight="bold">
          {userName}
        </Text>
        <Text fontSize="sm" color="gray">
          {fullName}
        </Text>
      </Stack>
    </Box>
  );
});
