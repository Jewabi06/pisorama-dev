import { useState, useEffect, useRef } from 'react';

export function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(initialValue);
  const isMounted = useRef(false);

  useEffect(() => {
    let cancelled = false;

    Promise.resolve().then(() => {
      try {
        const item = window.localStorage.getItem(key);
        if (item && !cancelled) {
          setValue(JSON.parse(item));
        }
      } catch (error) {
        console.error("Error reading localStorage key " + key + ":", error);
      } finally {
        if (!cancelled) {
          isMounted.current = true;
        }
      }
    });

    return () => {
      cancelled = true;
    };
  }, [key]);

  useEffect(() => {
    if (!isMounted.current) return;
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error("Error setting localStorage key " + key + ":", error);
    }
  }, [key, value]);

  return [value, setValue];
}