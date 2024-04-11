export function getHomepageRequest(payload = {}) {
    const apiUrl = process.env.REACT_APP_API_URL;
    //const _url = `${apiUrl}all`;

    const _url = "https://rickandmortyapi.com/api/character";

    return {
      method: 'get',
      headers: {
        "content-type": "application/json"
      },
      url: _url
    }
  }