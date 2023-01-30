import { Label, Header } from './FilterStyle';
import { useSelector,useDispatch } from 'react-redux';
import { changeFilter } from 'redux/contacts/filterSlice';
import { getFilter } from 'redux/contacts/selectors';
import { Input } from '@chakra-ui/react'



export const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const setFilter = e => {dispatch(changeFilter(e.target.value))}
  return (
    <Label>
      <Header>Find contacts by name</Header>
      <Input 
      mb={5}
      htmlSize={57} width='auto'
      type="text" 
      value={filter} 
      onChange={setFilter} 
      variant='flushed' 
      placeholder='Search contact' />
    </Label>
  );
};

