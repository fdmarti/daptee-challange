declare global {
	interface Users {
		createdAt: Date;
		name: string;
		email: string;
		username: string;
		picture: string;
		id: string;
	}
}

export {};
