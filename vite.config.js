var _a;
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// GitHub Pages 배포 시 base 를 /<repo-name>/ 로 바꿔주세요.
// 사용자/조직 페이지(<user>.github.io)로 배포한다면 '/' 로 두면 됩니다.
// 환경변수 VITE_BASE 로도 오버라이드 가능합니다.
export default defineConfig({
    plugins: [react()],
    base: (_a = process.env.VITE_BASE) !== null && _a !== void 0 ? _a : '/ext/',
});
