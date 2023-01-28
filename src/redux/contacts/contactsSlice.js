import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts,addContact,deleteContact } from './operation';

const handlePending = state =>{
  state.isLoading = true
}
const handleRejected = (state,action) => {
  state.isLoading = false;
  state.error = action.payload;
}
const itemsFullFilled = (state,action) => {
  state.isLoading = false;
  state.error = null;
  state.items = action.payload;
}
const addItemsFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.items.push(action.payload);
};
const handleDelete = (state,action) => {
state.isLoading = false
state.error = null
const index = state.items.findIndex(contact => contact.id !== action.payload)
state.items.splice(index,1);
}
const contactsSlice = createSlice({
    name: 'contacts',
 initialState:{
    items: [],
    isLoading: false,
    error: null,
},
extraReducers:(builder) => {
  builder
    .addCase(fetchContacts.pending,handlePending)
    .addCase(fetchContacts.rejected,handleRejected)
    .addCase(fetchContacts.fulfilled,itemsFullFilled)
    .addCase(addContact.pending,handlePending)
    .addCase(addContact.rejected,handleRejected)
    .addCase(addContact.fulfilled,addItemsFulfilled) 
    .addCase(deleteContact.pending,handlePending)
    .addCase(deleteContact.rejected,handleRejected)
    .addCase(deleteContact.fulfilled,handleDelete)
  },
});
// export const { fetchingInProgress,fetchingSuccess,fetchingError,addContacts, deleteContacts } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
