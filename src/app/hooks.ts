import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "./store";

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

import { useEffect, useRef, useState } from "react";

export const useClose = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // mouseRef should reference an HTML element
  const mouseRef = useRef<HTMLElement | null>(null);

  const reverseFunction = (bool?: boolean) => {
    if (typeof bool === "boolean") {
      setIsOpen(bool);
    } else {
      setIsOpen((prevState) => !prevState);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        mouseRef.current &&
        !mouseRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return { isOpen, setIsOpen, mouseRef, reverseFunction };
};
