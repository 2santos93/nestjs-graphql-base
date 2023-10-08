import { registerAs } from '@nestjs/config';

export default registerAs('app', () => ({
  environment: process.env.ENVIRONMENT ?? 'dev',
  appName: process.env.APP_NAME ?? 'influtech',
  port: process.env.APP_PORT ? Number(process.env.APP_PORT) : 9376
}));
