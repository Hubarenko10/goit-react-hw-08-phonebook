import {Wrapper,Header} from './HomeStyled'
 export const Home = () => {
  return (
    <>
    <hr />
    <Wrapper>
      <Header>
        Phonebook welcome page{' '}
        <span role="img" aria-label="Greeting icon">
          💁‍♀️
        </span>
      </Header>
    </Wrapper>
    </> 
  );

}

export default Home;