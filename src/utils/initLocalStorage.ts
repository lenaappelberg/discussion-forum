/* Imports */
import { dummyComments } from "../dummy-data/comments"
import { dummyThreads } from "../dummy-data/threads"
import { dummyUsers } from "../dummy-data/users"

// Local datasets bundled by key used to seed to LocalStorage
const datasets = {
  dummyComments,
  dummyThreads,
  dummyUsers
};
 
/// /
// Function to init localStorage with seeded dummydata
/// /
export const initLocalStorage = () => {
  // Iterate through dataset entries
  Object.entries(datasets).forEach(([key, value]) => {
    // Check if dataset already exists in localStorage
    if (!localStorage.getItem(key)) {
      // Set as a JSON string under dataset key
      localStorage.setItem(key, JSON.stringify(value));
      // Log seeding action
      console.log(`Seeded ${key} into localStorage`);
    } else {
      // Skip seeding if dataset is already present
      console.log(`${key} already exists in localStorage`);
    }
  });
};
