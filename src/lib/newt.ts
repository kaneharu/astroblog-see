import { createClient } from "newt-client-js";

export interface Article {
  _id: string;
  _sys: {
    createdAt: string;
    updatedAt: string;
    raw: {
      createdAt: string;
      updatedAt: string;
      firstPublishedAt: string;
      publishedAt: string;
    };
  };
  // coverImage: {
  //   _id: string;
  //   src: string;
  //   fileType: string;
  //   fileSize: string;
  //   fileName: string;
  //   width: number;
  //   height: number;
  // };
  title: string;
  slug: string;
  coverImage: HTMLImageElement;
  date: Date;
  body: string;
}

// export interface Archive {
//   year: number;
//   count: number;
// }

export const newtClient = createClient({
  spaceUid: import.meta.env.NEWT_SPACE_UID,
  token: import.meta.env.NEWT_CDN_API_TOKEN,
  apiType: import.meta.env.NEWT_API_TYPE, // or 'cdn'
});
