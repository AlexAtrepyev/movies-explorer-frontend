import { useState, useCallback } from 'react';

export default function useCustomState(key, defaultValue) {
  const [state, updateState] = useState(localStorage[key] ? JSON.parse(localStorage[key]) : defaultValue);
  
  const setState = useCallback(
    (newValue) => {
      localStorage[key] = JSON.stringify(newValue);
      updateState(newValue);
    },
    [key]
  );

  return [ state, setState ];
}
