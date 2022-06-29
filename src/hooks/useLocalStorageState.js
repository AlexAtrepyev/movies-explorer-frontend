import { useState } from 'react';

export default function useLocalStorageState(key, initialValue) {
  const [storageValue, setStorageValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      if (item) {
        return JSON.parse(item);
      } else {
        window.localStorage.setItem(key, JSON.stringify(initialValue));
        return initialValue;
      }
    } catch(err) {
      console.log(err);
      return initialValue;
    }
  });
  
  const setValue = (value) => {
    try {
      setStorageValue(value);
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch(err) {
      console.log(value);
    }
  };

  return [ storageValue, setValue ];
}
