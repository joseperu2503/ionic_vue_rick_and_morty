import { http } from "@/http/http.service";
import { ref } from "vue";
import { Character, initCharacter } from "@/interfaces/character.interface.ts";
import { useSomeEpisodes } from "@/composables/useSomeEpisodes";
import { FastAverageColor } from 'fast-average-color';

export function useCharacter() {

  const character = ref<Character>(initCharacter);
  const loadingCharacter = ref<boolean>(true);
  const loadingEpisodes = ref<boolean>(true);
  const { episodes, getSomeEpisodes } = useSomeEpisodes();

  const getCharacter = async (characterId: string) => {
    loadingCharacter.value = true;
    loadingEpisodes.value = true;

    let response = await http.get<Character>(`character/${characterId}`)
    character.value = response.data;
    loadingCharacter.value = false;
    setBackgroundColor(character.value.image)
    let episodesId: string[] = [];

    character.value.episode.map((url) => {
      const parts = url.split("/");
      const id = parts[parts.length - 1];
      episodesId.push(id);
    });

    if (episodesId.length > 0) {
      let someEpisodes = episodesId.join(",");
      await getSomeEpisodes(someEpisodes);
    }
    loadingEpisodes.value = false;
  };

  const backgroundColor = ref('var(--ion-background-color)');

  const setBackgroundColor = async (imageUrl: string) => {
    try {
      const fac = new FastAverageColor();
      const response = await fac.getColorAsync(imageUrl)
      console.log(response)
      const value = response.value
      // backgroundColor.value = response.hex
      backgroundColor.value = `rgb(${value[0]-50},${value[1]-50},${value[2]-50})`
       console.log(backgroundColor.value)
    } catch {

    }
  }

  return {
    getCharacter,
    character,
    loadingCharacter,
    episodes,
    loadingEpisodes,
    backgroundColor
  };
}
