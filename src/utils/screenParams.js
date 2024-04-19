import { useCallback, useEffect, useState } from "react";

function useScreenWidth() {
  const getScreenParams = useCallback(() => window.innerWidth, [])
  const [screenWidth, setScreenWidth] = useState(getScreenParams());

  useEffect(() => {

    function handleScreenScale() {
      setScreenWidth(getScreenParams());
    };

    window.addEventListener('resize', resizeController, false);

    function resizeController() {
      let resizeTimer
      if (!resizeTimer) {
        resizeTimer = setTimeout(() => {
          resizeTimer = null;
          handleScreenScale()
        }, 1000);
      };

      return () => window.removeEventListener('resize', handleScreenScale);
    }
  }, [getScreenParams]);

  return screenWidth;
}

export default useScreenWidth;