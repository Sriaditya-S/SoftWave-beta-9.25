const STORAGE_KEY = 'softwave_visited';

export const isFirstVisit = (): boolean => {
  try {
    const visited = localStorage.getItem(STORAGE_KEY);
    if (!visited) {
      localStorage.setItem(STORAGE_KEY, 'true');
      return true;
    }
    return false;
  } catch (error) {
    // Fallback in case localStorage is not available
    console.warn('LocalStorage not available:', error);
    return false;
  }
};