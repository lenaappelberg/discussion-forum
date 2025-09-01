import { dummyUsers } from "./users";
import type { Comment } from "../types/types";

export const dummyComments: Comment[] = [
  { 
    id: 1, 
    thread: 2, 
    content: "I’ve trained my lab the same way, it works!", 
    creator: dummyUsers[0], 
    creationDate: new Date("2025-08-26T13:00:00Z") 
  },
  { 
    id: 2, 
    thread: 2, 
    content: "Consistency is key. Reward good behavior!", 
    creator: dummyUsers[1], 
    creationDate: new Date("2025-08-26T14:15:00Z") 
  },
  { 
    id: 3, 
    thread: 5, 
    content: "Try desensitizing him slowly to strangers.", 
    creator: dummyUsers[2], creationDate: new Date("2025-08-29T12:00:00Z") 
  },
  { 
    id: 4, 
    thread: 5, 
    content: "Also make sure he gets enough exercise.", 
    creator: dummyUsers[0], 
    creationDate: new Date("2025-08-29T12:30:00Z") 
  },
  { 
    id: 5, 
    thread: 8, 
    content: "Chew toys and praise work wonders.", 
    creator: dummyUsers[1], 
    creationDate: new Date("2025-09-01T14:00:00Z") 
  },
  { 
    id: 6, 
    thread: 8, 
    content: "I used bitter spray for my puppy, it helped.", 
    creator: dummyUsers[2], 
    creationDate: new Date("2025-09-01T14:20:00Z") 
  },
  { 
    id: 7, 
    thread: 10, 
    content: "Socialize in small groups first.", 
    creator: dummyUsers[0], 
    creationDate: new Date("2025-09-03T16:00:00Z") 
  },
  { 
    id: 8, 
    thread: 10, 
    content: "Take treats along for positive reinforcement.", 
    creator: dummyUsers[1], 
    creationDate: new Date("2025-09-03T16:15:00Z") 
  },
  { 
    id: 9, 
    thread: 3, 
    content: "French Bulldogs are great for apartments!", 
    creator: dummyUsers[2], 
    creationDate: new Date("2025-08-27T10:00:00Z") 
  },
  { 
    id: 10, 
    thread: 6, 
    content: "Brush daily to avoid matting.", 
    creator: dummyUsers[0], 
    creationDate: new Date("2025-08-30T08:30:00Z") 
  },
  { 
    id: 11, 
    thread: 6, 
    content: "Don’t forget nail trimming weekly.", 
    creator: dummyUsers[1], 
    creationDate: new Date("2025-08-30T09:00:00Z") 
  },
  { 
    id: 12, 
    thread: 4, 
    content: "I recommend Royal Canin for small dogs.", 
    creator: dummyUsers[2], 
    creationDate: new Date("2025-08-28T15:00:00Z") 
  },
  { 
    id: 13, 
    thread: 4, 
    content: "Check ingredients carefully.", 
    creator: dummyUsers[0], 
    creationDate: new Date("2025-08-28T15:30:00Z") 
  },
  { 
    id: 14, 
    thread: 7, 
    content: "Always pick up after your dog.", 
    creator: dummyUsers[1], 
    creationDate: new Date("2025-08-31T17:00:00Z") 
  },
  { 
    id: 15, 
    thread: 7, 
    content: "Respect other dogs’ space.", 
    creator: dummyUsers[2], 
    creationDate: new Date("2025-08-31T17:30:00Z") 
  },
  { 
    id: 16, 
    thread: 1, 
    content: "Hi everyone! Excited to join.", 
    creator: dummyUsers[0], 
    creationDate: new Date("2025-08-25T11:00:00Z") 
  },
  { 
    id: 17, 
    thread: 1, 
    content: "Welcome! Feel free to ask anything.", 
    creator: dummyUsers[1], creationDate: new Date("2025-08-25T11:15:00Z") 
  },
  { 
    id: 18, 
    thread: 9, 
    content: "I love using tiny training treats for Pomeranians.", 
    creator: dummyUsers[2], 
    creationDate: new Date("2025-09-02T10:00:00Z") 
  },
  { 
    id: 19, 
    thread: 9, 
    content: "Chewy mini treats are perfect.", 
    creator: dummyUsers[0], 
    creationDate: new Date("2025-09-02T10:20:00Z") 
  },
  { 
    id: 20, 
    thread: 2, 
    content: "Make sure to practice multiple times a day.", 
    creator: dummyUsers[1], 
    creationDate: new Date("2025-08-26T14:45:00Z") 
  },
];
