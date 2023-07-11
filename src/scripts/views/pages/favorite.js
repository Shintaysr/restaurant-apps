import FavoriteRestaurantDB from '../../data/favoriterestaurant-db';
import { createRestoItemTemplate } from '../templates/template-creator';

import '../../component/resto-favorite';

const Favorite = {
  async render() {
    return `
      <resto-favorite></resto-favorite>
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantDB.getAllRestaurants();
    const restaurantsContainer = document.querySelector('#resto-list');
    if (restaurants.length > 0) {
      restaurants.forEach((restaurant) => {
        restaurantsContainer.innerHTML += createRestoItemTemplate(restaurant);
      });
    } else {
      restaurantsContainer.innerHTML = '<p id="resto-item__not__found">Tidak ada restaurant untuk ditampilkan</p>';
    }
  },
};

export default Favorite;
