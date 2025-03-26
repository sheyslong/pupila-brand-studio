import { createApi } from 'unsplash-js';

export const serverImageApi = createApi({
  accessKey: process.env.UNSPLASH_ACCESS_KEY || '',
});