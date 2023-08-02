export const calculateDaysRemaining = (expirationDate) => {
  const today = new Date();
  const expiringDate = new Date(expirationDate);

  const timeDifference = Math.abs(expiringDate - today);
  const daysRemaining = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

  return daysRemaining;
};
