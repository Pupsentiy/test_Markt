export const totalDate = () => {
  const date = new Date()
    .toLocaleDateString()
    .replace(/[\s.,%]/g, '')
    .split('');

  return date.reduce((acc, n) => {
    return acc + Number(n);
  }, 0);
};
