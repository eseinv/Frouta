export const decodeToken = token => JSON.parse(atob(token.split('.')[1]));

export const getIdFromToken = token => decodeToken(token).sub;
