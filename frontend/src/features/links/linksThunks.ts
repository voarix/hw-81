import { createAsyncThunk } from "@reduxjs/toolkit";
import { ILink } from "../../types";
import axiosApi from "../../axiosApi.ts";

export const shortUrl = createAsyncThunk<ILink, string>(
  "links/shortUrl",
  async (originalUrl) => {
    const response = await axiosApi.post<ILink>("/links", { originalUrl });
    return response.data;
  },
);
