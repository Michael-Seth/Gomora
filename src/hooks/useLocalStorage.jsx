import { useState } from 'react';

export default function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  const setValue = value => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error(error);
    }
  };

  const removeValue = () => {
    try {
      setStoredValue(null);
      window.localStorage.removeItem(key);
    } catch (error) {
      console.error(error);
    }
  };

  return [storedValue, setValue, removeValue];
}

// import { useEffect, useState } from "react"

// export default function useLocalStorage() {
//     const [value, setValue] = useState(()=>{
//         const jsonVal = localStorage.getItem(key)
//         if (jsonVal !== null) return JSON.parse(jsonVal)

//         if (typeof InitialValue === "function") {
//             return (InitialValue)
//         } else {
//             return InitialValue
//         }
//     })

//     useEffect(()=> {
//         localStorage.setItem(key, JSON.stringify(value))
//     }, [key, value])
//   return [value, setValue] as [typeof value, typeof setValue]
