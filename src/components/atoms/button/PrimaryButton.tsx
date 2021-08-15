import { memo, ReactNode, VFC } from 'react';
import { Button } from '@chakra-ui/react';

type Props = {
  children: ReactNode;
  disabled?: boolean;
  loading?: boolean;
  login: () => void;
};

export const PrimaryButton: VFC<Props> = memo((props: Props) => {
  const { children, disabled = false, loading = false, login } = props;

  return (
    <Button
      bg="teal.400"
      color="white"
      _hover={{ opacity: 0.8 }}
      disabled={disabled || loading}
      isLoading={loading}
      onClick={login}
    >
      {children}
    </Button>
  );
});