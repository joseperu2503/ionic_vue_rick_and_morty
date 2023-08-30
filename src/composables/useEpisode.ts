import { http } from "@/http/http.service";
import { ref } from "vue";
import { Episode, initEpisode } from "@/interfaces/episode.interface.ts";
import { useSomeCharacters } from "@/composables/useSomeCharacters";

export function useEpisode() {

  const episode = ref<Episode>(initEpisode);
  const loadingEpisode = ref<boolean>(true);
  const loadingCharacters = ref<boolean>(true);
  const { characters, getSomeCharacters } = useSomeCharacters();

  const getEpisode = async (episodeId: string) => {
    loadingEpisode.value = true;
    loadingCharacters.value = true

    let response = await http.get<Episode>(`episode/${episodeId}`)
    episode.value = response.data;
    loadingEpisode.value = false;

    let charactersId: string[] = [];

    episode.value.characters.map((url) => {
      const parts = url.split("/");
      const id = parts[parts.length - 1];
      charactersId.push(id);
    });

    if (charactersId.length > 0) {
      let someCharaters = charactersId.join(",");
      await getSomeCharacters(someCharaters);
    }
    loadingCharacters.value = false
  };

  return {
    getEpisode,
    episode,
    loadingEpisode,
    loadingCharacters,
    characters
  };
}
