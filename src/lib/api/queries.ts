import { readItems, readSingleton } from "@directus/sdk";
import { client } from "../directus";

export async function fetchSuperheroes() {
  return client.request(
    readItems("superhero_profiles", {
      fields: ["id", "name", "powers", "alias"],
    })
  );
}

export async function fetchGlobalMetadata() {
  return client.request(
    readSingleton("global", {
      fields: ["title", "description"],
    })
  );
}
