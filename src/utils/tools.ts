/**
 * This function takes a number and returns a string with the number divided by 16 and appended with
 * the string 'rem'.
 * @param {number} value - number
 * @returns A string with the value of the number divided by 16 and the string 'rem' appended to the
 * end.
 */
export function pxToRem(value: number) {
  return `${value / 16}rem`;
}

/**
 * It takes in an object with three properties, each of which is a number, and returns an object with
 * three properties, each of which is a string.
 * @param  - {
 * @returns An object with 3 keys, each with a value of an object with a single key and value.
 */
export function responsiveFontSizes({
  sm,
  md,
  lg,
}: {
  sm: number;
  md: number;
  lg: number;
}) {
  return {
    "@media (min-width:600px)": {
      fontSize: pxToRem(sm),
    },
    "@media (min-width:900px)": {
      fontSize: pxToRem(md),
    },
    "@media (min-width:1200px)": {
      fontSize: pxToRem(lg),
    },
  };
}

/**
 * It returns true if the number is negative or NaN, otherwise it returns false
 * @param {number} num - number
 * @returns A function that takes a number and returns a boolean.
 */
export function isNegative(num: number) {
  if (Math.sign(num) === -1 || isNaN(num)) {
    return true;
  }
  return false;
}

/**
 * If the BFP is between 0 and 9, subtract 2 from the percentage, if the BFP is between 9 and 20,
 * subtract 4 from the percentage, otherwise subtract 5 from the percentage.
 * @param  - {
 * @returns A function that takes an object with two properties, percentage and BFP, and returns a
 * number.
 */
export function calcPercentageFlag({
  percentage,
  BFP,
}: {
  percentage: number;
  BFP: number;
}) {
  let result = 0;
  if (BFP >= 0 && BFP < 9) {
    result = percentage - 2;
  } else if (BFP > 9 && BFP < 20) {
    result = percentage - 4;
  } else {
    result = percentage - 5;
  }
  return result;
}

export const stringToHTML = function (str: string) {
  var parser = new DOMParser();
  var doc = parser.parseFromString(str, "text/html");
  return doc.body;
};
