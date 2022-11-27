import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'mero-network-trying',
  webDir: 'dist',
  bundledWebRuntime: false,
  server: {
    url: "http://192.168.10.114:8100"
  }
};

export default config;
