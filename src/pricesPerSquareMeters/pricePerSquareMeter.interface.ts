export interface BasePricePerSquareMeter {
  name: string;
  description: string;
  price: number;
}

export interface PricePerSquareMeter extends BasePricePerSquareMeter {
  id: number;
}
