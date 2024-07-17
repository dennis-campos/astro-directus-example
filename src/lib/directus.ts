import { createDirectus, rest } from "@directus/sdk";

export type Global = {
  title: string;
  description: string;
};

export type Event = {
  id: number;
  title: string;
  description: string;
  dateOfEvent: Date;
  location: string;
};

export type Ticket = {
  id: number;
  eventId: Event["id"];
  type: string;
  price: number;
  quantity: number;
};

export type User = {
  id: number;
  name: string;
  email: string;
};

export type Cities = {
  id: string;
  name: string;
  country_id: string;
};

export type Schema = {
  globalMetadata: Global;
  events: Event[];
  tickets: Ticket[];
  users: User[];
  cities: Cities[];
};

// The ENV wont read when seeding because I think it has no access.
export const client = createDirectus<Schema>(import.meta.env.DIRECTUS_URL).with(
  rest()
);
