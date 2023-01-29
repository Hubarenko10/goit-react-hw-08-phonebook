import { Register,Login,Wrap } from './AuthNavStyled';
import { Button } from '@chakra-ui/react'

export const AuthNav = () => {
  return (
    <Wrap>
      <Register to="/register">
      <Button size='sm' colorScheme='green'>Register</Button>
      </Register>
      <Login to="/login">
      <Button size='sm' colorScheme='yellow'>Log in</Button>
      </Login>
    </Wrap>
  );
};
