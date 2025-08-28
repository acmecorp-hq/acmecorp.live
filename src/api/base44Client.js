import { createClient } from '@base44/sdk';
// import { getAccessToken } from '@base44/sdk/utils/auth-utils';

// Create a client without forcing authentication
export const base44 = createClient({
  appId: "68afd0915825600a75001f54", 
  requiresAuth: false
});
