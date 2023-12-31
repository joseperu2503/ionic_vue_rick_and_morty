import { http } from "@/http/http.service";
import { ref, watch } from "vue";
import { GetAllLocationsInterface } from "@/interfaces/location.interface.ts";
import { useLocationStore } from "@/stores/location";
import { storeToRefs } from "pinia";
import { InfiniteScrollCustomEvent } from "@ionic/vue";

export function useLocations() {
  const locationStore = useLocationStore();

  const { locations, page, numPages, search } = storeToRefs(locationStore);
  const loading = ref(false);

  const getAllLocations = async () => {
    loading.value = true;
    let currentSearch: string = search.value;
    try {
      let response = await http
        .get<GetAllLocationsInterface>(
          `location?page=${page.value}&name=${currentSearch}`
        )
      if (search.value == currentSearch) {
        if (page.value == 1) {
          locations.value = [];
        }
        locations.value.push(...response.data.results);
        numPages.value = response.data.info.pages;
        page.value++;
      }
    } catch (error) {
      if (search.value == currentSearch) {
        locations.value = [];
      }
    }
    loading.value = false;
  };

  const loadMoreLocations = async (ev: InfiniteScrollCustomEvent) => {
    if (page.value <= numPages.value && !loading.value) {
      await getAllLocations();
      ev.target.complete()
    }
  };

  getAllLocations();

  watch(search, () => {
    page.value = 1;
    getAllLocations();
  });

  return {
    getAllLocations,
    locations,
    search,
    loadMoreLocations,
    page,
    numPages,
    loading
  };
}
