import * as PropertyService from '../properties.service';

describe('Property Calc of square meter price', () => {
  it('should not recieve square meter less than 10', async () => {
    try {
      const response = await PropertyService.calculatePricePerSquareMeter(1);
      // Fail test if above expression doesn't throw anything.
      expect(true).toBe(false);
    } catch (e) {
      expect(e.message).toBe(
        'Square meter price should be between 10 and 10000',
      );
    }
  });
  it('should not recieve square meter more than 10000', async () => {
    try {
      const response = await PropertyService.calculatePricePerSquareMeter(
        40000,
      );
      // Fail test if above expression doesn't throw anything.
      expect(true).toBe(false);
    } catch (e) {
      expect(e.message).toBe(
        'Square meter price should be between 10 and 10000',
      );
    }
  });
  it('should recieve the value from the API for price per square meter', async () => {
    const response = await PropertyService.calculatePricePerSquareMeter(50);

    expect(response).toBe(100);
  });
});
