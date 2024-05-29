import { createDirectus, rest } from "@directus/sdk";

export interface Global {
  title: string;
  description: string;
}

export interface SuperheroProfile {
  id: number;
  name: string;
  alias: string;
  powers: string;
}

export interface SuperheroMission {
  id: number;
  missionTitle: string;
  superheroId: number;
  description: string;
  date: Date;
}

export interface SuperheroGadget {
  id: number;
  gadgetName: string;
  usedBy: string;
  description: string;
}

export type Schema = {
  global: Global;
  superhero_profiles: SuperheroProfile[];
  superhero_mission: SuperheroMission[];
  superhero_gadget: SuperheroGadget[];
};

// The ENV wont read when seeding because I think it has no access.
export const client = createDirectus<Schema>(import.meta.env.DIRECTUS_URL).with(
  rest()
);
