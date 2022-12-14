import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {
    addProductCart: (state, action) => {
      const { productName, id, price, stock, image, slug } = action.payload.productDetail;
      const product = {
        id,
        productName,
        price,
        stock,
        image: image[3],
        slug,
        quantity: action.payload.quantityProduct,
      };

      const duplicateProduct = state.cart.find((productCart) => {
        return productCart.id === action.payload.productDetail.id;
      });

      if (!duplicateProduct) {
        state.cart.push(product);
      } else {
        state.cart.map((product, index) => {
          if (product.id === action.payload.productDetail.id) {
            state.cart[index].quantity += action.payload.quantityProduct;
          }
        });
      }
    },
    deleteProductCart: (state, action) => {
      const filteredProduct = state.cart.filter((product) => {
        return product.id !== action.payload;
      });
      state.cart = filteredProduct;
    },
    incrementQuantity: (state, action) => {
      const searchProduct = state.cart.findIndex((product) => {
        return product.id === action.payload;
      });
      state.cart[searchProduct].quantity++;
    },

    decrementQuantity: (state, action) => {
      const searchProduct = state.cart.findIndex((product) => {
        return product.id === action.payload;
      });
      if (state.cart[searchProduct].quantity > 1) {
        state.cart[searchProduct].quantity--;
      }
    },
    emptyCart: (state, action) => {
      state.cart = [];
    },
  },
});

const { actions, reducer } = cartSlice;

export const {
  addProductCart,
  deleteProductCart,
  incrementQuantity,
  decrementQuantity,
  emptyCart,
} = actions;
export default reducer;
