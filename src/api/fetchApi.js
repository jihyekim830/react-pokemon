async function fetchApi({ url }) {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      const code = response.status;
      const error = new Error(
        `${code}: 요청한 데이터를 받아오지 못했습니다.\n잠시 후에 다시 시도해 주세요.`,
      );

      error.code = code;
      throw error;
    }

    return await response.json();
  } catch (error) {
    console.error(error);
    if (!error.code) {
      error.message =
        '네트워크 오류가 발생했습니다.\n잠시 후에 다시 시도해 주세요.';
    }

    throw error;
  }
}

export default fetchApi;
