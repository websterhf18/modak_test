import React, {useState, useCallback} from 'react';

const useToggle = (initialValue = false): [boolean, (v?: boolean) => void] => {
  const [value, setValue] = useState(initialValue);

  const toggle = useCallback((overrideValue?: boolean) => {
    if (overrideValue !== undefined) {
      setValue(overrideValue);
    } else {
      setValue(v => !v);
    }
  }, []);

  return [value, toggle];
};

export default useToggle;
