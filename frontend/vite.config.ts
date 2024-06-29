/// <reference types="vitest" />
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // vitest
  test: {
    globals: true, // vitest のAPIをImportなしで実行できるようにグローバルにインストール
    environment: 'jsdom', // テスト環境を jsdom に設定
    setupFiles: './vitest.setup.ts', // テスト実行前に読み込むファイルを指定
  },
});
