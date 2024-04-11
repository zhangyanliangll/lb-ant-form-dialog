import pkg from './package.json'

import { fileURLToPath, URL } from 'node:url'
import type { UserConfigExport } from 'vite'
import { defineConfig } from 'vite'
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
// import dts from 'vite-plugin-dts'

export default defineConfig((configEnv) => {
  const defaultConfig: UserConfigExport = {
    plugins: [vue(), vueJsx()],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./packages', import.meta.url))
      },
      extensions: ['.js', '.ts', '.jsx', '.tsx', '.json', '.vue', '.mjs']
    }
  }

  // 当执行 yarn lib 设置环境变量 --mode lib 时
  if (configEnv.mode === 'lib') {
    defaultConfig.build = {
      cssCodeSplit: false,
      lib: {
        entry: resolve(__dirname, 'packages/index.ts'),
        name: pkg.name,
        fileName: pkg.name
      },
      rollupOptions: {
        external: ['vue'],
        output: {
          globals: {
            vue: 'Vue'
          },
          dir: 'lib'
        }
      }
    }
  }

  defaultConfig.server = {
    open: false,
    host: true
  }

  return defaultConfig
})
