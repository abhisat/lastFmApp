export interface ImageItem {
  "#text": string;
  size: string;
}

export interface ResponseItem {
  name: string;
  playcount: string;
  listeners: string;
  mbid: string;
  url: string;
  streamable: string;
  image: Array<ImageItem>;
}

export interface Response {
  artist: Array<ResponseItem>;
}
