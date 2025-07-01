import { useEffect, useState } from 'react';
export default function DarkModeToggle() {
  const [dark, setDark] = useState(false);
  useEffect(() => {
    if (document.documentElement.classList.contains('dark')) setDark(true);
  }, []);
  function toggle() {
    document.documentElement.classList.toggle('dark');
    setDark(!dark);
  }
  return <button onClick={toggle} className="ml-2 p-1 bg-gray-300 dark:bg-gray-600 rounded">{dark ? '🌙' : '☀️'}</button>;
}
