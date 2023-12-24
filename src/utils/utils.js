export function maskingName(name) {
  if (name.length <= 2) {
    return name.replace(name.charAt(0), '*');
  }

  const middlePartLength = name.length - 2;
  const maskedMiddlePart = '*'.repeat(middlePartLength);

  return name[0] + maskedMiddlePart + name.charAt(name.length - 1);
}
