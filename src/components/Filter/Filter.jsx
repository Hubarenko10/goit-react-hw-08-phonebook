import { Label, Input, Header } from './FilterStyle';
import { useSelector,useDispatch } from 'react-redux';
import { changeFilter } from 'redux/contacts/filterSlice';
import { getFilter } from 'redux/contacts/selectors';

export const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const setFilter = e => {dispatch(changeFilter(e.target.value))}
  return (
    <Label>
      <Header>Find contacts by name</Header>
      <Input type="text" value={filter} onChange={setFilter} />
    </Label>
  );
};

