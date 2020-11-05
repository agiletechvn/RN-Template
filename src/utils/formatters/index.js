export const normalizeOptions = (options) => {
  if (!Array.isArray(options) && typeof options !== 'object') {
    return normalizeOptions([options]);
  }

  if (options.length === 1) {
    const [value] = options;
    return [value, value, value, value];
  }

  if (options.length === 2) {
    return [...options, ...options];
  }

  return options;
};
