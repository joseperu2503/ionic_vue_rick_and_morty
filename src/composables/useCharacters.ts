import { http } from "@/http/http.service";
import { GetAllCharactersInterface } from "@/interfaces/character.interface.ts";
import { useCharacterStore } from "@/stores/character";
import { storeToRefs } from "pinia";
import { ref, watch } from "vue";
import { InfiniteScrollCustomEvent } from "@ionic/vue";

export function useCharacters() {
  const characterStore = useCharacterStore();

  const { characters, page, numPages, search } = storeToRefs(characterStore);
  const loadMore = ref(true);

  const getAllCharacters = async () => {
    loadMore.value = false;
    let currentSearch: string = search.value;
    try {
      let response = await http
        .get<GetAllCharactersInterface>(
          `character?page=${page.value}&name=${currentSearch}`
        )
      if (search.value == currentSearch) {
        if (page.value == 1) {
          characters.value = [];
        }
        characters.value.push(...response.data.results);
        numPages.value = response.data.info.pages;
        page.value++;
      }
    } catch (error) {
      if (search.value == currentSearch) {
        characters.value = [];
      }
    }
    loadMore.value = true;
  };

  const loadMoreCharacters = async (ev: InfiniteScrollCustomEvent) => {
    if (page.value <= numPages.value && loadMore.value) {
      await getAllCharacters();
      ev.target.complete()
    }
  };

  if (search.value != "") {
    search.value = "";
    page.value = 1;
    characters.value = [];
  }
  if (characters.value.length == 0) {
    getAllCharacters();
  }

  watch(search, () => {
    page.value = 1;
    getAllCharacters();
  });

  return {
    getAllCharacters,
    characters,
    search,
    loadMoreCharacters,
    page,
    numPages
  };
}

