import { useState } from 'react';
import { getLocalStorageTheme } from '@Utils/utils';

export const useTheme = (): [string, () => void] => {
  const [theme, setTheme] = useState(getLocalStorageTheme());

  function changeTheme(): void {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }

  document.body.setAttribute('data-theme', theme);
  localStorage.setItem('SuccessDiaryTheme', theme);

  return [theme, changeTheme];
};
