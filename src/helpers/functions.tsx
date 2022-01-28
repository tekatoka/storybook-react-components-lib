export function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export const decimalCount = (num) => {
  const numStr = String(num);
  if (numStr.includes(".")) {
    return numStr.split(".")[1].length;
  }
  return 0;
};

export const formatNumberValue = (originalValue: any, decimalsLimit?: number) => {
  let value = originalValue ? originalValue : "";
  if (decimalsLimit && decimalCount(value) > decimalsLimit)
    value = parseFloat(value).toFixed(decimalsLimit);
  else if (value.toString().endsWith(".")) value = value.replace(".", ",");
  return value;
};

export const unformatNumberValue = (value, groupSeparator, decimalSeparator) => {
  return value
    ? value
        .replaceAll(groupSeparator, "")
        .replace(decimalSeparator, ".")
        .replace(decimalSeparator, "")
    : "";
};
