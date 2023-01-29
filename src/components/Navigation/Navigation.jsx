import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks';
import { NavigationStyled } from './NavigationStyled';
import { Button} from '@chakra-ui/react'

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <NavigationStyled>
      <NavLink to="/">
      <Button size='sm' colorScheme='teal' variant='outline'>
      Home
      </Button>  
      </NavLink>
      {isLoggedIn && <NavLink to="/contacts">Contacts</NavLink>}
    </NavigationStyled>
  );
};
