const appBaseUrl = import.meta.env.PUBLIC_APP_URL?.trim() || 'http://localhost:5173';

export const appUrls = {
	login: new URL('/login', appBaseUrl).toString(),
	register: new URL('/register', appBaseUrl).toString(),
};
