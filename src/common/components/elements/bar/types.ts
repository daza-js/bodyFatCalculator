/**
 * TypeMetrics is an object whose keys are strings and whose values are arrays of TypeValuesMetrics.
 * @property {TypeValuesMetrics[]} [key: TypeValuesMetrics[]] - This is the type of the object's keys.
 */
export type TypeMetrics = {
  [key: string]: TypeValuesMetrics[];
};

type TypeValuesMetrics = {
  subtitle1: string;
  subtitle2: string;
  value: number;
  color: string;
  left: number;
};

/**
 * TypeRootBar is an object with a single property, captionsMetrics, which is an array of
 * TypeValuesMetrics.
 * @property {TypeValuesMetrics[]} captionsMetrics - TypeValuesMetrics[];
 */
export type TypeRootBar = {
  captionsMetrics: TypeValuesMetrics[];
};

/**
 * TypeContentCaption is an object with a property called left that is a number.
 * @property {number} left - number;
 */
export type TypeContentCaption = {
  left: number;
};

/**
 * TypeColor is an object with a property called color that is a string.
 * @property {string} color - string;
 */
export type TypeColor = {
  color: string;
};

/**
 * TypeRootFlag is an object with a number property called percentage and a number property called BFP.
 * @property {number} percentage - The percentage of the total that this flag represents.
 * @property {number} BFP - Body Fat Percentage
 */
export type TypeRootFlag = {
  percentage: number;
  BFP: number;
};