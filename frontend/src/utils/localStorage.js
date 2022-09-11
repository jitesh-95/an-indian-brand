export const setItemLocal = (key, value) => {
  return localStorage.setItem(key, value);
};

export const getItemLocal = (key) => {
  if (localStorage.getItem(key)) {
    return localStorage.getItem(key);
  }
  return undefined;
};

export const removeItemLocal = (key) => {
  return localStorage.removeItem(key);
};
