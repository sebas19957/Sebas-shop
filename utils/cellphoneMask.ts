export const cellphoneMask = (value: string) => {
  const numbers = value.match(/\d/g);
  let numberLength = 0;
  if (numbers) {
    numberLength = numbers.join("").length;
  }
  if (numberLength > 10) {
    return [
      "(",
      /\d/,
      /\d/,
      /\d/,
      ")",
      " ",
      /\d/,
      /\d/,
      /\d/,
      "-",
      /\d/,
      /\d/,
      /\d/,
      /\d/,
    ];
  }
  return [
    "(",
    /\d/,
    /\d/,
    /\d/,
    ")",
    " ",
    /\d/,
    /\d/,
    /\d/,
    "-",
    /\d/,
    /\d/,
    /\d/,
    /\d/,
  ];
};
