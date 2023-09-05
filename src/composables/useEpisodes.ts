import { http } from "@/http/http.service";
import { ref, watch } from "vue";
import { GetAllEpisodesInterface } from "@/interfaces/episode.interface.ts";
import { useEpisodeStore } from "@/stores/episode";
import { storeToRefs } from "pinia";
import { InfiniteScrollCustomEvent } from "@ionic/vue";

export function useEpisodes() {
  const episodeStore = useEpisodeStore();

  const { episodes, page, numPages, search } = storeToRefs(episodeStore);
  const loading = ref(false);

  const getAllEpisodes = async () => {
    loading.value = true;
    let currentSearch: string = search.value;
    try {
      let response = await http
        .get<GetAllEpisodesInterface>(
          `episode?page=${page.value}&name=${currentSearch}`
        )
      if (search.value == currentSearch) {
        if (page.value == 1) {
          episodes.value = [];
        }
        episodes.value.push(...response.data.results);
        numPages.value = response.data.info.pages;
        page.value++;
      }
    } catch (error) {
      if (search.value == currentSearch) {
        episodes.value = [];
      }
    }
    loading.value = false;
  };

  const loadMoreEpisodes = async (ev: InfiniteScrollCustomEvent) => {
    if (page.value <= numPages.value && !loading.value) {
      await getAllEpisodes();
      ev.target.complete()
    }
  };

  getAllEpisodes();

  watch(search, () => {
    page.value = 1;
    getAllEpisodes();
  });

  return {
    getAllEpisodes,
    episodes,
    search,
    loadMoreEpisodes,
    page,
    numPages,
    loading
  };
}
