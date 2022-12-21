export default function formatMoney() {
  const options = {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
  };

  const formatter = Intel.NumberFormat('en-US', options);

  return formatter.format(amount);
}
