import { Wrapper } from './booksPage.styled';
import { BookCard } from './components/bookCard/bookCard.component';
import ExampleImage from './components/bookCard/images/book.example.jpg'

export const BooksPage: React.FC = (): JSX.Element => {
  return (
    <Wrapper>
      books
      <BookCard 
        author='David Goggins'
        image={ExampleImage}
        title='Nic mnie nie złamie'
        year='2023'
      />
    </Wrapper>
  )
}
