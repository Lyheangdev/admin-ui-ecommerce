export const useLocalStore = <T>() => {
  const getLocalData = (key: string) => {
    if (typeof window == 'undefined') return null;
    const data = window.localStorage.getItem(key) || null;
    try {
      return data ? (JSON.parse(data) as T) : null;
    } catch {
      return null;
    }
  };

  const updateLocalData = (key: string, value: T) => {
    if (typeof window === 'undefined') return;
    window.localStorage.setItem(key, JSON.stringify(value));
  };

  return {
    getLocalData,
    updateLocalData,
  };
};
