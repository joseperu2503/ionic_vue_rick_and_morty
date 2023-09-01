import { http } from "@/http/http.service";
import { ref } from "vue";
import { Episode } from "@/interfaces/episode.interface.ts";

export function useSomeEpisodes() {
  const episodes = ref<Episode[]>([]);

  const getSomeEpisodes = async (someEpisodes: string) => {
    let response = await http.get<Episode | Episode[]>(`episode/${someEpisodes}`)
    if (Array.isArray(response.data)) {
      episodes.value = response.data;
    } else {
      episodes.value = [response.data];
    }
  };

  return {
    episodes,
    getSomeEpisodes,
  };
}
