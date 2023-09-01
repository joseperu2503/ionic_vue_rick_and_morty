import { http } from "@/http/http.service";
import { ref } from "vue";
import { Character, initCharacter } from "@/interfaces/character.interface.ts";
import { useSomeEpisodes } from "@/composables/useSomeEpisodes";

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

  return {
    getCharacter,
    character,
    loadingCharacter,
    episodes,
    loadingEpisodes
  };
}
