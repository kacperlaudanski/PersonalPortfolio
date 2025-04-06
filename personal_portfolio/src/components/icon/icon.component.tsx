import React from 'react';
import { IconName } from '../../enums';
import { Wrapper } from './icon.styled';

import { IconProps, IconSettings } from './icon.types';
// import { ReactComponent as Logout } from './svg/addBook.svg';

export const Icon: React.FC<IconProps> = (props: IconProps): JSX.Element => {
  const { name, size = 20 }: IconProps = props;

  const settings: IconSettings = {
    width: `${size}px`,
    height: `${size}px`
  }

  function getIcon(): JSX.Element {
    switch (name) {
      // case IconName.Logout: return <Logout {...settings} />
      default: return <div />
    };
  };

  return (
    <Wrapper>
      {getIcon()}
    </Wrapper>
  );
};
