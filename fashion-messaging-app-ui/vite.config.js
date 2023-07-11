import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/MetaU_Fashion_Capstone_Troubleshooting/',
  plugins: [react()],
})
