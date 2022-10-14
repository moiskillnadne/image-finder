export const useAuth = () => {
  const user = localStorage.getItem('username');

  return user;
};
