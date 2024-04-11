import axios from "axios";

export function getAxiosResponse(request) {
	return axios(request)
		.then(response => response)
		.catch(error => {
			if (axios.isCancel(error)) {
				throw new Error("cancelled");
			} else if (error.response) {
				return error.response;
			}
			throw new Error("network error");
		})
}