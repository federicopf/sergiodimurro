import { VALIDATION_RULES } from '../constants';

// Email validation
export const isValidEmail = (email) => {
  return VALIDATION_RULES.EMAIL_REGEX.test(email);
};

// Password validation
export const validatePassword = (password) => {
  const errors = [];
  
  if (password.length < VALIDATION_RULES.PASSWORD_MIN_LENGTH) {
    errors.push(`La password deve essere di almeno ${VALIDATION_RULES.PASSWORD_MIN_LENGTH} caratteri`);
  }
  
  if (!/(?=.*[a-z])/.test(password)) {
    errors.push('La password deve contenere almeno una lettera minuscola');
  }
  
  if (!/(?=.*[A-Z])/.test(password)) {
    errors.push('La password deve contenere almeno una lettera maiuscola');
  }
  
  if (!/(?=.*\d)/.test(password)) {
    errors.push('La password deve contenere almeno un numero');
  }
  
  return {
    isValid: errors.length === 0,
    errors
  };
};

// Username validation
export const validateUsername = (username) => {
  const errors = [];
  
  if (username.length < VALIDATION_RULES.USERNAME_MIN_LENGTH) {
    errors.push(`L'username deve essere di almeno ${VALIDATION_RULES.USERNAME_MIN_LENGTH} caratteri`);
  }
  
  if (!/^[a-zA-Z0-9_-]+$/.test(username)) {
    errors.push('L\'username può contenere solo lettere, numeri, trattini e underscore');
  }
  
  return {
    isValid: errors.length === 0,
    errors
  };
};

// Required field validation
export const isRequired = (value) => {
  if (typeof value === 'string') {
    return value.trim().length > 0;
  }
  return value !== null && value !== undefined;
};

// URL validation
export const isValidUrl = (url) => {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};

// Phone number validation (Italian format)
export const isValidPhoneNumber = (phone) => {
  const phoneRegex = /^(\+39|0039)?[ ]?[0-9]{3}[ ]?[0-9]{3}[ ]?[0-9]{4}$/;
  return phoneRegex.test(phone.replace(/\s/g, ''));
};

// Generic form validation
export const validateForm = (data, rules) => {
  const errors = {};
  
  Object.keys(rules).forEach(field => {
    const value = data[field];
    const fieldRules = rules[field];
    
    if (fieldRules.required && !isRequired(value)) {
      errors[field] = 'Questo campo è obbligatorio';
    } else if (value && fieldRules.email && !isValidEmail(value)) {
      errors[field] = 'Email non valida';
    } else if (value && fieldRules.minLength && value.length < fieldRules.minLength) {
      errors[field] = `Minimo ${fieldRules.minLength} caratteri`;
    } else if (value && fieldRules.maxLength && value.length > fieldRules.maxLength) {
      errors[field] = `Massimo ${fieldRules.maxLength} caratteri`;
    } else if (value && fieldRules.pattern && !fieldRules.pattern.test(value)) {
      errors[field] = fieldRules.message || 'Formato non valido';
    }
  });
  
  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};
