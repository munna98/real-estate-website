// src/utils/formatters.js
export const formatPrice = (price, status) => {
  return status === 'rent'
    ? `$${price.toLocaleString()}/month`
    : `$${price.toLocaleString()}`;
};