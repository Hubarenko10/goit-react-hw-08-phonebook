import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import {
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  InputRightElement,
  InputGroup,
  Button,
  Box
} from '@chakra-ui/react';
import { useState } from 'react';


export const RegisterForm = () => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false)
  const handleClick = () => setShow(!show)

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
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
    <FormLabel mt={7}>Username</FormLabel>
    <Input mb={5} type="text" name="name" placeholder='Enter username'/>
    </FormControl>
    <FormControl>
    <FormLabel>Email</FormLabel>
    <Input   type="email" name="email" placeholder='Enter email'/>
    <FormHelperText mb={5}>We'll never share your email.</FormHelperText>
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
<Button colorScheme='whatsapp' type="submit" size='lg'>Register</Button>
  </Box>
      
    </form>
    </>
  );
};

 