import { createItems } from "@directus/sdk";
import { client } from "./directus";

const superHeroProfileData = [
  {
    name: "Superman",
    powers: "flight, superhuman strength, x-ray vision",
    alias: "Clark Kent",
  },
  {
    name: "Spider-Man",
    powers: "wall-crawling, superhuman strength, spider-sense",
    alias: "Peter Parker",
  },
  {
    name: "Batman",
    powers: "intelligence, martial arts, gadgets",
    alias: "Bruce Wayne",
  },
  {
    name: "Wonder Woman",
    powers: "superhuman strength, speed, lasso of truth",
    alias: "Diana Prince",
  },
  {
    name: "Iron Man",
    powers: "genius intellect, powered suit",
    alias: "Tony Stark",
  },
  {
    name: "Captain America",
    powers: "superhuman strength, agility, shield",
    alias: "Steve Rogers",
  },
  {
    name: "Thor",
    powers: "god of thunder, superhuman strength, Mjolnir",
    alias: "Thor Odinson",
  },
  {
    name: "Hulk",
    powers: "superhuman strength, invulnerability, regeneration",
    alias: "Bruce Banner",
  },
  {
    name: "Black Widow",
    powers: "martial arts, espionage, agility",
    alias: "Natasha Romanoff",
  },
  {
    name: "Aquaman",
    powers: "superhuman strength, underwater breathing, telepathy",
    alias: "Arthur Curry",
  },
];

// export async function createSuperHeroes() {
//   try {
//     const createData = await client.request(
//       createItems("events", superHeroProfileData)
//     );

//     return createData;
//   } catch (error) {
//     console.log({ error });
//   }
// }

// createSuperHeroes()
//   .then(() => {
//     console.log(`Data successfully seeded 🌱`);
//   })
//   .catch((error) => {
//     console.error(`Error seeding data: ${error}`);
//     process.exit(1);
//   });
