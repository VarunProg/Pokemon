export interface IpokemonList {
  //value of next will be either null or string
  next: null | string;
  previous: null | string;
  results: Array<{
    name: string;
    url: string;
  }>;
}
