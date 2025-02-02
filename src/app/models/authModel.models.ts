export interface AuthModel {
	result: string | null,
	token: string | null,
	pagePermissions?: {
		users: {
			create: boolean,
			read: boolean,
			update: boolean,
			delete: boolean,
			_id: string
		},
		products: {
			create: boolean,
			read: boolean,
			update: boolean,
			delete: boolean,
			_id: string
		},
		usersTypes: {
			create: boolean,
			read: boolean,
			update: boolean,
			delete: boolean,
			_id: string
		},
	}
}