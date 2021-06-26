import { v4 as uuidv4 } from 'uuid';

export const state = () => ({
  foodData: [],
  cart: [],
});

export const getters = {
  totalPrice: (state) => {
    if (!state.cart.length) return 0;
    return state.cart.reduce((ac, next) => ac + next.combinedPrice, 0);
  },
};

export const mutations = {
  updateFoodData: (state, payload) => {
    state.foodData = payload;
  },
  addToCart: (state, form) => {
    form.id = uuidv4();
    form.combinedPrice = Number(form.combinedPrice);
    state.cart.push(form);
  },
};

export const actions = {
  async getFoodData({ state, commit }) {
    if (state.foodData.length) return;
    try {
      const url =
        'https://dva9vm8f1h.execute-api.us-east-2.amazonaws.com/production/restaurants';
      await fetch(url, {
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': process.env.AWS_API_KEY,
        },
      })
        .then((res) => res.json())
        .then((data) => commit('updateFoodData', data));
    } catch (e) {
      console.error(e);
    }
  },
};
