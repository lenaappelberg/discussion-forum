// User type for forum users
export type User = {
  userName: string;
	password: string; // Dummy password for testing. In production, always store hashed & salted passwords, never raw strings
}

// Allowed thread categories
export type ThreadCategory = "QNA" | "BREEDS" | "HEALTH AND FOOD" | "TRAINING AND BEHAVIOR"|"Thread"|"LOCKED";

// Base thread type for forum discussions
export type Thread = {
  id: number;
	title: string;
	category: ThreadCategory;
	creationDate: Date;
	description: string;
	creator: User;
}

// Q&A-thread type extension 
export type QNAThread =  Thread & {
	category: "QNA";
	isAnswered: boolean;
	commentAnswerId?: number;
}

// Comment type 
export type Comment = {
	id: number;
	threadId: Thread["id"];
	content: string;
	creator?: User,
  creationDate: Date;
}
