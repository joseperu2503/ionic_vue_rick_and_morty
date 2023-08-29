import { http } from "@/http/http.service";
import { ref } from "vue";
import { Character } from "@/interfaces/character.interface.ts";

export function useSomeCharacters() {
  const characters = ref<Character[]>([]);

  const getSomeCharacters = async (someCharacters: string) => {
    let response = await http.get<Character | Character[]>(`character/${someCharacters}`)
    if (Array.isArray(response.data)) {
      characters.value = response.data;
    } else {
      characters.value = [response.data];
    }
  };

  return {
    characters,
    getSomeCharacters,
  };
}
