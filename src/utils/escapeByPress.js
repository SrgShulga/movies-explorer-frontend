/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";

function UseEscapeByPress(callback, dependency) {
  useEffect(() => {
    if (dependency) {
      const closeOnEsc = (evt) => {
        if (evt.key === 'Escape') {
          callback()
        }
      }
      document.addEventListener('keyup', closeOnEsc);

      return () => {
        document.removeEventListener('keyup', closeOnEsc)
      };
    }
  }, [dependency])
}

export default UseEscapeByPress;