import { useEffect, useState } from 'react';
import validator from 'validator';

import { setObjectValues } from '../utils/utils';

export default function useFormValidation(initialState, initialValids=false) {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState(setObjectValues(initialState, ''));
  const [valids, setValids] = useState(setObjectValues(initialState, initialValids));
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    setIsValid(Object.values(valids).every(valid => valid))
  }, [valids]);
  
  const handleChange = (e) => {
    const { name, value, validationMessage } = e.target;

    let errorMessage = validationMessage;
    
    if (name === 'email' && !validator.isEmail(value)) {
      errorMessage = 'Некорректный email';
    }
    
    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: errorMessage });
    setValids({ ...valids, [name]: !Boolean(errorMessage) });
  };

  return { values, handleChange, errors, isValid };
}
