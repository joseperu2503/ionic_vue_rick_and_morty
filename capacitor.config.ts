import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'rick_and_morty_ionic_vue',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
