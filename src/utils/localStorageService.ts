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
// Function to init or update localStorage with seeded dummydata
/// /
export const initLocalStorage = () => {
  // Iterate through dataset entries
  Object.entries(datasets).forEach(([key, newItems]) => {
    
    // Parse existing dataset, default to empty array if key not present
    const existingItems: any[] = JSON.parse(localStorage.getItem(key) || "[]");
    // Append new items that dont exist based on id
    const mergedItems = [
      ...existingItems,
      ...newItems.filter(
        (item: any) => !existingItems.some((existing) => existing.id === item.id)
      ),
    ];

    // Save array back to localStorage
    localStorage.setItem(key, JSON.stringify(mergedItems));

    // Log what happened
    console.log(
      existingItems.length === 0
        ? `Seeded '${key}' into localStorage`
        : `Updated '${key}' with ${mergedItems.length - existingItems.length} new item(s)`
    );
  });
};
type LSKey="@Thread"

class LocalStorageService {
    static setItem(key:LSKey,value:any) {
        const data= JSON.stringify(value)
        localStorage.setItem(key,data)
    }
    static getItem(key:LSKey,fallbackValue?:any):any{
        const jsonData=localStorage.getItem(key)
        if (jsonData) {
            return JSON.parse(jsonData)
        }
        return fallbackValue||null
    }
}

export default LocalStorageService
