export const CONFIG = {
  appName: 'HarvestAIQ',
  appVersion: '1.0.0',
  assetsDir: '/assets',
  serverUrl: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api',
  auth: {
    method: 'jwt',
    skip: false,
    redirectPath: '/dashboard',
  },
  isStaticExport: false,
};
