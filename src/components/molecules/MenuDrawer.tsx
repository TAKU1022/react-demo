import { memo, VFC } from 'react';
import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerBody,
  Button,
} from '@chakra-ui/react';

type Props = {
  onClose: () => void;
  isOpen: boolean;
  navigateHome: () => void;
  navigateUserManagement: () => void;
  navigateSetting: () => void;
};

export const MenuDrawer: VFC<Props> = memo((props) => {
  const {
    onClose,
    isOpen,
    navigateHome,
    navigateUserManagement,
    navigateSetting,
  } = props;

  return (
    <Drawer placement="left" size="xs" onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay>
        <DrawerContent>
          <DrawerContent>
            <DrawerBody p={0} bg="gray.100">
              <Button w="100%" onClick={navigateHome}>
                ボタン
              </Button>
              <Button w="100%" onClick={navigateUserManagement}>
                ユーザー一覧
              </Button>
              <Button w="100%" onClick={navigateSetting}>
                設定
              </Button>
            </DrawerBody>
          </DrawerContent>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
});
