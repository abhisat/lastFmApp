import React, { useRef, useEffect } from "react";

const useUpdateEffect = (effect: any, dependencies: Array<any> = []) => {
  const isInitialMount = useRef(true);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      effect();
    }
  }, dependencies);
};

export { useUpdateEffect };
