/// <reference types="vitest" />
import * as path from 'node:path';

import { TRequiredFields } from '@shared/types';
import react from '@vitejs/plugin-react-swc';
import { ConfigEnv, defineConfig, loadEnv, ServerOptions, UserConfig } from 'vite';

type TServerOptions = TRequiredFields<ServerOptions, 'proxy'>;

// https://vitejs.dev/config/
export default defineConfig(({ mode }: ConfigEnv): UserConfig => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  const appPort = process.env.VITE_APP_PORT;
  const baseUrl = process.env.VITE_API_BASE_URL ?? '/api';

  const serverOptions: TServerOptions = {
    proxy: {}
  };

  serverOptions.proxy[baseUrl] = {
    target: `http://localhost:${appPort}`,
  };

  return {
    plugins: [react()],
    resolve: {
      alias: {
        '@app': path.resolve(__dirname, './src'),
        '@api': path.resolve(__dirname, './src/api'),
        '@pages': path.resolve(__dirname, './src/pages'),
        '@components': path.resolve(__dirname, './src/components'),
        '@shared': path.resolve(__dirname, './src/shared'),
        '@assets': path.resolve(__dirname, './src/assets'),
        '@tests': path.resolve(__dirname, './src/tests'),
      }
    },
    server: serverOptions,
    css: {
      transformer: 'lightningcss',
    },
    build: {
      cssMinify: 'lightningcss',
    },
    test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: './src/tests/setup.ts',
      css: true,
      coverage: {
        provider: 'istanbul'
      }
    }
  };
});
