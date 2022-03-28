import React, { useState, useEffect } from "react";
import { debounce } from "lodash";

export const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    // debounce((value) => setDebouncedValue(value), delay)(value);
    const timeout = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(timeout);
  }, [value, delay]);

  return debouncedValue;
};
