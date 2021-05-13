import { getPricePerSqrMeter } from '../api/pricesPerSquareMeters';

let pricePerSqrMeterCache: number;

const calculatePrice = (sqrMeterPrice: number, sqrMeter: number): number =>
  sqrMeter * sqrMeterPrice;

export const getPricePerSqrMeterFromAPI = async (): Promise<number> => {
  if (!pricePerSqrMeterCache) {
    const { data } = await getPricePerSqrMeter();
    const [pricePerSqrMeter] = data;
    pricePerSqrMeterCache = pricePerSqrMeter.price;

    return pricePerSqrMeter.price;
  }

  return pricePerSqrMeterCache;
};

export const calculatePricePerSquareMeter = async (
  sqrMeter: number,
): Promise<number> => {
  const pricePerSqrMeter = await getPricePerSqrMeterFromAPI();

  const calculatedNewPrice = calculatePrice(pricePerSqrMeter, sqrMeter);

  return calculatedNewPrice;
};
