//src/utils/validators.js 

export const isRequired = (value) => {
  return value !== undefined && value !== null && value !== '';
}

export const isEmail = (value) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(value);
}

export const isMinLength = (value, minLength) => {
    return typeof value === 'string' && value.length >= minLength;
}

export const isMaxLength = (value, maxLength) => {
    return typeof value === 'string' && value.length <= maxLength;
}

export const isNumeric = (value) => {
    return !isNaN(value);
}

export const isPositiveNumber = (value) => {
    return isNumeric(value) && Number(value) > 0;
}

export const isInRange = (value, min, max) => {
    return isNumeric(value) && Number(value) >= min && Number(value) <= max;
}

export const isValidDate = (value) => {
    return !isNaN(Date.parse(value));
}

export const isFutureDate = (value) => {
    const date = new Date(value);
    const now = new Date();
    return date > now;
}

export const isPastDate = (value) => {
    const date = new Date(value);
    const now = new Date();
    return date < now;
}

