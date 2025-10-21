import * as IMAGE_URL from '@features/pokemon/constants/imageUrl';

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

export default formatPokemonData;
