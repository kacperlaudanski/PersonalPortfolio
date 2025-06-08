import React from 'react';

import { Headline } from '../../components/headline/headline.component';
import { useAuth } from '../../contexts';
import { HeadlineVariant } from '../../enums';
import { UseAuth } from '../../types';
import { BookGroup, Wrapper } from './booksPage.styled';
import { BookCard } from './components/bookCard/bookCard.component';
import ExampleImage from './components/bookCard/images/book.example.jpg'

export const BooksPage: React.FC = (): JSX.Element => {
  return (
    <Wrapper>
      <Headline counter={1} headline='Do przeczytania' variant={HeadlineVariant.Counter} />
      <BookGroup>
        <BookCard 
          author='David Goggins'
          image={ExampleImage}
          title='Nic mnie nie złamie'
          year='2023'
        />
        <BookCard 
          author='David Goggins'
          image={ExampleImage}
          title='Nic mnie nie złamie'
          year='2023'
        />
        <BookCard 
          author='David Goggins'
          image={ExampleImage}
          title='Nic mnie nie złamie'
          year='2023'
        />
                <BookCard 
          author='David Goggins'
          image={ExampleImage}
          title='Nic mnie nie złamie'
          year='2023'
        />
        <BookCard 
          author='David Goggins'
          image={ExampleImage}
          title='Nic mnie nie złamie'
          year='2023'
        />
        <BookCard 
          author='David Goggins'
          image={ExampleImage}
          title='Nic mnie nie złamie'
          year='2023'
        />
                <BookCard 
          author='David Goggins'
          image={ExampleImage}
          title='Nic mnie nie złamie'
          year='2023'
        />
        <BookCard 
          author='David Goggins'
          image={ExampleImage}
          title='Nic mnie nie złamie'
          year='2023'
        />
        <BookCard 
          author='David Goggins'
          image={ExampleImage}
          title='Nic mnie nie złamie'
          year='2023'
        />
      </BookGroup>
    </Wrapper>
  )
}
