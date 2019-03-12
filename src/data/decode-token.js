export const decodeToken = token => {
	if (token) {
		return JSON.parse(atob(token.split('.')[1]));
	}
	return false;
};

export const getIdFromToken = token => decodeToken(token).sub;
