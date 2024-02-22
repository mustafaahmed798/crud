import { createSlice } from "@reduxjs/toolkit";

export const crudSlice = createSlice({
  name: "crud",
  initialState: {
    posts: [],
  },

  reducers: {
    addPost: (state, action) => {
      state.posts.push(action.payload);
    },
    deletePost: (state, action) => {
      state.posts = state.posts.filter((item) => item.id !== action.payload);
    },
    updatePost: (state, action) => {
      // eslint-disable-next-line array-callback-return
      state.posts.map((item) => {
        if (item.id === action.payload.id) {
          item.title = action.payload.title;
          item.description = action.payload.description;
        }
      });
    },
  },
});

// Action creators are generated for each case reducer function
export const { addPost, deletePost, updatePost } = crudSlice.actions;

export default crudSlice.reducer;
