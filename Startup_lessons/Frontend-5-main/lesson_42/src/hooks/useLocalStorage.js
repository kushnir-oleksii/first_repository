import { useState, useEffect } from "react";

function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(initialValue);
  useEffect(() => {
    localStorage.getItem(key)
      ? setValue(+localStorage.getItem(key))
      : setValue(value);
  }, []);

  return [value, setValue];
}

export default useLocalStorage;
