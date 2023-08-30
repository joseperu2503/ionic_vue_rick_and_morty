import { http } from "@/http/http.service";
import { ref } from "vue";
import { Location, initLocation } from "@/interfaces/location.interface.ts";

import { useSomeCharacters } from "@/composables/useSomeCharacters";

export function useLocation() {
  const location = ref<Location>(initLocation);
  const loadingLocation = ref<boolean>(true);
  const loadingCharacters = ref<boolean>(true);
  const { characters, getSomeCharacters } = useSomeCharacters();

  const getLocation = async (locationId: string) => {
    loadingLocation.value = true;
    loadingCharacters.value = true

    let response = await http.get<Location>(`location/${locationId}`)
    location.value = response.data;
    loadingLocation.value = false

    let charactersId: string[] = [];

    location.value.residents.map((url) => {
      const parts = url.split("/");
      const id = parts[parts.length - 1];
      charactersId.push(id);
    });

    if (charactersId.length > 0) {
      let someCharacters = charactersId.join(",");
      await getSomeCharacters(someCharacters);
    }
    loadingCharacters.value = false
  };

  return {
    getLocation,
    location,
    characters,
    loadingLocation,
    loadingCharacters,
  };
}
