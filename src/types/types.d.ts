// User type for forum users
export type User = {
  id: string; // Unique identifier
  userName: string;
  email: string;
	password: string; // Dummy password for testing. In production, always store hashed & salted passwords, never raw strings
  picture: string;
}

// Allowed thread categories
export type ThreadCategory = "GENERAL" | "QNA" | "BREEDS" | "HEALTH AND FOOD" | "TRAINING AND BEHAVIOR";

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
	thread: number; // Reference to thread ID
	content: string;
	creator: User,
  creationDate: Date;
}
