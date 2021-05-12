export interface BaseProperty {
  name: string;
  price: number;
  description: string;
  image: string;
}

export interface Property extends BaseProperty {
  id: number;
}
