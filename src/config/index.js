export const baseURL = process.env.API_ROOT;
export const loginURL = process.env.LOGIN_URL;
export const logoutURL = process.env.LOGOUT_URL;
export const registerURL = 'https://test-auth.cocos.com/#/sign_up/register';
export const expireDays = 7 * 24 * 60 * 60 * 1000; // 设置userInfo在cookie的最长时间(7天)
