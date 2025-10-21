import { API, IMAGE_URL } from '@constants';

async function fetchPokemons({ resultCount }) {
  const promises = Array.from({ length: resultCount }, async (_, index) => {
    const data = await fetchApi({
      url: `${API.BASE_URL}${API.END_POINTS.SUMMARY}/${index + 1}`,
    });

    return formatPokemonData({ data });
  });

  const data = await Promise.all(promises);

  return data;
}

async function fetchPokemonById({ id }) {
  const data = await fetchApi({
    url: `${API.BASE_URL}${API.END_POINTS.DETAIL}/${id}`,
  });
  const { cries, types } = data;

  return {
    id,
    cries: cries.latest,
    types: types.map((type) => type.type.name),
  };
}

async function fetchPokemonBaseById({ id }) {
  const data = await fetchApi({
    url: `${API.BASE_URL}${API.END_POINTS.SUMMARY}/${id}`,
  });

  return formatPokemonData({ data });
}

async function fetchApi({ url }) {
  const response = await fetch(url);

  if (!response.ok) {
    const error = new Error(
      '네트워크 오류가 발생했습니다.\n잠시 후에 다시 시도해 주세요.',
    );
    error.code = response.status;
    throw error;
  }

  const data = await response.json();

  return data;
}

function formatPokemonData({ data }) {
  const { id, flavor_text_entries, genera, names } = data;

  return {
    id,
    description: findKoreanData({ data: flavor_text_entries }).flavor_text,
    kind: findKoreanData({ data: genera }).genus,
    name: findKoreanData({ data: names }).name,
    images: {
      front: getImageUrl({ id, type: IMAGE_URL.TYPE.FRONT }),
      back: getImageUrl({ id, type: IMAGE_URL.TYPE.BACK }),
    },
  };
}

const KOREAN_LANGUAGE_CODE = 'ko';
function findKoreanData({ data }) {
  return data.find((item) => item.language.name === KOREAN_LANGUAGE_CODE);
}

function getImageUrl({ id, type }) {
  const t = type ? `${type}/` : '';

  return `${IMAGE_URL.BASE_URL}${t}${id}.png`;
}

export { fetchPokemons, fetchPokemonById, fetchPokemonBaseById };
