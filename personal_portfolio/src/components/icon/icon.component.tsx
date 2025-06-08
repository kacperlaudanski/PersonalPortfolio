/// <reference types='vite-plugin-svgr/client' />
import React from 'react';

import { IconName } from '../../enums';

import { Wrapper } from './icon.styled';
import { IconProps, IconSettings } from './icon.types';
import AddBook from './svg/addBook.svg?react';
import Books from './svg/books.svg?react';
import Logout from './svg/logout.svg?react';
import Search from './svg/search.svg?react';

export const Icon: React.FC<IconProps> = (props: IconProps): JSX.Element => {
  const { name, size = 20 }: IconProps = props;

  const settings: IconSettings = {
    width: `${size}px`,
    height: `${size}px`
  }

  function getIcon(): JSX.Element {
    switch (name) {
      case IconName.AddBook: return <AddBook {...settings} />;
      case IconName.Books: return <Books {...settings} />
      case IconName.Logout: return <Logout {...settings} />;
      case IconName.Search: return <Search {...settings} />;
      default: return <div />
    };
  };

  return (
    <Wrapper>
      {getIcon()}
    </Wrapper>
  );
};
