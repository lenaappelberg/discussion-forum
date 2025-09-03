
import type { QNAThread, Thread, User } from "../types/types";
import { dummyUsers } from "./users";

/// /
// Function to get random user from dummy users array
/// /
function getRandomUser(): User {
  return dummyUsers[Math.floor(Math.random() * dummyUsers.length)];
}

// Dummy threads
export const dummyThreads: (Thread | QNAThread )[] = [
  {
    id: 1,
    title: "Welcome to the forum!",
    category: "GENERAL",
    creationDate: new Date("2025-08-25T10:30:00Z"),
    description: "Introduce yourself and say hi to everyone",
    creator: getRandomUser(),
  },
  {
    id: 2,
    title: "How do I train my puppy to roll?",
    category: "QNA",
    creationDate: new Date("2025-08-26T12:00:00Z"),
    description: "I have a 5-month-old Labrador puppy and I really would like to teach himm how to roll. Any tips for acheving this?",
    creator: getRandomUser(),
    isAnswered: true,
    commentAnswerId: 101,
  },
  {
    id: 3,
    title: "Best dog breeds for apartments",
    category: "BREEDS",
    creationDate: new Date("2025-08-27T09:15:00Z"),
    description: "Looking for small dog breeds that adapt well to apartment living.",
    creator: getRandomUser(),
  },
  {
    id: 4,
    title: "Recommended dog food brands",
    category: "HEALTH AND FOOD",
    creationDate: new Date("2025-08-28T14:45:00Z"),
    description: "Which dog food brands are the healthiest?",
    creator: getRandomUser(),
  },
  {
    id: 5,
    title: "Why is my dog barking at strangers?",
    category: "QNA",
    creationDate: new Date("2025-08-29T11:20:00Z"),
    description: "My dog barks aggressively at visitors. How can I calm it down?",
    creator: getRandomUser(),
    isAnswered: false,
  },
  {
    id: 6,
    title: "Golden Retriever grooming tips",
    category: "BREEDS",
    creationDate: new Date("2025-08-30T08:00:00Z"),
    description: "How often should I groom a Golden Retriever?",
    creator: getRandomUser(),
  },
  {
    id: 7,
    title: "Dog park etiquette",
    category: "GENERAL",
    creationDate: new Date("2025-08-31T16:30:00Z"),
    description: "What are some basic rules to follow when visiting a dog park?",
    creator: getRandomUser(),
  },
  {
    id: 8,
    title: "How to stop chewing behavior",
    category: "QNA",
    creationDate: new Date("2025-09-01T13:10:00Z"),
    description: "My puppy chews everything. What strategies can help prevent this?",
    creator: getRandomUser(),
    isAnswered: true,
    commentAnswerId: 102,
  },
  {
    id: 9,
    title: "Best training treats for small breeds",
    category: "BREEDS",
    creationDate: new Date("2025-09-02T09:45:00Z"),
    description: "Looking for treats suitable for small breeds like Pomeranians or Chihuahuas.",
    creator: getRandomUser(),
  },
  {
    id: 10,
    title: "How to socialize a shy dog",
    category: "QNA",
    creationDate: new Date("2025-09-03T15:30:00Z"),
    description: "My dog is shy around other dogs and people. Any socialization tips?",
    creator: getRandomUser(),
    isAnswered: false,
  },
];
