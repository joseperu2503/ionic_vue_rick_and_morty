
import { storeToRefs } from "pinia";
import { useAppbarStore } from "@/stores/appbar";

export function useScroll() {
  const appbarStore = useAppbarStore();
  const { opacity } = storeToRefs(appbarStore);

  const scroll = () => {
    let scroll = document.getElementById("body")?.scrollTop;
    if (scroll != undefined && scroll <= 180) {
      opacity.value = scroll / 180;
    } else {
      opacity.value = 1;
    }
  };

  return {
    scroll
  }
}
