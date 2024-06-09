export function formatCurrency(value: number) {
  return value.toLocaleString('pt-CFA', {
    style: 'currency',
    currency: 'CFA',
  });
}
