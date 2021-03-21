export const stringMerge = (value, ...args) => value.replace(/%s/gi, () => args.shift());
