
import { useBackButton as backButton, useIonRouter } from '@ionic/vue';
import { App } from '@capacitor/app';
import { useRoute, useRouter } from 'vue-router'

export function useBackButton() {
  const ionRouter = useIonRouter();
  const route = useRoute()
  const router = useRouter();

  backButton(10, () => {
    if (route.path == '/characters') {
      App.exitApp();
    } else {
      ionRouter.back();
    }
  });
}
