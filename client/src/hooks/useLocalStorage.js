import { useState } from 'react';

export const useLocalStorage = (key, initialValue = false) => {
    //set up state property
    //capture the values of the input
    //if local data does not have that, use intial data
    //update localStorage when needed
    //Don't forget to parse data from localStorage
    //and stringify new data getting stored

    const [storedValue, setStoredValue] = useState(() => {
        // Get from local storage by key
        const item = JSON.parse(window.localStorage.getItem(key))
        if (item) {
            return item;
        } else {
            window.localStorage.setItem(key, JSON.stringify(initialValue));
            return initialValue;
        }
        //
    });

    const setValue = value => {
        // save state
        setStoredValue(value);
        // save to local storage
        window.localStorage.setItem(key, JSON.stringify(value));
    };

    return [storedValue, setValue];
}