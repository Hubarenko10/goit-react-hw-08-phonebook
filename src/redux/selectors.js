import { createSelector } from '@reduxjs/toolkit';

export const getContacts = state => state.contacts.items;
export const getFilter = state => state.filter;
export const getIsLoading = state => state.contacts.isLoading;
export const getError = state => state.contacts.error;

export const selectFilter = createSelector(
    [getContacts,getFilter],
    (contacts,filter) => {
        const normalizedFilter = filter.toLowerCase();
        return contacts.filter(({ name }) =>
        name.toLowerCase().includes(normalizedFilter))
    }
    
    )