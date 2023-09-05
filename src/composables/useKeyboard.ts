import { isPlatform } from '@ionic/vue';
import { Keyboard } from '@capacitor/keyboard';

export function useKeyboard() {

  const hideKeyboard = () => {
    if (isPlatform('capacitor')) {
      Keyboard.hide()
    }
  }

  return {
    hideKeyboard
  }
}
