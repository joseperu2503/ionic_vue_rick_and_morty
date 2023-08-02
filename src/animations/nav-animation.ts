import { createAnimation } from '@ionic/vue';

export function createFadeAnimation(baseEl: HTMLElement, opts?: any) {
  const animation = createAnimation()
  .addElement(opts.enteringEl)
  .duration(90)
  .easing('ease-in')
  .fromTo('opacity',0,1);

  return animation;
}
