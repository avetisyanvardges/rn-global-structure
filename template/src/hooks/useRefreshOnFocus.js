import * as React from 'react';
import { useFocusEffect } from '@react-navigation/native';

function useRefreshOnFocus(refetch) {
  const enabledRef = React.useRef(false);

  useFocusEffect(
    React.useCallback(() => {
      if (enabledRef.current) {
        refetch();
      } else {
        enabledRef.current = true;
      }
    }, [refetch]),
  );
}

export { useRefreshOnFocus };
