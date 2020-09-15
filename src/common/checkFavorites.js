export default {
  methods: {
    setFavorites(products) {
      let favorites = JSON.parse(localStorage.getItem("favorite"));
      console.log("setFavorites", favorites);
      if (favorites === null) {
        favorites = [];
      }

      let product = {};
      for (product of products) {
        if (favorites.includes(product.id)) {
          product.favorite = true;
        } else {
          product.favorite = false;
        }
      }
      console.log("setFavorites", products);
    },
  },

};
