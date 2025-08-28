export function createPageUrl(pageName) {
  const key = pageName.toLowerCase().replace(/[\s_-]/g, '');
  const overrides = {
    retailhub: '/catalog/retail-hub',
    home: '/',
  };
  if (overrides[key]) {
    return overrides[key];
  }
  return '/' + pageName.toLowerCase().replace(/ /g, '-');
}

export function cn(...inputs) {
  // Lightweight merge similar to original project
  try {
    const { twMerge } = require('tailwind-merge');
    const clsx = require('clsx');
    return twMerge(clsx(inputs));
  } catch (_e) {
    return inputs.filter(Boolean).join(' ');
  }
}


