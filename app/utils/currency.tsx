export default function toCurrency(value: number, fractionDigits: number = 0) {
  const formatter = new Intl.NumberFormat(undefined, {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: fractionDigits,
  });

  return formatter.format(value);
}
