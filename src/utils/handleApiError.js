function handleApiError({ error }) {
  console.error(error);
  if (!error.message) {
    error.message =
      '예기치 않은 오류가 발생했습니다.\n잠시 후에 다시 시도해 주세요.';
  }

  return error;
}

export default handleApiError;
