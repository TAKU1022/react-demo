import { memo, ReactNode, VFC } from 'react';

import { Header } from '../organisms/layouts/Header';

type props = {
  children: ReactNode;
};

export const HeaderLayout: VFC<props> = memo((props) => {
  const { children } = props;

  return (
    <>
      <Header></Header>
      {children}
    </>
  );
});
