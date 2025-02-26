/**
 * Checks the token
 * @param token 
 * @returns
 */
const checkToken = (token: string): boolean => {
    return token === process.env.TOKEN;
};

export default checkToken;