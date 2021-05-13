import { BaseProperty, Property } from './property.interface';
import { Properties } from './properties.interface';
import { getPricePerSqrMeter } from '../api/pricesPerSquareMeters';

let items: Properties = [
  {
    id: 1,
    name: 'Burger',
    price: 599,
    description: 'Tasty',
    image: 'https://cdn.auth0.com/blog/whatabyte/burger-sm.png',
  },
  {
    id: 2,
    name: 'Pizza',
    price: 299,
    description: 'Cheesy',
    image: 'https://cdn.auth0.com/blog/whatabyte/pizza-sm.png',
  },
  {
    id: 3,
    name: 'Tea',
    price: 199,
    description: 'Informative',
    image: 'https://cdn.auth0.com/blog/whatabyte/tea-sm.png',
  },
];

export const findAll = async (): Promise<Property[]> => Object.values(items);

const calculatePrice = (sqrMeterPrice: number, sqrMeter: number): number =>
  sqrMeter * sqrMeterPrice;

export const calculatePricePerSquareMeter = async (): Promise<any> => {
  const { data } = await getPricePerSqrMeter();
  const [pricePerSqrMeter] = data;

  const calculatedNewPrices = items.map(item => {
    return {
      ...item,
      price: calculatePrice(pricePerSqrMeter.price, item.price),
    };
  });

  return calculatedNewPrices;
};

export const find = async (id: number): Promise<Property> => items[id];

export const create = async (newItem: BaseProperty): Promise<Property> => {
  const id = new Date().valueOf();

  items[id] = {
    id,
    ...newItem,
  };

  return items[id];
};

export const update = async (
  id: number,
  itemUpdate: BaseProperty,
): Promise<Property | null> => {
  const item = await find(id);

  if (!item) {
    return null;
  }

  items[id] = { id, ...itemUpdate };

  return items[id];
};

export const remove = async (id: number): Promise<null | void> => {
  const item = await find(id);

  if (!item) {
    return null;
  }

  delete items[id];
};
