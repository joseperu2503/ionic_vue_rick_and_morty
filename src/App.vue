<template>
  <ion-app>
    <ion-router-outlet />
  </ion-app>
</template>

<script setup lang="ts">
import { IonApp, IonRouterOutlet } from '@ionic/vue';
import { useBackButton } from '@/composables/useBackButton';
import { StatusBar } from '@capacitor/status-bar';
import { SafeArea } from 'capacitor-plugin-safe-area';
import { isPlatform } from '@ionic/vue';

useBackButton()

if (isPlatform('capacitor')) {
  StatusBar.setOverlaysWebView({ overlay: true });
}

interface SafeAreaInterface {
  top: number;
  right: number;
  bottom: number;
  left: number;
}

//bloqueo de orientacion
window.screen.orientation.lock('portrait');

//seteo del safe area
SafeArea.getSafeAreaInsets().then(({ insets }) => {
  setInsets(insets)
});

const setInsets = (insets: SafeAreaInterface) => {
  for (const [key, value] of Object.entries(insets)) {
    document.documentElement.style.setProperty(
      `--safe-area-${key}`,
      `${value}px`,
    );
  }
}

</script>

