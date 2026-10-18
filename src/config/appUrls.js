const defaultAppUrl = import.meta.env.PROD ? 'https://app.messafy.org' : 'http://localhost:5173';
const appBaseUrl = import.meta.env.PUBLIC_APP_URL?.trim() || defaultAppUrl;

export const appUrls = {
	login: new URL('/login', appBaseUrl).toString(),
	register: new URL('/register', appBaseUrl).toString(),
};
