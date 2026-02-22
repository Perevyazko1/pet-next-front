export const formatPhone = (raw: string): string => {
  const digits = raw.replace(/\D/g, '');
  const body =
    digits.startsWith('7') || digits.startsWith('8')
      ? digits.slice(1)
      : digits;
  const d = body.slice(0, 10);
  if (!d) return '';
  let result = '+7 (' + d.slice(0, 3);
  if (d.length <= 3) return result;
  result += ') ' + d.slice(3, 6);
  if (d.length <= 6) return result;
  result += '-' + d.slice(6, 8);
  if (d.length <= 8) return result;
  return result + '-' + d.slice(8, 10);
};
