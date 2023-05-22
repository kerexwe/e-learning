import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { ThemeReducer } from "./themeSlice";

export const store = configureStore({
  reducer: ThemeReducer,
});

store.subscribe(() => {
  localStorage.setItem("theme", JSON.stringify(store.getState().themeDark));
});

// Infer the `RootState` and `AppDispatch` types from the store itself
// export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
// export type AppDispatch = typeof store.dispatch

export type RootState = ReturnType<typeof store.getState>;
export const AppDispatch: () => typeof store.dispatch = useDispatch;
export const AppSelector: TypedUseSelectorHook<
  ReturnType<typeof store.getState>
> = useSelector;
