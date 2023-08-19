import { http } from "@/http/http.service";
import { ref, watch } from "vue";
import { GetAllEpisodesInterface } from "@/interfaces/episode.interface.ts";
import { useEpisodeStore } from "@/stores/episode";
import { storeToRefs } from "pinia";
import { InfiniteScrollCustomEvent } from "@ionic/vue";

export function useEpisodes() {
  const episodeStore = useEpisodeStore();

  const { episodes, page, numPages, search } = storeToRefs(episodeStore);
  const loadMore = ref(true);

  const getAllEpisodes = async () => {
    loadMore.value = false;
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
    loadMore.value = true;
  };

  const loadMoreEpisodes = async (ev: InfiniteScrollCustomEvent) => {
    if (page.value <= numPages.value && loadMore.value) {
      await getAllEpisodes();
      ev.target.complete()
    }
  };

  if (search.value != "") {
    search.value = "";
    page.value = 1;
    episodes.value = [];
  }
  if (episodes.value.length == 0) {
    getAllEpisodes();
  }

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
    numPages
  };
}
