import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FavoritesState {
  favoriteIds: string[];
}

const initialState: FavoritesState = {
  favoriteIds: [],
};

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    toggleFavorite: (state, action: PayloadAction<string>) => {
      const propertyId = action.payload;
      const index = state.favoriteIds.indexOf(propertyId);
      if (index === -1) {
        state.favoriteIds.push(propertyId);
      } else {
        state.favoriteIds.splice(index, 1);
      }
    },
  },
});

export const { toggleFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
