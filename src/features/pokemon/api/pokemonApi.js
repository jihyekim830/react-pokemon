import fetchApi from '@api/fetchApi';
import formatPokemonData from '@features/pokemon/utils/formatPokemonData';
import handleApiError from '@utils/handleApiError';
import { BASE_URL, END_POINTS } from '@constants/api';

async function fetchPokemonList({ resultCount }) {
  try {
    const promises = Array.from({ length: resultCount }, async (_, index) => {
      const data = await fetchApi({
        url: `${BASE_URL}${END_POINTS.SUMMARY}/${index + 1}`,
      });

      return formatPokemonData({ data });
    });

    return await Promise.all(promises);
  } catch (error) {
    throw handleApiError({ error });
  }
}

async function fetchPokemonById({ id }) {
  try {
    const data = await fetchApi({
      url: `${BASE_URL}${END_POINTS.DETAIL}/${id}`,
    });

    return {
      id,
      cries: data.cries.latest,
      types: data.types.map((type) => type.type.name),
    };
  } catch (error) {
    throw handleApiError({ error });
  }
}

async function fetchPokemonBaseById({ id }) {
  try {
    const data = await fetchApi({
      url: `${BASE_URL}${END_POINTS.SUMMARY}/${id}`,
    });

    return formatPokemonData({ data });
  } catch (error) {
    throw handleApiError({ error });
  }
}

export { fetchPokemonList, fetchPokemonById, fetchPokemonBaseById };
