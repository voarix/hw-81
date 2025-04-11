import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { shortUrl } from "./linksThunks.ts";

interface LinkState {
  shortUrl: string | null;
  loading: boolean;
  error: boolean;
}

const initialState: LinkState = {
  shortUrl: null,
  loading: false,
  error: false,
};

export const linksSlice = createSlice({
  name: "links",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(shortUrl.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(shortUrl.fulfilled, (state, { payload: shortURL }) => {
        state.shortUrl = shortURL.shortUrl;
        state.loading = false;
      })
      .addCase(shortUrl.rejected, (state) => {
        state.error = true;
        state.loading = false;
      });
  },
});

export const selectShortUrl = (state: RootState) => state.links.shortUrl;
export const selectShortUrlLoading = (state: RootState) => state.links.loading;
export const selectShortUrlError = (state: RootState) => state.links.error;

export const linksReducer = linksSlice.reducer;
