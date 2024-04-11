import { getAxiosResponse } from "../utilities/utils";
import { AXIOS_ERROR } from "../utilities/constants";

export async function homepageApi(request, language) {
	const response = {
		success: false,
		successData: null,
		errorData: null
	};

	try {
		const axiosResponse = await getAxiosResponse(request);
		const { status, data } = axiosResponse;

		switch (status) {
			case 200:
				response.success = true;
				response.successData = data;
				return Promise.resolve(response);
			default:
				response.success = false;
				response.errorData = data;
				break;
		}
	} catch (ex) {
		response.success = false;
		response.errorData = AXIOS_ERROR.notNetwork[language];
	}

	return Promise.reject(response);
}