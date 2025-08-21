// App constants
export const APP_NAME = 'SergioDimurro App';
export const APP_VERSION = '1.0.0';

// API endpoints
export const API_ENDPOINTS = {
  LOGIN: '/login',
  LOGOUT: '/logout',
  REGISTER: '/register',
  PROFILE: '/profile',
  DASHBOARD: '/dashboard',
};

// Validation rules
export const VALIDATION_RULES = {
  PASSWORD_MIN_LENGTH: 8,
  USERNAME_MIN_LENGTH: 3,
  EMAIL_REGEX: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
};

// UI constants
export const UI = {
  SIDEBAR_WIDTH: '16rem', // 256px
  HEADER_HEIGHT: '4rem', // 64px
  MODAL_ANIMATION_DURATION: 200,
  TOAST_DURATION: 5000,
};

// Status colors
export const STATUS_COLORS = {
  success: 'green',
  warning: 'yellow',
  error: 'red',
  info: 'blue',
  default: 'gray',
};
