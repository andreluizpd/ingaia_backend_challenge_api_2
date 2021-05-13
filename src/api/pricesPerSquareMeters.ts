import api from './apiconfig';

import { PricePerSquareMeter } from '../pricesPerSquareMeters/pricePerSquareMeter.interface';

export const getPricePerSqrMeter = () => {
  return api.get<Array<PricePerSquareMeter>>(`/pricesPerSquareMeters`);
};
