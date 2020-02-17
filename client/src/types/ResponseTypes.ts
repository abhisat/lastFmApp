export interface DetailLink {
  m: string;
}

export interface ResponseItem {
  title: string;
  link: string;
  media: DetailLink;
  date_taken: string;
  description: string;
  published: string;
  author: string;
  author_id: string;
  tags: string;
}

export interface Response {
  title: string;
  link: string;
  description: string;
  modified: string;
  generator: string;
  items: Array<ResponseItem>;
}
