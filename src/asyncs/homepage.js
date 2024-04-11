
import { homepageApi } from "../apis/homepage";
import { getHomepageRequest } from "../requests/homepage";

export async function homepageAsync(callback, payload = {}) {
  const request = getHomepageRequest(payload);

  await homepageApi(request, payload.language)
    .then(response => {
      const { successCallback } = callback;
      const { successData, success } = response;

      successCallback({
        data: successData,
        success
      });
    })
    .catch(error => {
      const { errorCallback } = callback;
      const { errorData, success } = error;

      errorCallback({
        error: errorData,
        success
      });
    });
}