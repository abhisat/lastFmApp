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

export interface ArtistResponse {
  artist: Array<ResponseItem>;
}

export interface TrackResponse {
  track: Array<ResponseItem>;
}
