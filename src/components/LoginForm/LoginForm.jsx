import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import {
  FormControl,
  FormLabel,
  Input,
  InputRightElement,
  InputGroup,
  Button,
  Box,
} from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons'
import { useState } from 'react';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false)
  const handleClick = () => setShow(!show)

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };
  return (
    <>
    <hr />
    <form onSubmit={handleSubmit} autoComplete="off">
      <FormControl>
      <FormLabel mt={7}>Email</FormLabel>
      <Input mb={5} type="email" name="email" placeholder="Enter email" />
      </FormControl>
      <FormControl>
      <FormLabel>Password</FormLabel>
      <InputGroup size='md'>
    <Input mb={10}
    name="password"
    pr='4.5rem'
    type={show ? 'text' : 'password'}
    placeholder='Enter password' />
    <InputRightElement width='4.5rem'>
        <Button h='1.75rem' size='sm' onClick={handleClick}>
          {show ? 'Hide' : 'Show'}
        </Button>
      </InputRightElement>
    </InputGroup>
      </FormControl>
      <Box
    display='flex'
    alignItems='center'
    justifyContent='center'
    width='100%'
  >
<Button rightIcon={<ArrowForwardIcon />} colorScheme='yellow' type="submit" size='lg'>Log in</Button>
  </Box>
    </form>
    </>
  );
};
