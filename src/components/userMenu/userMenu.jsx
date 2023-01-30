import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import { Box, Text } from './userMenuStyled';
import { Avatar, Button } from '@chakra-ui/react';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Box>
      <Text>Welcome, {user.name}</Text>
      <Avatar ml={1} mr={10} size="xs" name={user.name}></Avatar>
      <Button
        size='sm'
        colorScheme="red"
        variant="solid"
        type="button"
        onClick={() => dispatch(logOut())}
      >
        Logout
      </Button>
    </Box>
  );
};
