export interface Trailer {
  id: string;
  name: string;
  key: string;
  type: string;
  size: number;
}

export interface TrailerResponse {
  results: Trailer[];
  id: number;
}